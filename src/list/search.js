import { __ } from '@wordpress/i18n';

export default function Search( { show } ) {
	return (
		<div
			className={ `cards-list-search ${
				show === 'true' ? 'is-visible' : 'is-hidden'
			}` }
		>
			<span className="data-hidden show-search">{ show }</span>
			<div className="cards-list-search-controls">
				<span
					className="icon"
					role="img"
					aria-label={ __( 'Search', 'list' ) }
				></span>{ ' ' }
				<input type="text" />
			</div>
			<ol className="cards-list-search-results"></ol>
		</div>
	);
}
