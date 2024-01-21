<?php
// Retrieve form data
$username = $_POST['username'];
$password = $_POST['password'];

// Perform necessary validations here (e.g., checking if fields are empty, etc.)

// Connect to the database
$servername = "localhost"; // Change this if your database is hosted on a different server
$username_db = "root";
$password_db = "";
$dbname = "current";

$conn = new mysqli($servername, $username_db, $password_db, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Verify the password
$sql = "SELECT * FROM login WHERE email = '$username'";
$result = $conn->query($sql);

if ($result->num_rows == 1) {
    $row = $result->fetch_assoc();
    $storedPassword = $row['password'];

    // Verify the password
    if (password_verify($password, $storedPassword)) {
        // Password is correct, redirect to dashboard.html
        header("Location: user.html");
        exit();
    } else {
        // Password is incorrect, display an error message
        echo "Invalid username or password!";
    }
} else {
    // User not found, display an error message
    echo "Invalid username or password!";
}

// Close the database connection
$conn->close();
?>