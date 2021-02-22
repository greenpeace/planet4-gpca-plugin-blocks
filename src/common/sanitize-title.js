export default function sanitizeTitle( str ) {
	let newStr = str.replace( /^\s+|\s+$/g, '' ); // trim
	newStr = newStr.toLowerCase();

	const from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;';
	const to = 'aaaaaeeeeeiiiiooooouuuunc------';
	for ( let i = 0, l = from.length; i < l; i += 1 ) {
		newStr = newStr.replace(
			new RegExp( from.charAt( i ), 'g' ),
			to.charAt( i )
		);
	}

	newStr = newStr
		.replace( /[^a-z0-9 -]/g, '' ) // remove invalid chars
		.replace( /\s+/g, '-' ) // collapse whitespace and replace by -
		.replace( /-+/g, '-' ); // collapse dashes

	return newStr;
}
