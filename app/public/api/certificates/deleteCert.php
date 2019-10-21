<?php

// Step 0: Validate data

// Step 1: Get a datase connection from our help class
$db2 = DbConnection::getConnection();
$db3 = DbConnection::getConnection();

// Step 2: Prepare & run the query
$stmt3 = $db3->prepare(
  'DELETE FROM User_Certification
  WHERE cName = ?'
);

$stmt3->execute([
  $_POST['cName']
]);
$stmt2 = $db2->prepare(
  'DELETE FROM Certificate
  WHERE cName = ?'
);

$stmt2->execute([
  $_POST['cName']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../memberById/');
