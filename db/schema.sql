DROP DATABASE IF EXISTS tasksDB;
CREATE DATABASE tasksDB;
USE tasksdb;

CREATE TABLE tasks(
    `id` INT NOT NULL AUTO_INCREMENT,
    `task` VARCHAR(30) NOT NULL,
    `completed` BOOLEAN DEFAULT false,
    PRIMARY KEY (`id`)
);

DESCRIBE tasks;

INSERT INTO tasks (`task`)
VALUES ("Hello World"), ("Hello Back");

SELECT * FROM tasks;