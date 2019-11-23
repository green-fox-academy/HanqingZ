DROP TABLE Users;
DROP TABLE TodoList;
DROP TABLE Themes;
DROP TABLE userTodoList;

CREATE TABLE IF NOT EXISTS TodoList (
	tlid int NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    isDone Bool DEFAULT false,
	userId int DEFAULT 1,
    PRIMARY KEY (tlid)
);

CREATE TABLE IF NOT EXISTS Themes (
	tid int NOT NULL AUTO_INCREMENT,
    theme VARCHAR(255) NOT NULL,
    PRIMARY KEY (tid)
);

CREATE TABLE Users (
	uid int NOT NULL AUTO_INCREMENT,
    username VARCHAR(255),
	themeId int DEFAULT 1,
	PRIMARY KEY (uid)
);


INSERT INTO TodoList (title, isDone) VALUES ("Do some work", true);
INSERT INTO TodoList (title) VALUES ("Clean apartment");
INSERT INTO TodoList (title) VALUES ("Eat Lunch");

INSERT INTO users (username) VALUES ("Haru");
INSERT INTO users (username) VALUES ("Natsu");

INSERT INTO Themes (theme) VALUES ("Default"), ("Superman"), ("Batman");

UPDATE TodoList SET isDone = true WHERE title="Eat Lunch";

DELETE FROM TodoList WHERE isDone = true;