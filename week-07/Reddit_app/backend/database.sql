CREATE TABLE IF NOT EXISTS userInfo (
	uid INTEGER NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS posts (
	pid INTEGER NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    url VARCHAR(50),
    `timestamp` VARCHAR(20) NOT NULL,
    score INTEGER NOT NULL DEFAULT 0,
    uid INTEGER DEFAULT 1,
    vote TINYINT DEFAULT 0,
    comments INTEGER DEFAULT 0,
    FOREIGN KEY (uid) REFERENCES userInfo(uid) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS comments (
	cid INTEGER NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
    `text` VARCHAR(255) NOT NULL,
    `timestamp` VARCHAR(20) NOT NULL,
    score INTEGER DEFAULT 0,
    uid INTEGER NOT NULL,
    pid INTEGER NOT NULL,
    FOREIGN KEY (uid) REFERENCES userInfo(uid) ON DELETE CASCADE,
    FOREIGN KEY (pid) REFERENCES posts(pid) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS vote_post (
	uid INTEGER NOT NULL,
    pid INTEGER NOT NULL,
	vote INTEGER NOT NULL,
    FOREIGN KEY (uid) REFERENCES userInfo(uid) ON DELETE CASCADE,
    FOREIGN KEY (pid) REFERENCES posts(pid) ON DELETE CASCADE,
    PRIMARY KEY (uid, pid)
);

CREATE TABLE IF NOT EXISTS vote_comment (
	uid INTEGER NOT NULL,
    cid INTEGER NOT NULL,
	vote INTEGER NOT NULL,
    FOREIGN KEY (uid) REFERENCES userInfo(uid) ON DELETE CASCADE,
    FOREIGN KEY (cid) REFERENCES comments(cid) ON DELETE CASCADE,
    PRIMARY KEY (uid, cid)
);

INSERT INTO userInfo VALUES (1, "admin", "admin");

INSERT INTO `posts` (title, url, `timestamp`, score, uid) VALUES
("Dear JavaScript", "http://9gag.com", 1494339525, 791, 1),
("Crockford", "http://9gag.com", 1494138425, 567, 1);

INSERT INTO comments VALUES 
(1, "not big enough", 31, 1, 1),
(2, "just for testing", 10, 1, 2);

CREATE TRIGGER after_vote_comment_increase
AFTER UPDATE 
vote_comment FOR EACH ROW
BEGIN 
userinfo
END