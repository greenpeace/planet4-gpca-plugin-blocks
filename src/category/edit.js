import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import './editor.scss';

const ALLOWED_BLOCKS = [ 'cards-block/card' ];

export default function Edit( { attributes: { title }, setAttributes } ) {
	return (
		<div { ...useBlockProps() }>
			<RichText
				className="category-title"
				tagName="h2"
				value={ title }
				onChange={ ( newTitle ) => {
					setAttributes( { title: newTitle } );
				} }
				allowedFormats={ [ 'core/italic' ] }
				placeholder={ __( 'Category Title', 'category' ) }
				keepPlaceholderOnFocus={ true }
			/>
			<div className="cards-list-category-contents">
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					orientation="vertical"
				/>
			</div>
		</div>
	);
}
