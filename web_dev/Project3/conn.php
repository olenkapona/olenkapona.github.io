<?php
session_start();
$servername = $_SESSION['servername'];
$username = $_SESSION['username'];
$password = $_SESSION['password'];
$dbname = $_SESSION['dbname'];
$conn = mysqli_connect($servername, $username, $password) or die(mysqli_error());
mysqli_select_db($conn, $dbname) or die(mysqli_error()); 
 ?>