USE firestation_person;

CREATE TABLE Person (
    personId VARCHAR(64) PRIMARY KEY,
    stationNumber INT NOT NULL,
    gender CHAR(1) DEFAULT '',
    DOB DATE DEFAULT NULL,
    address TEXT NOT NULL,
    email VARCHAR(320),
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    isActive BOOLEAN
);

CREATE TABLE Phone (
	phone VARCHAR(12) PRIMARY KEY,
    FOREIGN KEY (personID) REFERENCES Person(personID)
);

CREATE TABLE RadioNo(
	radioNumber VARCHAR(20) PRIMARY KEY,
    FOREIGN KEY (personID) REFERENCES Person(personID)
);

CREATE TABLE User_Certification(
	expDate DATE DEFAULT NULL,
    renewedDate DATE DEFAULT NULL,
	FOREIGN KEY (personID) REFERENCES Person(personID),
	FOREIGN KEY (cName) REFERENCES Certificate(cName)
);

CREATE TABLE Certificate(
	cName VARCHAR(64) PRIMARY KEY,
    cAgency VARCHAR(64),
    standardExp DATE NOT NULL
);
