import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import Search from './search';

export default function save( { attributes: { showSearch } } ) {
	return (
		<div { ...useBlockProps.save() }>
			<Search show={ showSearch } />
			<InnerBlocks.Content />
		</div>
	);
}
