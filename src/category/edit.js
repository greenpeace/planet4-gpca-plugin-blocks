import {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
	RichText,
} from '@wordpress/block-editor';
import { PanelBody, CheckboxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import updater from '../common/updater';

import './editor.scss';

const ALLOWED_BLOCKS = [ 'cards-block/card' ];

export default function Edit( {
	attributes: { title, startsClosed },
	setAttributes,
} ) {
	const updateAttribute = updater( setAttributes );
	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<div className="cards-category-settings">
					<PanelBody
						title={ __( 'Initial State', 'cards' ) }
						initialOpen={ true }
					>
						<CheckboxControl
							label={ __( 'Starts closed', 'cards' ) }
							checked={ startsClosed === 'true' }
							onChange={ ( bool ) => {
								return updateAttribute( 'startsClosed' )(
									bool ? 'true' : 'false'
								);
							} }
						/>
					</PanelBody>
				</div>
			</InspectorControls>
			<RichText
				className={ `category-title${
					startsClosed === 'true' ? '' : ' opened'
				}` }
				tagName="h2"
				value={ title }
				onChange={ ( newTitle ) => {
					setAttributes( { title: newTitle } );
				} }
				allowedFormats={ [ 'core/italic' ] }
				placeholder={ __( 'Category Title', 'category' ) }
				keepPlaceholderOnFocus={ true }
			/>
			<div
				className={ `cards-list-category-contents${
					startsClosed === 'true' ? ' is-hidden' : ''
				}` }
			>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					orientation="vertical"
				/>
			</div>
		</div>
	);
}
