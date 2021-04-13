<?php
/**
 * Plugin Name:     Cards
 * Description:     Cards with clickable title, description, image, and more
 * Version:         0.0.1
 * Author:          Shawn Inder &lt;shawninder@gmail.com&gt;
 * License:         GPL-3.0-or-later
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     cards
 *
 * @package         cards-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function cards_block_cards_block_init() {
	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "cards-block/card" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'cards-block-card-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'cards-block-card-block-editor', 'cards' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'cards-block-card-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'cards-block-card-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'cards-block/card',
		array(
			'editor_script' => 'cards-block-card-block-editor',
			'editor_style'  => 'cards-block-card-block-editor',
			'style'         => 'cards-block-card-block',
		)
	);
}
add_action( 'init', 'cards_block_cards_block_init' );

function p4_child_theme_gpca_whitelist_blocks( $allowed_blocks, $post ) {
	array_push($allowed_blocks, 'cards-block/card', 'cards-block/category', 'cards-block/list');
	return $allowed_blocks;
}

add_filter('allowed_block_types', 'p4_child_theme_gpca_whitelist_blocks', 11, 2);

function categoryScript () {
	if (!is_admin()) {
	  wp_enqueue_script( 'collapseCategories',  plugins_url( '/client/collapseCategories.js' , __FILE__ ) );
	}
	wp_enqueue_script('minisearch', 'https://cdn.jsdelivr.net/npm/minisearch@3.0.2/dist/umd/index.min.js' );
  wp_enqueue_script('debounce', 'https://cdn.jsdelivr.net/npm/javascript-debounce@1.0.1/dist/javascript-debounce.min.js');
	wp_enqueue_script( 'search',  plugins_url( '/client/search.js' , __FILE__ ) );
}
add_action( 'enqueue_block_assets', 'categoryScript' );
