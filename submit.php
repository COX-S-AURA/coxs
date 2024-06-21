<?php
$servername = "MJ-AHMAD";
$username = "MJ-AHMAD/kalam";
$password = "@New2024#";
$dbname = "INNO";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

// Insert data
$sql = "INSERT INTO users (name, email) VALUES ('".$_POST['name']."', '".$_POST['email']."')";

if ($conn->query($sql) === TRUE) {
echo "New record created successfully";
} else {
echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
