DROP DATABASE IF EXISTS spa;
CREATE DATABASE IF NOT EXISTS spa;
USE spa;

CREATE TABLE IF NOT EXISTS center(
    id INT AUTO_INCREMENT,
    centerName VARCHAR(250) NOT NULL,
    centerPhone VARCHAR(250) NOT NULL,
    centerMail VARCHAR(250) NOT NULL,
    adress VARCHAR(250) NOT NULL,
    centerImage VARCHAR(250) NOT NULL,
    centerVideo VARCHAR(250) NOT NULL,
    openingTime VARCHAR(250) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS service(
    id INT AUTO_INCREMENT,
    serviceTitle VARCHAR(250) NOT NULL,
    serviceName VARCHAR(250) NOT NULL,
    servicePrice INT NOT NULL,
    serviceImage VARCHAR(250) NOT NULL,
    serviceVideo VARCHAR(250) NOT NULL,
    serviceDescription VARCHAR(250) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS pack(
    id INT AUTO_INCREMENT,
    packName VARCHAR(250) NOT NULL,
    packPrice VARCHAR(250) NOT NULL,
    packImage VARCHAR(250) NOT NULL,
    packVideo VARCHAR(250) NOT NULL,
    packDescription VARCHAR(250) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS user(
    id INT AUTO_INCREMENT,
    userName VARCHAR(250) NOT NULL,
    userPhone VARCHAR(250) NOT NULL,
    userMail VARCHAR(250) NOT NULL,
    userPassword VARCHAR(250) NOT NULL,
    confirmUserPassword VARCHAR(250) NOT NULL,
    role VARCHAR(250) NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
    PRIMARY KEY(id)
);


CREATE TABLE IF NOT EXISTS reservation(
    id INT AUTO_INCREMENT,
    user_id INT NOT NULL,
    pack_id INT NOT NULL,
    service_id INT NOT NULL,
    totalPrice VARCHAR(250) NOT NULL,
    date VARCHAR(250) NOT NULL,
    hour VARCHAR(250) NOT NULL,
    payment BOOLEAN NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (pack_id) REFERENCES pack(id),
    FOREIGN KEY (service_id) REFERENCES service(id)
);

CREATE TABLE admin(
    id INT NOT NULL AUTO_INCREMENT,
    amdinMail VARCHAR(200) NOT NULL,
    adminPassword VARCHAR(200) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS sessions(
    id INT AUTO_INCREMENT,
    session VARCHAR(250) NOT NULL,
    logedInAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    user_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);


