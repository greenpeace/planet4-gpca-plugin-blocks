import mapboxgl from 'mapbox-gl';
import Coordinates from 'coordinate-parser';

import 'mapbox-gl/dist/mapbox-gl.css';
import './map.css';

const doc = window.document;
const container = 'cards-list-map-element';
let mapLoadedWith = null;
let map = null;
let markers = [];

window.MAP_clearMarkers = () => {
	markers.forEach( ( marker ) => {
		marker.remove();
	} );
	markers = [];
};

function extractCoords( str ) {
	try {
		const position = new Coordinates( str );
		return [ position.getLongitude(), position.getLatitude() ];
	} catch ( ex ) {
		console.warn( ex );
	}
	return false;
}

window.MAP_getCardCoordinates = () => {
	const cards = doc.querySelectorAll( '.a-card' );

	return Array.prototype.reduce.call(
		cards,
		( cardCoords, card ) => {
			const coordinates = card.querySelector( '.card-coordinates' );
			if ( coordinates ) {
				const coordStr = coordinates.innerText;
				if ( coordStr ) {
					const coords = extractCoords( coordStr );
					if ( coords ) {
						cardCoords.push( [ card, coords ] );
					}
				}
			}
			return cardCoords;
		},
		[]
	);
};

window.MAP_setMarkers = ( cardCoords ) => {
	window.MAP_clearMarkers();
	cardCoords.forEach( ( [ card, coordinates ] ) => {
		const clone = card.cloneNode( true );
		clone.classList.add( 'isClone' );
		const marker = doc.createElement( 'div' );
		marker.classList.add( 'marker' );
		const img = card.querySelector( '.card-image img' );
		if ( img ) {
			marker.style.backgroundImage = `url("${ img.src }")`;
		}
		const lngLat = coordinates;
		try {
			const popup = new mapboxgl.Popup( {
				anchor: 'left',
			} )
				.setDOMContent( clone )
				.setMaxWidth( '320px' );
			markers.push(
				new mapboxgl.Marker( marker )
					.setLngLat( lngLat )
					.setPopup( popup )
					.addTo( map )
			);
		} catch ( ex ) {
			console.warn( ex );
		}
	} );
};

window.MAP_updateMarkers = () => {
	const cardCoords = window.MAP_getCardCoordinates();
	window.MAP_setMarkers( cardCoords );
};

window.MAP_getMarkerBounds = ( cardCoords ) => {
	const { minLat, maxLat, minLon, maxLon } = cardCoords.reduce(
		( stats, [ , [ lon, lat ] ] ) => {
			if ( typeof stats.minLat === 'undefined' ) {
				stats.minLat = lat;
			}
			if ( typeof stats.maxLat === 'undefined' ) {
				stats.maxLat = lat;
			}
			if ( typeof stats.minLon === 'undefined' ) {
				stats.minLon = lon;
			}
			if ( typeof stats.maxLon === 'undefined' ) {
				stats.maxLon = lon;
			}

			if ( lat < stats.minLat ) {
				stats.minLat = lat;
			}
			if ( lat > stats.maxLat ) {
				stats.maxLat = lat;
			}
			if ( lon < stats.minLon ) {
				stats.minLon = lon;
			}
			if ( lon > stats.maxLon ) {
				stats.maxLon = lon;
			}

			return stats;
		},
		{}
	);

	return [
		[ minLon || -143, minLat || 44 ],
		[ maxLon || -51, maxLat || 70 ],
	];
};

window.MAP_loadMap = () => {
	const apiKeyElement = doc.querySelector( '.map-api-key' );
	const apiKey = apiKeyElement.value;
	if ( apiKey !== mapLoadedWith ) {
		mapboxgl.accessToken = apiKey;

		const cardCoords = window.MAP_getCardCoordinates();

		map = new mapboxgl.Map( {
			container,
			style: 'mapbox://styles/mapbox/outdoors-v11',
		} );
		try {
			map.fitBounds( window.MAP_getMarkerBounds( cardCoords ), {
				padding: 16,
			} );
		} catch ( ex ) {
			console.warn( ex );
		}
		window.MAP_setMarkers( cardCoords );
		mapLoadedWith = mapboxgl.accessToken;
	}
};

window.MAP_autofit = () => {
	const cardCoords = window.MAP_getCardCoordinates();
	map.fitBounds( window.MAP_getMarkerBounds( cardCoords ), {
		padding: 16,
	} );
};

function init() {
	const mapEl = doc.querySelector( `#${ container }` );
	if ( mapEl ) {
		window.MAP_loadMap();
	}
}

export default { init };
