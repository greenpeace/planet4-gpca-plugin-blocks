import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import Search from './search';
import Map from './map';

export default function save( {
	attributes: { showSearch, showMap, mapApiKey, mapApiKey2 },
} ) {
	return (
		<div { ...useBlockProps.save() }>
			<Search show={ showSearch } />
			<Map show={ showMap } apiKey={ mapApiKey } apiKey2={mapApiKey2} />
			<InnerBlocks.Content />
		</div>
	);
}
