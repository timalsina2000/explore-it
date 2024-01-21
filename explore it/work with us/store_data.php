<?php
// Values submitted from the form
$name = $_POST['name'];
$email = $_POST['email'];
$gender = $_POST['gender'];
$phone = $_POST['phone'];
$password = $_POST['password2'];





$conn = new mysqli('localhost','root','','signup');

// Check connection
if ($conn->connect_error) {
  die("Connection failed:" . $conn->connect_error);
}

// Prepare and bind a statement to avoid SQL injection
$stmt = $conn->prepare("INSERT INTO login (name, email, gender, number, password) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssis", $name, $email, $gender, $phone, $password);

// Execute the statement
if ($stmt->execute()) {
  echo "New record created successfully";
} else {
  echo "Error: " . $stmt->error;
}

// Close the statement and database connection
$stmt->close();
$conn->close();
?>
