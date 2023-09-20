
<?php
$servername = 'localhost';
$username = 'your_username';
$password = 'your_password';
$dbname = 'your_database';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die('Connection failed: ' . $conn->connect_error);
}

// Create user
function createUser($name, $email) {
  global $conn;
  $sql = "INSERT INTO users (name, email) VALUES ('$name', '$email')";
  $conn->query($sql);
}

// Read users
function readUsers() {
  global $conn;
  $sql = "SELECT * FROM users";
  $result = $conn->query($sql);
  return $result->fetch_all(MYSQLI_ASSOC);
}

// Update user
function updateUser($id, $name, $email) {
  global $conn;
  $sql = "UPDATE users SET name = '$name', email = '$email' WHERE id = $id";
  $conn->query($sql);
}

// Delete user
function deleteUser($id) {
  global $conn;
  $sql = "DELETE FROM users WHERE id = $id";
  $conn->query($sql);
}

$conn->close();
?>
