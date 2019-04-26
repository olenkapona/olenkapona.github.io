<?php
session_start();
 ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    Demo connection to DB <br>
    <?php
      $servername = $_POST["DB"];
      $username = $_POST['DBuser'];
      $password = $_POST['DBpass'];
      $_SESSION['servername'] = $servername;
      $_SESSION['username'] = $username;
      $_SESSION['password'] = $password;
      $conn = mysqli_connect($servername, $username, $password);
      if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
      }
      echo "Connected successfully!";
     ?>
  </body>
</html>