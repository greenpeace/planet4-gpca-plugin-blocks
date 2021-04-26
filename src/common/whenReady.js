export default function whenReady( selector, cb ) {
	let count = 0;
	const interval = setInterval( () => {
		if ( window.document.querySelector( selector ) ) {
			clearInterval( interval );
			cb();
		} else {
			count += 1;
		}
		if ( count > 10 ) {
			clearInterval( interval );
		}
	}, 500 );
}
