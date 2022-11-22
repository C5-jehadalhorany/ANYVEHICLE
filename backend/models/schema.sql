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
    is_deleted TINYINT DEFAULT 0,
    requester_id INT,
    FOREIGN KEY (requester_id) REFERENCES users(id),
    PRIMARY KEY (id)
);

CREATE TABLE request (
    id INT AUTO_INCREMENT NOT NULL,
    req_status VARCHAR(255),
    maintenance_id INT,
    FOREIGN KEY (maintenance_id) REFERENCES maintenance(id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE permissions (
    id INT AUTO_INCREMENT NOT NULL,
    permission VARCHAR(255) NOT NULL,
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE role_permission (
    id INT NOT NULL AUTO_INCREMENT NOT NULL,
    role_id INT,
    permission_id INT,
    FOREIGN KEY (role_id) REFERENCES roles (id),
    FOREIGN KEY (permission_id) REFERENCES permissions (id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);