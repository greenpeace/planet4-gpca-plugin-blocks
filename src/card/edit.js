import {
	InspectorControls,
	useBlockProps,
	PlainText,
	RichText,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import { withSelect } from '@wordpress/data';
import {
	PanelBody,
	TabPanel,
	Button,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import updater from '../common/updater';

import './editor.scss';

const commonRichTextOptions = {
	keepPlaceholderOnFocus: true,
};

function Edit( {
	attributes: {
		url,
		imgSrc,
		mediaId,
		mediaUrl,
		imgUrl,
		imgAlt,
		title,
		desc,
		eventDate,
		eventLocation,
	},
	setAttributes,
} ) {
	const imageUrl = imgSrc === 'lib' ? mediaUrl : imgUrl;
	const updateAttribute = updater( setAttributes );

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
						<PlainText
							type="string"
							value={ url }
							onChange={ updateAttribute( 'url' ) }
							placeholder={ __( 'URL', 'cards' ) }
						/>
					</PanelBody>
					<PanelBody
						title={ __( 'Image', 'cards' ) }
						initialOpen={ true }
					>
						<PlainText
							type="string"
							value={ imgAlt }
							onChange={ updateAttribute( 'imgAlt' ) }
							placeholder={ 'alt' }
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
											<PlainText
												type="url"
												value={ imgUrl }
												onChange={ updateAttribute(
													'imgUrl'
												) }
												placeholder={ __(
													'Image URL',
													'cards'
												) }
											/>
											<div className="card-image">
												<img
													src={ imgUrl }
													alt={ title || url }
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
				</div>
			</InspectorControls>
			<div className="aCard card-editor">
				{ imageUrl && (
					<div className="card-image">
						<img src={ imageUrl } alt={ title || url } />
					</div>
				) }
				<div className="card-title">
					<a className="card-url" href={ url }>
						{ title }
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
					placeholder={ __( 'Description…', 'cards' ) }
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
			</div>
		</div>
	);
}

export default withSelect( ( select, { attributes: { mediaId } } ) => {
	return {
		media: mediaId ? select( 'core' ).getMedia( mediaId ) : undefined,
	};
} )( Edit );
