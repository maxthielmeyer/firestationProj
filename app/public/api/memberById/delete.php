<?php

// Step 0: Validate data

// Step 1: Get a datase connection from our help class
$db1 = DbConnection::getConnection();
$db2 = DbConnection::getConnection();
$db3 = DbConnection::getConnection();

// Step 2: Prepare & run the query
$stmt1 = $db1->prepare(
  'DELETE FROM Phone
  WHERE personId = ?'
);

$stmt1->execute([
  $_POST['personId']
]);
$stmt3 = $db3->prepare(
  'DELETE FROM User_Certification
  WHERE personId = ?'
);

$stmt3->execute([
  $_POST['personId']
]);
$stmt2 = $db2->prepare(
  'DELETE FROM Person
  WHERE personId = ?'
);

$stmt2->execute([
  $_POST['personId']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../memberById/');
