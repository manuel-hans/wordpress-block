<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp2' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '@OA=Jn3*HZ.4unsEs$fkkCblNJ<@#_5u9[A78/#<-9_7}Bb/t4e5`c$WcP=CACNp' );
define( 'SECURE_AUTH_KEY',  '#(8Fk2w10-EbytXe*q0,f1%RhVuV!(4vC-XwGJX9t|]YrG`TPsc^kUN.?M3sdWsu' );
define( 'LOGGED_IN_KEY',    'x[%hvFt*Z?|l.bL!c9A0P+PbKwQ!3kB6)FeAjUbEuU+M73-dfT*Ai~PfLSgyjRpo' );
define( 'NONCE_KEY',        'U-#VwyWru3sz8z{L0w%+:C1^8mH7bt~vnNL/oxQeTBp3|-:<?WQV  `v=[Y0=r:,' );
define( 'AUTH_SALT',        '@BI^>;Eluv`m@_lL8^2ajd?C*)p0Ew)b-U^M!<=$fP(uPtnq{,+87jN?Gu`<vg;(' );
define( 'SECURE_AUTH_SALT', 'H,Rd8*=H97[,|9~H`3w!.XP@1;1:_z S!8WMx`YznNY %=8b yN(ZHF<dtp>6wXz' );
define( 'LOGGED_IN_SALT',   '~;vp$Lx(!YOA/kvL;mu5LBwzec,-1yly:st}TQw{:o8kHR(LX/j<N$azK;@2]</<' );
define( 'NONCE_SALT',       'YVgFkpIGtRv+od4y:nic%3[2wb~OBW%l^BZgZo{4nVb[Xs(YH:O+#{_h86?Z5%2P' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
