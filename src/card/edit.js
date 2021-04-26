import {
	InspectorControls,
	useBlockProps,
	RichText,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import { withSelect } from '@wordpress/data';
import {
	PanelBody,
	TabPanel,
	Button,
	CheckboxControl,
	TextControl,
} from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import Coordinates from 'coordinate-parser';
import updater from '../common/updater';

import './editor.scss';

const commonRichTextOptions = {
	keepPlaceholderOnFocus: true,
};

const defaultCalculatedCoordinates = '';

function Edit( {
	attributes: {
		url,
		target,
		imgSrc,
		mediaId,
		mediaUrl,
		imgUrl,
		imgAlt,
		title,
		desc,
		eventDate,
		eventLocation,
		coordinates,
	},
	setAttributes,
} ) {
	const [ calculatedCoordinates, setCalculatedCoordinates ] = useState(
		defaultCalculatedCoordinates
	);
	const imageUrl = imgSrc === 'lib' ? mediaUrl : imgUrl;
	const updateAttribute = updater( setAttributes );

	useEffect( () => {
		if ( coordinates === '' ) {
			setCalculatedCoordinates( defaultCalculatedCoordinates );
		} else {
			try {
				const position = new Coordinates( coordinates );
				setCalculatedCoordinates(
					`${ position.getLatitude() }º Latitude ${ position.getLongitude() }º Longitude`
				);
			} catch ( ex ) {
				setCalculatedCoordinates( ex.toString() );
			}
		}
	}, [ coordinates ] );

	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<div className="card-settings">
					<PanelBody
						className={ `card-settings-link${
							! url ? ' warn' : ''
						}` }
						title={ __( 'Link', 'cards' ) }
						initialOpen={ true }
					>
						<TextControl
							label={ __( 'URL', 'cards' ) }
							value={ url }
							onChange={ updateAttribute( 'url' ) }
						/>
						<CheckboxControl
							label={ __( 'Open in new tab', 'cards' ) }
							checked={ target === '_blank' }
							onChange={ ( bool ) => {
								return updateAttribute( 'target' )(
									bool ? '_blank' : '_self'
								);
							} }
						/>
					</PanelBody>
					<PanelBody
						title={ __( 'Image', 'cards' ) }
						initialOpen={ true }
					>
						<TextControl
							label="alt"
							value={ imgAlt }
							onChange={ updateAttribute( 'imgAlt' ) }
						/>
						<TabPanel
							initialTabName={ imgSrc }
							onSelect={ updateAttribute( 'imgSrc' ) }
							tabs={ [
								{
									name: 'lib',
									title: __( 'Media Library', 'cards' ),
									el: (
										<div className="tab-panel">
											<MediaUploadCheck>
												<MediaUpload
													allowedTypes={ [ 'image' ] }
													onSelect={ ( media ) => {
														setAttributes( {
															mediaId: media.id,
															mediaUrl: media.url,
														} );
													} }
													value={ mediaId }
													render={ ( { open } ) => {
														return (
															<div>
																{ mediaUrl && (
																	<>
																		<div className="card-image">
																			<img
																				src={
																					mediaUrl
																				}
																				alt={
																					imgAlt ||
																					title ||
																					url
																				}
																			/>
																		</div>
																	</>
																) }
																{ ! mediaUrl && (
																	<Button
																		onClick={
																			open
																		}
																	>
																		{ __(
																			'Open Media Library',
																			'cards'
																		) }
																	</Button>
																) }
																{ mediaUrl && (
																	<Button
																		onClick={ () => {
																			setAttributes(
																				{
																					mediaId: 0,
																					mediaUrl:
																						'',
																				}
																			);
																		} }
																	>
																		{ __(
																			'Remove Image',
																			'cards'
																		) }
																	</Button>
																) }
															</div>
														);
													} }
												/>
											</MediaUploadCheck>
										</div>
									),
								},
								{
									name: 'url',
									title: __( 'Image URL', 'cards' ),
									el: (
										<>
											<TextControl
												label={ __(
													'Image URL',
													'cards'
												) }
												value={ imgUrl }
												onChange={ updateAttribute(
													'imgUrl'
												) }
											/>
											<div className="card-image">
												<img
													src={ imgUrl }
													alt={
														imgAlt || title || url
													}
												/>
											</div>
										</>
									),
								},
							] }
						>
							{ ( tab ) => {
								return tab.el;
							} }
						</TabPanel>
					</PanelBody>
					<PanelBody
						title={ __( 'Geolocation', 'cards' ) }
						initialOpen={ false }
					>
						<TextControl
							label={ __( 'Coordinates (lat, lon)', 'cards' ) }
							value={ coordinates }
							onChange={ updateAttribute( 'coordinates' ) }
						/>
						<span className="calculated-coordinates">
							{ calculatedCoordinates }
						</span>
					</PanelBody>
				</div>
			</InspectorControls>
			<div className="a-card card-editor">
				{ imageUrl && (
					<div className="card-image">
						<img src={ imageUrl } alt={ title || url } />
					</div>
				) }
				<div className="card-title">
					<a
						className="card-url"
						href={ url }
						target={ target }
						rel="noopener noreferrer"
					>
						{ title || url }
					</a>
					<RichText
						tagName="strong"
						value={ title }
						onChange={ updateAttribute( 'title' ) }
						allowedFormats={ [ 'core/italic' ] }
						placeholder={ __( 'Title', 'cards' ) }
						{ ...commonRichTextOptions }
					/>
				</div>
				<RichText
					className="card-event-date"
					tagName="em"
					value={ eventDate }
					onChange={ updateAttribute( 'eventDate' ) }
					placeholder={ __( 'Event date', 'cards' ) }
					{ ...commonRichTextOptions }
				/>
				<RichText
					className="card-desc"
					tagName="p"
					value={ desc }
					onChange={ updateAttribute( 'desc' ) }
					placeholder={ __( 'Short description…', 'cards' ) }
					{ ...commonRichTextOptions }
				/>
				<RichText
					className="card-event-location"
					tagName="span"
					value={ eventLocation }
					onChange={ updateAttribute( 'eventLocation' ) }
					placeholder={ __( 'Event location', 'cards' ) }
					{ ...commonRichTextOptions }
				/>
				{ coordinates && (
					<span className="card-coordinates">{ coordinates }</span>
				) }
			</div>
		</div>
	);
}

export default withSelect( ( select, { attributes: { mediaId } } ) => {
	return {
		media: mediaId ? select( 'core' ).getMedia( mediaId ) : undefined,
	};
} )( Edit );
