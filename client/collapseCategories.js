( function ( ctx ) {
	const doc = ctx.document;

	ctx.addEventListener( 'load', go, false );

	function go() {
		const collapsers = doc.querySelectorAll( '.category-title' );
		collapsers.forEach( ( collapser ) => {
			collapser.addEventListener(
				'click',
				( event ) => {
					toggleCollapse( event.target );
				},
				false
			);
			const anchor = collapser.querySelector( 'a' );
			anchor.addEventListener(
				'click',
				( event ) => {
					event.preventDefault();
					event.stopPropagation();
					if ( collapser.matches( '.opened' ) ) {
						ctx.location.hash = event.target.id;
					} else {
						ctx.location.hash = '';
					}
					toggleCollapse( collapser );
				},
				false
			);
		} );
	}

	function toggleCollapse( toggle ) {
		toggle.classList.toggle( 'opened' );
		const section = toggle.nextElementSibling;
		section.classList.toggle( 'is-hidden' );
	}
} )( this );
