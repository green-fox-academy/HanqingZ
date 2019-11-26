CREATE TABLE IF NOT EXISTS userInfo (
	uid INTEGER NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    passwords VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS reddit (
	id INTEGER NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    url VARCHAR(50),
    `timestamp` VARCHAR(20) NOT NULL,
    score INTEGER NOT NULL DEFAULT 0,
    uid INTEGER DEFAULT 1,
    vote TINYINT DEFAULT 0,
    comments INTEGER DEFAULT 0,
    FOREIGN KEY (uid) REFERENCES userInfo(uid)
);

CREATE TABLE IF NOT EXISTS comments (
	cid INTEGER NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
    comments VARCHAR(255) NOT NULL,
    uid INTEGER,
    FOREIGN KEY (uid) REFERENCES userInfo(uid)
);

INSERT INTO userInfo VALUES (1, "newUser", "password");

INSERT INTO `reddit` (title, url, `timestamp`, score, uid) VALUES
("Dear JavaScript", "http://9gag.com", 1494339525, 791, 1),
("Crockford", "http://9gag.com", 1494138425, 567, 1);