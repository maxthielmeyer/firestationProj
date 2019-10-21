<?php

// Step 0: Validate data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
$db2 = DbConnection::getConnection();
$db3 = DbConnection::getConnection();
$db4 = DbConnection::getConnection();
// Step 2: Prepare & run the query
$stmt2 = $db2->prepare(
  'SET FOREIGN_KEY_CHECKS=0'
);
$stmt2->execute();

$stmt = $db->prepare(
  'UPDATE Certificate
  SET cName = ?, cAgency = ?, description = ?
  WHERE cName = ?'
);

$stmt->execute([
  $_POST['cName'],
  $_POST['cAgency'],
  $_POST['description'],
  $_POST['oldcName']

]);
$stmt4 = $db4->prepare(
  'UPDATE User_Certification
  SET cName = ?
  WHERE cName = ?'
);

$stmt4->execute([
  $_POST['cName'],
  $_POST['oldcName']
]);
$stmt3 = $db3->prepare(
  'SET FOREIGN_KEY_CHECKS=1'
);
$stmt3->execute();

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../certificates/');
