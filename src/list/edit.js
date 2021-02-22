import {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import { PanelBody, CheckboxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Search from './search';
import updater from '../common/updater';

import './editor.scss';

const ALLOWED_BLOCKS = [ 'cards-block/category' ];
export default function Edit( { attributes: { showSearch }, setAttributes } ) {
	const updateAttribute = updater( setAttributes );
	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<div className="cards-list-settings">
					<PanelBody
						title={ __( 'Search', 'cards' ) }
						initialOpen={ true }
					>
						<CheckboxControl
							label={ __( 'Enable Search', 'cards' ) }
							checked={ showSearch === 'true' }
							onChange={ ( bool ) => {
								return updateAttribute( 'showSearch' )(
									bool ? 'true' : 'false'
								);
							} }
						/>
					</PanelBody>
				</div>
			</InspectorControls>
			<Search show={ showSearch } />
			<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
		</div>
	);
}
