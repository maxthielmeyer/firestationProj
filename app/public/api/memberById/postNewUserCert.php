<?php

// Step 0: Validate data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Prepare & run the query
$stmt = $db->prepare(
  'INSERT INTO User_Certification(cName, expDate, personId, renewedDate)
  VALUES (?,?,?,?)'
);

$stmt->execute([
  $_POST['cName'],
  $_POST['expDate'],
  $_POST['personId'],
  $_POST['renewedDate']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../memberById/');
