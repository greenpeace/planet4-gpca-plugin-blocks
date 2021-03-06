import {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	PanelBody,
	CheckboxControl,
	SelectControl,
	TextControl,
} from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import Search from './search';
import Map from './map';
import updater from '../common/updater';
import mapStyles from '../common/mapStyles';

import './editor.scss';

const ALLOWED_BLOCKS = [ 'cards-block/category' ];

export default function Edit( {
	attributes: { showSearch, showMap, mapApiKey, mapStyle },
	setAttributes,
} ) {
	const updateAttribute = updater( setAttributes );

	useEffect( () => {
		if ( showMap && mapApiKey && window.MAP_loadMap ) {
			window.MAP_loadMap();
		}
	}, [ showMap, mapApiKey ] );

	useEffect( () => {
		if (
			showMap &&
			mapApiKey &&
			window.MAP_loadedWith !== null &&
			window.MAP_setStyle
		) {
			window.MAP_setStyle( mapStyle );
		}
	}, [ mapStyle ] );

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
							<>
								<TextControl
									label={ __( 'MapBox API key', 'cards' ) }
									value={ mapApiKey }
									onChange={ updateAttribute( 'mapApiKey' ) }
									className={ ! mapApiKey ? 'warn' : '' }
								/>
								<SelectControl
									label={ __( 'Map style', 'cards' ) }
									value={ mapStyle }
									options={ mapStyles }
									onChange={ updateAttribute( 'mapStyle' ) }
								/>
							</>
						) }
					</PanelBody>
				</div>
			</InspectorControls>
			<Search show={ showSearch } />
			<div className="map-area">
				<Map show={ showMap } apiKey={ mapApiKey } style={ mapStyle } />
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
