<?php
/**
 * Plugin Name:     Cards
 * Description:     Cards with clickable title, description, image, and more
 * Version:         0.2.11
 * Author:          Shawn Inder &lt;shawninder@gmail.com&gt;
 * License:         GPL-3.0-or-later
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     cards
 *
 * @package         cards-block
 */

function cards_block_cards_block_init() {
	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "cards-block/card" block first.'
		);
	}
	$script_asset = require( $script_asset_path );

	$editor_script     = 'build/index.js';
	wp_register_script(
		'cards-block-card-block-editor',
		plugins_url( $editor_script, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'cards-block-card-block-editor', 'cards' );

	$editor_style = 'build/index.css';
	wp_register_style(
		'cards-block-card-block-editor',
		plugins_url( $editor_style, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_style" )
	);

	$script = 'build/client.js';
	wp_register_script(
		'cards-block-card-block',
		plugins_url( $script, __FILE__ ),
		array(),
		filemtime( "$dir/$script" )
	);

	$style = 'build/style-index.css';
	wp_register_style(
		'cards-block-card-block',
		plugins_url( $style, __FILE__ ),
		array(),
		filemtime( "$dir/$style" )
	);

	register_block_type(
		'cards-block/card',
		array(
			'editor_script' => 'cards-block-card-block-editor',
			'editor_style'  => 'cards-block-card-block-editor',
			'style'         => 'cards-block-card-block',
			'script'				=> 'cards-block-card-block'
		)
	);
}

function p4_child_theme_gpca_whitelist_blocks( $allowed_blocks, $post ) {
	$allowed = is_array($allowed_blocks) ? $allowed_blocks : array();
	array_push($allowed, 'cards-block/card', 'cards-block/category', 'cards-block/list');
	return $allowed;
}

add_action( 'init', 'cards_block_cards_block_init' );
add_filter('allowed_block_types', 'p4_child_theme_gpca_whitelist_blocks', 11, 2);

add_action( 'wp_headers', static function ( $headers ): array {
	if ( empty( $headers['Content-Security-Policy'] ) ) {
		return $headers;
	}
	$headers['Content-Security-Policy'] .= '; worker-src blob: ; child-src * blob: ; img-src data: blob: http: https: ';
	return $headers;
}, 11, 1);
