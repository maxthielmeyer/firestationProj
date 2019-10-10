USE person;

--run
CREATE TABLE Person (
    personId INT PRIMARY KEY AUTO_INCREMENT,
    stationNumber INT NOT NULL,
    gender CHAR(1) DEFAULT '',
    DOB DATE DEFAULT NULL,
    address TEXT NOT NULL,
    email VARCHAR(320),
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    isActive BOOLEAN,
    radioNum INT(10)
);

--run
--note phone->phoneNum
--add type?
CREATE TABLE Phone (
	  phoneNum VARCHAR(12) PRIMARY KEY,
    personId INT NOT NULL,
    FOREIGN KEY (personId) REFERENCES Person(personId)
);


-- -- multiple radio nums?
-- CREATE TABLE RadioNo(
-- 	  radioNumber VARCHAR(20) PRIMARY KEY,
--     personId VARCHAR(64) NOT NULL,
--     FOREIGN KEY (personID) REFERENCES Person(personID)
-- );

--run
CREATE TABLE User_Certification(
	expDate DATE DEFAULT NULL,
    renewedDate DATE DEFAULT NULL,
    cName VARCHAR(64),
    personId INT NOT NULL,
	FOREIGN KEY (personID) REFERENCES Person(personID),
	FOREIGN KEY (cName) REFERENCES Certificate(cName)
);


--run
CREATE TABLE Certificate(
	cName VARCHAR(64) PRIMARY KEY,
    cAgency VARCHAR(64),
    standardExp DATE NOT NULL
);
