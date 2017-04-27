<?php
	$servername = "localhost";
	$username = "root";
	$password = "root";
	$db = "wan";

	// Create connection
	$conn = mysqli_connect($servername, $username, $password, $db); //use 'sqli' have to input 4 value
		//if use 'sql' will input 3 value but have 2 parameter (to connect DB and select table)
?>