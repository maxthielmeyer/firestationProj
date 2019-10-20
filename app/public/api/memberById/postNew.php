<?php

// Step 0: Validate data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Prepare & run the query
$stmt = $db->prepare(
  'INSERT INTO Person(firstName, lastName, radioNum, email, DOB, gender, address, stationNumber, isActive)
  VALUES (?,?,?,?,?,?,?,?,?)'
);

$stmt->execute([
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['radioNum'],
  $_POST['email'],
  $_POST['DOB'],
  $_POST['gender'],
  $_POST['address'],
  $_POST['stationNumber'],
  $_POST['isActive']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../memberById/');
