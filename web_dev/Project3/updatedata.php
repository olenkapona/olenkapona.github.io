<?php
include('conn.php');
 ?>
<?php


$sql = "UPDATE MyGuests SET lastname='Ponchik' WHERE id=2";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}
$conn->close();
?> 