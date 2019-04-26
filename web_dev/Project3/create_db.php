 <!-- Create database -->
 <?php
  session_start();
  $servername = $_SESSION['servername'];
  $username = $_SESSION['username'];
  $password = $_SESSION['password'];
  $conn = mysqli_connect($servername, $username, $password) or die(mysqli_error());
  $dbname = $_POST['db_name'];
  $_SESSION['dbname'] = $dbname;
  $sql = "CREATE DATABASE $dbname";
  if(mysqli_query($conn, $sql)) {
    echo "Database created successfully";
    echo "\n";
    echo $dbname;
  }else {
    echo "Error creating database: " . mysqli_error($conn);
  }
 ?>