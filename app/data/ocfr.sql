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

--insert
INSERT INTO Person (stationNumber,radioNum,gender,DOB,address,email,firstName,lastName,isActive)
VALUES
(83242,12,"F",1995-12-4,"2359 W 4 St","zacattack@gmail.com","James","Bond",0),
(99990,11,"M",1986-5-16,"290 Quintard Rd","sewanee@gmail.com","Bipin","Prabhakar",1)
(80290,10,"F",1976-2-3,"1101 N Fee Ln","mcnutt@gmail.com","McNutt","Mold",0);
