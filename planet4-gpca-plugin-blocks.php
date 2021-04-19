<?php
/**
 * Plugin Name:     Cards
 * Description:     Cards with clickable title, description, image, and more
 * Version:         0.2.1
 * Author:          Shawn Inder &lt;shawninder@gmail.com&gt;
 * License:         GPL-3.0-or-later
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     cards
 *
 * @package         cards-block
 */

const VERSION = "0.2.1";

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

function p4_child_theme_gpca_whitelist_blocks( $allowed_blocks, $post ) {
	$allowed = is_array($allowed_blocks) ? $allowed_blocks : array();
	array_push($allowed, 'cards-block/card', 'cards-block/category', 'cards-block/list');
	return $allowed;
}

function p4_child_theme_gpca_enqueue_block_assets () {
	wp_enqueue_style(
		'client-css',
		plugins_url( '/build/client.css' , __FILE__ ),
		array(),
		VERSION
	);
	wp_enqueue_script(
		'client',
		plugins_url( '/build/client.js' , __FILE__ ),
		array(),
		VERSION,
		true
	);
}

add_action( 'init', 'cards_block_cards_block_init' );
add_filter('allowed_block_types', 'p4_child_theme_gpca_whitelist_blocks', 11, 2);
add_action( 'enqueue_block_assets', 'p4_child_theme_gpca_enqueue_block_assets' );
