<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return array(




	'*' => array(

		// The prefix to use when naming tables. This can be no more than 5 characters.
		'tablePrefix' => 'craft',


    ),

	'localhost' => array(

		// The database server name or IP address. Usually this is 'localhost' or '127.0.0.1'.
		'server' => '107.170.186.5',

		// The name of the database to select.
		'database' => 'betterdays_dev',

		// The database username to connect with.
		'user' => 'bbcdev',

		// The database password to connect with.
		'password' => 'HamB3rg3r',

	),


	'better-days.bbcdev.co' => array(

		// The database server name or IP address. Usually this is 'localhost' or '127.0.0.1'.
		'server' => 'localhost',

		// The name of the database to select.
		'database' => 'betterdays_dev',

		// The database username to connect with.
		'user' => 'root',

		// The database password to connect with.
		'password' => 'HamB3rg3r',

	),




);
