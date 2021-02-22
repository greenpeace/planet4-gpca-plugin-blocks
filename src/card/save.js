import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( {
	attributes: {
		url,
		title,
		desc,
		imgSrc,
		mediaUrl,
		imgUrl,
		eventDate,
		eventLocation,
	},
} ) {
	const imageUrl = imgSrc === 'lib' ? mediaUrl : imgUrl;

	return (
		<div { ...useBlockProps.save() }>
			<div className="aCard">
				{ imageUrl && (
					<div className="card-image" data-imgsrc={ imgSrc }>
						<img src={ imageUrl } alt={ title || url } />
					</div>
				) }
				<strong className="card-title">
					<a href={ url }>
						<RichText.Content value={ title || url } />
					</a>
				</strong>
				{ eventDate && (
					<em className="card-event-date">
						<RichText.Content value={ eventDate } />
					</em>
				) }
				{ desc && (
					<p className="card-desc">
						<RichText.Content value={ desc } />
					</p>
				) }
				{ eventLocation && (
					<span className="card-event-location">
						<RichText.Content value={ eventLocation } />
					</span>
				) }
			</div>
		</div>
	);
}
