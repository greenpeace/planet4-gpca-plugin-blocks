( function ( ctx ) {
	const searchBoxSelector = '.cards-list-search-controls';
	const searchResultsSelector = '.cards-list-search-results';
	const allFields = [ 'title', 'desc', 'eventLocation', 'el', 'category' ];

	const searchFields = [ 'title', 'desc', 'eventLocation', 'category' ];

	let categories, cards, searchBox, searchResults, query;

	// String.prototype.trim Polyfill from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim#polyfill
	if ( ! String.prototype.trim ) {
		String.prototype.trim = function () {
			return this.replace( /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '' );
		};
	}

	ctx.addEventListener( 'load', go, false );

	function go() {
		const doc = ctx.document;
		searchBox = doc.querySelector( searchBoxSelector );
		if ( searchBox ) {
			const eventuallyUpdateQuery = ctx.debounce( onQuery, 400 );
			const miniSearch = new ctx.MiniSearch( {
				idField: 'url',
				fields: searchFields,
				storeFields: allFields,
				searchOptions: {
					boost: {
						title: 2,
					},
					prefix: true,
					fuzzy: ( term ) => {
						return term.length > 3 ? 0.2 : null;
					},
				},
			} );
			const searchBoxInput = searchBox.querySelector( 'input' );
			searchResults = doc.querySelector( searchResultsSelector );
			categories = doc.querySelectorAll( '.wp-block-cards-block-category' );
			cards = Array.prototype.reduce.call(
				categories,
				( all, category ) => {
					category.categoryName = category.categoryName || category.querySelector( '.category-title' ).innerText;
					const catCards = category.querySelectorAll( '.aCard' );
					catCards.forEach( ( card ) => {
						const titleAnchor = card.querySelector(
							'.card-title a'
						);
						const url = titleAnchor.href;
						const location = card.querySelector(
							'.card-event-location'
						);
						const description = card.querySelector(
							'.card-desc'
						);
						all.push( {
							url,
							category: category.categoryName,
							el: card,
							title: titleAnchor.innerText,
							desc: description && description.innerText,
							eventLocation: location ? location.innerText : '',
						} );
					} );
					return all;
				},
				[]
			);
			miniSearch.addAll( cards );

			searchBoxInput.addEventListener(
				'change',
				eventuallyUpdateQuery,
				false
			);
			searchBoxInput.addEventListener(
				'input',
				eventuallyUpdateQuery,
				false
			);
			searchBoxInput.addEventListener(
				'keydown',
				possiblyDissmissSearchResults,
				false
			);
			ctx.addEventListener(
				'keydown',
				possiblyDissmissSearchResults,
				false
			);
			ctx.addEventListener(
				'click',
				possiblyDissmissSearchResults,
				false
			);

			function updateResults() {
				const filtered = miniSearch.search( query );
				empty( searchResults );

				if ( filtered.length > 0 ) {
					filtered.forEach( ( result ) => {
						searchResults.appendChild(
							createResult( result, query )
						);
					} );
					showSearchResults();
				} else if ( query.length > 0 ) {
					searchResults.appendChild( createEmptyResult( query ) );
					showSearchResults();
				} else {
					dissmissSearchResults();
				}
			}

			function onQuery( event ) {
				if ( event.target.value === query ) {
					return;
				}
				query = event.target.value;

				updateResults();
			}
		}
	}

	function possiblyDissmissSearchResults( event ) {
		if ( event.type === 'click' ) {
			if (
				! isWithin( event.target, [
					searchBoxSelector,
					searchResultsSelector,
				] )
			) {
				dissmissSearchResults();
			}
		} else {
			if ( event.key === 'Esc' || event.key === 'Escape' ) {
				dissmissSearchResults();
			}
			if (
				event.key === 'Enter' &&
				query &&
				isWithin( event.target, [ searchBoxSelector ] )
			) {
				showSearchResults();
			}
		}
	}

	function showSearchResults() {
		searchResults.classList.add( 'is-visible' );
		searchResults.classList.remove( 'is-hidden' );
	}

	function dissmissSearchResults() {
		searchResults.classList.remove( 'is-visible' );
		searchResults.classList.add( 'is-hidden' );
	}

	function isWithin( el, selectors ) {
		let selector,
			i = 0;
		while ( ( selector = selectors[ i++ ] ) ) {
			let elem = el;
			while ( elem !== null && ! elem.matches( 'body' ) ) {
				if ( elem.matches( selector ) ) {
					return true;
				}
				elem = elem.parentNode;
			}
		}
		return false;
	}

	function createEmptyResult() {
		const doc = ctx.document;
		const li = doc.createElement( 'li' );
		li.appendChild( doc.createTextNode( '∅' ) );
		return li;
	}

	function createResult( data ) {
		const doc = ctx.document;
		const li = doc.createElement( 'li' );
		const figure = doc.createElement( 'figure' );
		const clone = data.el.cloneNode( true );
		makeImgClickable( clone );
		clone.classList.add( 'isClone' );
		const eventLocationEl = clone.querySelector(
			'.card-event-location'
		);
		if ( eventLocationEl && ! eventLocationEl.innerText.trim() ) {
			clone.removeChild( eventLocationEl );
		}
		const eventDateEl = clone.querySelector( '.card-event-date' );
		if ( eventDateEl && ! eventDateEl.innerText.trim() ) {
			clone.removeChild( eventDateEl );
		}
		if ( data.category ) {
			const caption = doc.createElement( 'figcaption' );
			const catLink = doc.createElement( 'a' );
			catLink.href = `#${ data.category }`;
			catLink.appendChild( doc.createTextNode( data.category ) );
			caption.appendChild( catLink );
			clone.appendChild( caption );
		}
		figure.appendChild( clone );
		figure.classList.add( 'search-result' );
		li.appendChild( figure );
		return li;
	}

	function empty( el ) {
		return el.querySelectorAll( '*' ).forEach( ( item ) => {
			item.remove();
		} );
	}

	function makeImgClickable( card ) {
		const img = card.querySelector( '.card-image img' );

		if (img) {
			img.addEventListener( 'click', listener, false );
			img.addEventListener( 'auxclick', listener, false );
			img.classList.add( 'clickable' );
		}
		const href = card.querySelector( '.card-title a' ).href;

		function listener( event ) {
			if ( event.button === 0 ) {
				// Left click
				ctx.location.assign( href );
			} else if ( event.button === 1 ) {
				// Middle click
				ctx.open( href );
			}
		}
	}
} )( this );
