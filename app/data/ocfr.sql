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
    expDate DATE DEFAULT NOT NULL
);

--insert
INSERT INTO Person (stationNumber,radioNum,gender,DOB,address,email,firstName,lastName,isActive)
VALUES
(83242,12,"F",1995-12-4,"2359 W 4 St","zacattack@gmail.com","James","Bond",0),
(77398,11,"M",1996-10-3,"8989 N 2nd Rd", "fireman2@gmail.com","Tom","Gregory",1),
(09090,10,"M",1988-9-2,"1989 Quintard","fireman3@gmail.com","Bipin","Prabhakar",1);

INSERT INTO Certificate (cName,cAgency,expDate)
VALUES
("Fireman Level 1","Bloomington Firestation","2020-05-16"),
("Fireman Level 2", "Bloomington South Firestation", "2029-09-09"),
("Fireman Level 3", "Indianapolis Firestation", "2030-03-04");

INSERT INTO Phone (phoneNum)
VALUES
("931-636-9371"),
("900-988-3847"),
("383-383-8989");
