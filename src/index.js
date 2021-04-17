import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';


import CardEdit from './card/edit';
import CardSave from './card/save';
import './card/style.scss';

import CategoryEdit from './category/edit';
import CategorySave from './category/save';
import './category/style.scss';

import ListEdit from './list/edit';
import ListSave from './list/save';
import './list/style.scss';

import { CardIcon, CategoryIcon, ListIcon } from './icons';

registerBlockType( 'cards-block/card', {
	apiVersion: 2,
	title: __( 'Card', 'cards' ),
	description: __( 'Cards with clickable title, description, image, and more', 'cards' ),
	category: 'text',
	icon: CardIcon,
	edit: CardEdit,
	save: CardSave,
	attributes: {
		url: {
			type: 'string',
			source: 'attribute',
			selector: 'a',
			attribute: 'href',
		},
		imgSrc: {
			type: 'string',
			default: 'lib',
		},
		imgUrl: {
			type: 'string',
		},
		mediaId: {
			type: 'number',
			default: 0,
		},
		mediaUrl: {
			type: 'string',
		},
		imageUrl: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
		imgAlt: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'alt',
		},
		title: {
			type: 'string',
			source: 'html',
			selector: 'a',
		},
		desc: {
			type: 'string',
			source: 'html',
			selector: '.card-desc',
		},
		eventDate: {
			type: 'string',
			source: 'html',
			selector: '.card-event-date',
		},
		eventLocation: {
			type: 'string',
			source: 'html',
			selector: '.card-event-location',
		},
		coordinates: {
			type: 'string',
			source: 'html',
			selector: '.card-coordinates'
		}
	},
	example: {
		attributes: {
			url: 'http://perdu.com',
			title: "Perdu sur l'Internet?",
			desc: 'Pas de panique, on va vous aider',
			imgUrl:
				'https://upload.wikimedia.org/wikipedia/commons/9/93/Perdu.svg',
			mediaId: 0,
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/9/93/Perdu.svg',
		},
	},
} );

registerBlockType( 'cards-block/category', {
	apiVersion: 2,
	title: __( 'List Category', 'category' ),
	description: __(
		'Collapsible category for searchable lists of cards',
		'category'
	),
	supports: {
		align: true,
	},
	icon: CategoryIcon,
	edit: CategoryEdit,
	save: CategorySave,
	attributes: {
		title: {
			type: 'string',
			source: 'text',
			selector: '.category-title',
		},
	},
} );

registerBlockType( 'cards-block/list', {
	apiVersion: 2,
	title: __( 'List of cards', 'cards' ),
	description: __( 'List of cards with categories, search and more', 'cards' ),
	supports: {
		align: true,
	},
	category: 'text',
	icon: ListIcon,
	edit: ListEdit,
	save: ListSave,
	attributes: {
		showSearch: {
			type: 'string',
			source: 'attribute',
			selector: '.show-search',
			attribute: 'value',
			default: 'false',
		},
		showMap: {
			type: 'string',
			source: 'attribute',
			selector: '.show-map',
			attribute: 'value',
			default: 'false'
		},
		mapApiKey: {
			type: 'string',
			source: 'attribute',
			selector: '.map-api-key',
			attribute: 'value'
		}
	},
} );
