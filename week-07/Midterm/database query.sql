CREATE SCHEMA `poll`;

CREATE TABLE IF NOT EXISTS poll.questions (
	qid INTEGER NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS poll.`options` (
	vid INTEGER NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    votes INTEGER DEFAULT 0,
	qid INTEGER NOT NULL,
    FOREIGN KEY (qid) REFERENCES questions(qid) ON DELETE CASCADE
);

INSERT INTO poll.questions VALUES (1, "Where should we go for dinner?");

INSERT INTO poll.`options` (`name`, votes, qid) VALUES
("Italian", 1, 1),
("Mexican", 0, 1);


INSERT INTO poll.questions VALUES (2, "Where should we go for christmas?");

INSERT INTO poll.`options` (`name`, votes, qid) VALUES
("Canada", 2, 2),
("Japan", 1, 2);