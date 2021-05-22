import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import sanitizeTitle from '../common/sanitize-title';

export default function save( { attributes: { title, startsClosed } } ) {
	const cleanTitle = sanitizeTitle( title );
	const categoryUrl = `#${ cleanTitle }`;

	return (
		<div { ...useBlockProps.save() }>
			<span className="data-hidden starts-closed">{ startsClosed }</span>
			<h2 className={`category-title${startsClosed === 'true' ? '' : ' opened'}`}>
				<a id={ cleanTitle } href={ categoryUrl } title={ title }>
					{ title }
				</a>
			</h2>
			<div className={`cards-list-category-contents${startsClosed === 'true' ? ' is-hidden' : ''}`}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
