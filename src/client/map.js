import mapboxgl from 'mapbox-gl';
import Coordinates from 'coordinate-parser';

const doc = window.document;
const container = 'cards-list-map-element';
window.MAP_loadedWith = null;
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
	try {
		const apiKeyElement = doc.querySelector( '.map-api-key' );
		const apiKey = apiKeyElement.innerText;
		if ( apiKey !== window.MAP_loadedWith ) {
			mapboxgl.accessToken = apiKey;
			const cardCoords = window.MAP_getCardCoordinates();
			const fallback = 'mapbox://styles/mapbox/outdoors-v11';
			const styleElement = doc.querySelector( '.map-style' );
			const styleText = styleElement ? styleElement.innerText : false;

			map = new mapboxgl.Map( {
				container,
				style: styleText || fallback,
				center: [-96, 58],
				zoom: 3
			} );
			try {
				map.fitBounds( window.MAP_getMarkerBounds( cardCoords ), {
					padding: { top: 16, right: 16, bottom: 45, left: 16 },
				} );
			} catch ( ex ) {
				console.warn( '(ignoring) Auto-fitting exception', ex );
			}
			window.MAP_setMarkers( cardCoords );
			window.MAP_loadedWith = mapboxgl.accessToken;
		}
	} catch ( ex ) {
		console.warn( "Couldn't load map", ex );
	}
};

window.MAP_setStyle = ( style ) => {
	map.setStyle( style );
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
