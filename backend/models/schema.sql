DROP DATABASE ANYVEHICLE;

CREATE DATABASE ANYVEHICLE;

USE ANYVEHICLE;

CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
    role VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE users(
    id INT AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE maintenance(
    id INT AUTO_INCREMENT NOT NULL,
    cartype VARCHAR(255),
    carmodel VARCHAR(255),
    note VARCHAR(255),
    ruinedparts VARCHAR(255),
    req_status VARCHAR(255) DEFAULT 'pindening',
    requester_id INT,
    FOREIGN KEY (requester_id) REFERENCES users(id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);
