<?php

// Step 0: Validate data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Prepare & run the query
$stmt = $db->prepare(
  'INSERT INTO Certificate(cName, cAgency, description)
  VALUES (?,?,?)'
);

$stmt->execute([
  $_POST['cName'],
  $_POST['cAgency'],
  $_POST['description']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../memberById/');
