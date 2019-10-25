<?php

// Step 0: Validate data

// Step 1: Get a datase connection from our help class
$db1 = DbConnection::getConnection();

// Step 2: Prepare & run the query
$stmt1 = $db1->prepare(
  'INSERT INTO Phone(phoneNum, personId)
  VALUES(?,?)'
);

$stmt1->execute([
  $_POST['phoneNum'],
  $_POST['personId']
]);


// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../memberById/');
