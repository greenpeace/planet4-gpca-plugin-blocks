import {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
	PlainText,
} from '@wordpress/block-editor';
import { PanelBody, CheckboxControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import Search from './search';
import Map from './map';
import updater from '../common/updater';

import './editor.scss';

const ALLOWED_BLOCKS = [ 'cards-block/category' ];

export default function Edit( {
	attributes: { showSearch, showMap, mapApiKey, mapApiKey2 },
	setAttributes,
} ) {
	const updateAttribute = updater( setAttributes );

	useEffect( () => {
		if ( showMap && mapApiKey && window.MAP_loadMap ) {
			window.MAP_loadMap();
		}
	}, [ showMap, mapApiKey ] );

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
					<PanelBody
						title={ __( 'Map', 'cards' ) }
						initialOpen={ true }
					>
						<CheckboxControl
							label={ __( 'Enable Map', 'cards' ) }
							checked={ showMap === 'true' }
							onChange={ ( bool ) => {
								return updateAttribute( 'showMap' )(
									bool ? 'true' : 'false'
								);
							} }
						/>
						{ showMap === 'true' && (
							<PlainText
								type="string"
								value={ mapApiKey }
								onChange={ (val) => {
								  updateAttribute( 'mapApiKey' )(val);
									updateAttribute( 'mapApiKey2' )(val);
								} }
								placeholder={ __( 'MapBox API key', 'cards' ) }
								className={ ! mapApiKey ? 'warn' : '' }
							/>
						) }
					</PanelBody>
				</div>
			</InspectorControls>
			<Search show={ showSearch } />
			<div className="map-area">
				<Map show={ showMap } apiKey={ mapApiKey } apiKey2={mapApiKey2} />
				<div
					className={ `map-btns ${
						showMap === 'true' ? 'is-visible' : 'is-hidden'
					}` }
				>
					<button onClick={ window.MAP_updateMarkers }>
						Refresh Markers
					</button>
					<button onClick={ window.MAP_autofit }>Auto-fit</button>
				</div>
			</div>
			<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
		</div>
	);
}
