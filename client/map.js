( function ( ctx ) {
  const doc = ctx.document;
  const container = 'cards-list-map-element';
  let mapLoadedWith = null;
  let map = null;
  let markers = [];

  ctx.MAP_clearMarkers = () => {
    markers.forEach((marker) => {
      marker.remove()
    })
    markers = [];
  };

  ctx.MAP_getCardCoordinates = () => {
    const cards = doc.querySelectorAll('.aCard');

    return Array.prototype.reduce.call(cards, (cardCoords, card) => {
      const coordinates = card.querySelector('.card-coordinates')
      if (coordinates) {
        const coordStr = coordinates.innerText
        if (coordStr) {
          cardCoords.push([card, coordStr.split(',')])
        }
      }
      return cardCoords;
    }, []);
  };

  ctx.MAP_setMarkers = (cardCoords) => {
    ctx.MAP_clearMarkers()
    cardCoords.forEach(([card, coordinates]) => {
      const clone = card.cloneNode( true );
      clone.classList.add( 'isClone' );
      const marker = doc.createElement('div');
      marker.classList.add('marker');
      const img = card.querySelector('.card-image img');
      if (img) {
        marker.style.backgroundImage = `url("${img.src}")`;
      }
      const lngLat = coordinates;
      const popup = new ctx.mapboxgl.Popup({
        anchor: 'left'
      }).setDOMContent(clone)
        .setMaxWidth('320px');
      markers.push(
        new ctx.mapboxgl.Marker(marker)
          .setLngLat(lngLat)
          .setPopup(popup)
          .addTo(map)
      );
    });
  };

  ctx.MAP_updateMarkers = () => {
    const cardCoords = ctx.MAP_getCardCoordinates();
    ctx.MAP_setMarkers(cardCoords);
  };

  ctx.MAP_getMarkerBounds = (cardCoords) => {
    const { minLat, maxLat, minLon, maxLon } = cardCoords.reduce((stats, [card, [lon, lat]]) => {
      if (typeof stats.minLat === 'undefined') {
        stats.minLat = lat;
      }
      if (typeof stats.maxLat === 'undefined') {
        stats.maxLat = lat;
      }
      if (typeof stats.minLon === 'undefined') {
        stats.minLon = lon;
      }
      if (typeof stats.maxLon === 'undefined') {
        stats.maxLon = lon;
      }

      if (lat < stats.minLat) {
        stats.minLat = lat;
      }
      if (lat > stats.maxLat) {
        stats.maxLat = lat;
      }
      if (lon < stats.minLon) {
        stats.minLon = lon;
      }
      if (lon > stats.maxLon) {
        stats.maxLon = lon;
      }

      return stats;
    }, {});

    return [
      [minLon || -143, minLat || 44],
      [maxLon || -51, maxLat || 70]
    ];
  };

  ctx.MAP_loadMap = () => {
    const apiKeyElement = doc.querySelector( '.map-api-key' );
    const apiKey = apiKeyElement.value;
    if (apiKey !== mapLoadedWith) {
      ctx.mapboxgl.accessToken = apiKey;

      const cardCoords = ctx.MAP_getCardCoordinates();

      map = new ctx.mapboxgl.Map( {
        container,
        style: 'mapbox://styles/mapbox/outdoors-v11'
      } );
      map.fitBounds(ctx.MAP_getMarkerBounds(cardCoords), {
        padding: 16
      });
      ctx.MAP_setMarkers(cardCoords);
      mapLoadedWith = ctx.mapboxgl.accessToken;
    }
  };

  ctx.MAP_autofit = () => {
    const cardCoords = ctx.MAP_getCardCoordinates();
    map.fitBounds(ctx.MAP_getMarkerBounds(cardCoords), {
      padding: 16
    });
  };

  ctx.addEventListener( 'load', go, false );

  function go () {
    const mapEl = doc.querySelector(`#${container}`);
    if (mapEl) {
      ctx.MAP_loadMap();
    }
  }

} )( this );
