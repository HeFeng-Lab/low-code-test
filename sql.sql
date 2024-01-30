DROP DATABASE IF EXISTS material_test;

CREATE DATABASE IF NOT EXISTS material_test;

USE material_test;

CREATE TABLE
  user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
  );
