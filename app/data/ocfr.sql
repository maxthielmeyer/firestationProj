USE Firestation;

CREATE TABLE Certificate (
    cName VARCHAR(64) PRIMARY KEY,
    cAgency VARCHAR(64),
    standardExp DATE DEFAULT NULL
);


CREATE TABLE Person (
    personId INTEGER PRIMARY KEY AUTO_INCREMENT,
    stationNumber VARCHAR(64) UNIQUE,
    gender CHAR(1),
    DOB DATE Default NULL,
    address VARCHAR(64),
    email VARCHAR(64),
    firstName VARCHAR(64),
    lastName VARCHAR(64),
    isActive VARCHAR(3)
);


CREATE TABLE User_Certification (
    personId INTEGER FOREIGN KEY AUTO_INCREMENT,
    cName VARCHAR(64) FOREIGN KEY,
    expDate DATE DEFAULT NULL,
    renewedDate DATE DEFAULT NULL
);


CREATE TABLE Phone (
    personId INTEGER FOREIGN KEY AUTO_INCREMENT,
    phone VARCHAR(64)
);


CREATE TABLE RadioNO (
    personId INTEGER FOREIGN KEY AUTO_INCREMENT,
    radioNumber VARCHAR(64)
);
