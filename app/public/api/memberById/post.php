<?php

// Step 0: Validate data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Prepare & run the query
$stmt = $db->prepare(
  'UPDATE Person
  SET personId = ?, firstName = ?, lastName = ?, radioNum = ?, email = ?, DOB = ?, gender = ?, address = ?, stationNumber = ?
  WHERE personId = ?'
);

$stmt->execute([
  $_POST['personId'],
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['radioNum'],
  $_POST['email'],
  $_POST['DOB'],
  $_POST['gender'],
  $_POST['address'],
  $_POST['stationNumber'],
  $_POST['personId']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../waiting/');
