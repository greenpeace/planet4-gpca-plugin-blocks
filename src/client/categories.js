import whenReady from '../common/whenReady';

function go() {
	const doc = window.document;
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
		if ( anchor ) {
			anchor.addEventListener(
				'click',
				( event ) => {
					event.preventDefault();
					event.stopPropagation();
					if ( collapser.matches( '.opened' ) ) {
						window.location.hash = event.target.id;
					} else {
						window.location.hash = '';
					}
					toggleCollapse( collapser );
				},
				false
			);
		}
	} );
}

function toggleCollapse( toggle ) {
	toggle.classList.toggle( 'opened' );
	const section = toggle.nextElementSibling;
	section.classList.toggle( 'is-hidden' );
}

export default {
	init: () => {
		whenReady( '.category-title', go );
	},
};
