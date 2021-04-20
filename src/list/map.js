export default function Map( { show, apiKey = '', apiKey2 = '' } ) {
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
				value={ apiKey }
			/>
			<span className="map-api-key-2">{ apiKey2 }</span>
			{ show && <div id="cards-list-map-element" /> }
		</div>
	);
}
