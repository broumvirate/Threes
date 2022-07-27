CREATE table lads (
    id int PRIMARY KEY IDENTITY(0, 1),
    username varchar(127) NOT NULL UNIQUE,
    displayname varchar(127)
);

CREATE TABLE kenobrae (
    id int PRIMARY KEY IDENTITY(0, 1),
    name varchar(127),
)

CREATE TABLE threes (
    id int PRIMARY KEY IDENTITY(0, 1),
    dad int NOT NULL,
    dob TIME NOT NULL,
    CONSTRAINT FK_three_dad FOREIGN KEY (dad) REFERENCES lads (id)
);

CREATE TABLE inthere (
    three int,
    obiwan int,
    CONSTRAINT PK_oneida_threid PRIMARY KEY (obiwan, three),
    CONSTRAINT FK_obiwan FOREIGN KEY (obiwan) REFERENCES kenobrae (id),
    CONSTRAINT FK_three FOREIGN KEY (three) REFERENCES threes (id)
)

CREATE TABLE ones (
    id int PRIMARY KEY IDENTITY(0, 1),
    three int NOT NULL,
    whence tinyint NOT NULL,
    whom int NOT NULL,
    texas varchar(255) NOT NULL,
    whencst TIME NOT NULL,
    CONSTRAINT FK_one_three FOREIGN KEY (three) REFERENCES threes (id)
);


INSERT INTO lads (username)
VALUES ('Emerson');

INSERT INTO kenobrae (name)
VALUES ('Broumvirate');

INSERT INTO threes (dad, dob)
VALUES (0, CURRENT_TIMESTAMP)

INSERT INTO inthere (three, obiwan)
VALUES(0, 0)

INSERT INTO ones (three, whence, whom, texas, whencst)
VALUES (0, 0, 0, 'You are, and I cannot stress this enough,', CURRENT_TIMESTAMP);
INSERT INTO ones (three, whence, whom, texas, whencst)
VALUES (0, 1, 0, 'standing right in the middle of my', CURRENT_TIMESTAMP);
INSERT INTO ones (three, whence, whom, texas, whencst)
VALUES (0, 3, 0, 'carpeted golf course.', CURRENT_TIMESTAMP);







