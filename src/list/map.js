export default function Map( { show, apiKey = '' } ) {
	return (
		<div
			className={ `cards-list-map ${
				show === 'true' ? 'is-visible' : 'is-hidden'
			}` }
		>
			<span className="data-hidden show-map">{ show }</span>
			<span className="data-hidden map-api-key">{ apiKey }</span>
			{ show && <div id="cards-list-map-element" /> }
		</div>
	);
}
