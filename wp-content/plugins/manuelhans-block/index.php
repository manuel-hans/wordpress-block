<?php

/**
 * Plugin Name: Manuel Hans block
 */
function gutenberg_manuelhans_register_block() {
    	// Register blocks in the format $dir => $render_callback.
	$blocks = array(
		'container'  => '', // Static block. Doesn't need a callback.
        'banner' => '',
		'orangesection' => '',
		'feature-card' => '',
	);

	foreach ( $blocks as $dir => $render_callback ) {
		$args = array();
		if ( ! empty( $render_callback ) ) {
			$args['render_callback'] = $render_callback;
		}
		register_block_type( __DIR__ . '/blocks/build/' . $dir, $args );
	}
}
add_action( 'init', 'gutenberg_manuelhans_register_block' );