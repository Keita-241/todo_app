-- 本番環境用DB作成
CREATE DATABASE IF NOT EXISTS `todo_app`;
USE todo_app;

CREATE TABLE IF NOT EXISTS tasks (
  id int(11) NOT NULL AUTO_INCREMENT,
  title varchar(20) NOT NULL,
  content text NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL DEFAULT NULL,
  member varchar(20),
  PRIMARY KEY (id)
) DEFAULT CHARSET=utf8;

INSERT INTO tasks (`title`, `content`) VALUES ("sample1", "testhogetest");

-- テスト用DB作成
CREATE DATABASE IF NOT EXISTS `todo_app_test`;
USE todo_app_test;

CREATE TABLE IF NOT EXISTS tasks (
  id int(11) NOT NULL AUTO_INCREMENT,
  title varchar(20) NOT NULL,
  content text NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL DEFAULT NULL,
  member varchar(20),
  PRIMARY KEY (id)
) DEFAULT CHARSET=utf8;

INSERT INTO tasks (`title`, `content`) VALUES ("sample1", "testhogetest");

CREATE TABLE IF NOT EXISTS teams (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(20),
  PRIMARY KEY (id)
) DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS users (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(20),
  mail varchar(50),
  password varchar(50)
) DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS users_teams_relation (
  id int(11) NOT NULL AUTO_INCREMENT,
  user_id int(11),
  team_id int(11),
  PRIMARY KEY (id),
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(team_id) REFERENCES teams(id)
) DEFAULT CHARSET=utf8;