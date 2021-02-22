import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import sanitizeTitle from '../common/sanitize-title';

export default function save( { attributes: { title } } ) {
	const cleanTitle = sanitizeTitle( title );
	const categoryUrl = `#${ cleanTitle }`;

	return (
		<div { ...useBlockProps.save() }>
			<h2 className="category-title">
				<a id={ cleanTitle } href={ categoryUrl } title={ title }>
					{ title }
				</a>
			</h2>
			<div className="cards-list-category-contents">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
