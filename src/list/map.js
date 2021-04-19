export default function Map( { show, apiKey } ) {
	return (
		<div
			className={ `cards-list-map ${
				show === 'true' ? 'is-visible' : 'is-hidden'
			}` }
		>
			<input className="show-map" type="hidden" value={ show } />
			<input
				className="map-api-key"
				type="hidden"
				value={ apiKey || '' }
			/>
			{ show && <div id="cards-list-map-element" /> }
		</div>
	);
}
