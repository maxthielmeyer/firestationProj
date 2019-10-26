<?php

// Step 0: Validate data

// Step 1: Get a datase connection from our help class
$db1 = DbConnection::getConnection();

// Step 2: Prepare & run the query
$stmt1 = $db1->prepare(
  'DELETE FROM Phone
  WHERE phoneNum = ?'
);

$stmt1->execute([
  $_POST['phoneNum']
]);


// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../memberById/');
