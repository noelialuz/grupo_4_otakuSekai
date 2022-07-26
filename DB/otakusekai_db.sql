CREATE DATABASE otakusekai_db;
USE otakusekai_db;
CREATE TABLE users (
   id INT NOT NULL AUTO_INCREMENT, 
   first_name VARCHAR(255) NOT NULL,
   last_name VARCHAR(255) NOT NULL,
   dni INT NOT NULL,
   email VARCHAR(255) NOT NULL,
   address VARCHAR(255) NOT NULL,
   country_id INT NOT NULL,
   phone VARCHAR(255),
   birthday DATE NOT NULL,
   password VARCHAR(255) NOT NULL,
   avatar VARCHAR(255),
   profile_id INT NOT NULL DEFAULT 1,
   PRIMARY KEY (id)
);

CREATE TABLE countries (
   id INT NOT NULL AUTO_INCREMENT,
   description VARCHAR(255) NOT NULL,
   PRIMARY KEY (id)
);

CREATE TABLE profiles (
   id INT NOT NULL AUTO_INCREMENT,
   description VARCHAR(255) NOT NULL,
   PRIMARY KEY (id)
);

CREATE TABLE categories (
   id INT NOT NULL AUTO_INCREMENT,
   description VARCHAR(255) NOT NULL,
   PRIMARY KEY (id)
);

CREATE TABLE series (
   id INT NOT NULL AUTO_INCREMENT,
   description VARCHAR(255) NOT NULL,
   PRIMARY KEY (id)
);

CREATE TABLE products (
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR(255) NOT NULL,
   category_id INT NOT NULL,
   serie_id INT,
   price DECIMAL NOT NULL,
   discount FLOAT DEFAULT 0,
   description VARCHAR(1000) NOT NULL,
   image VARCHAR(255) NOT NULL,
   deleted BOOLEAN NOT NULL DEFAULT 0,
   stock INT NOT NULL DEFAULT 1,
   PRIMARY KEY (id)
);

CREATE TABLE sales (
   id INT NOT NULL AUTO_INCREMENT,
   user_id INT NOT NULL,
   date DATETIME NOT NULL,
   total DOUBLE NOT NULL,
   qty_products FLOAT NOT NULL,
   PRIMARY KEY (id)
);

CREATE TABLE sales_detail (
   id INT NOT NULL AUTO_INCREMENT,
   sale_id INT NOT NULL,
   product_id INT NOT NULL,
   qty_product FLOAT NOT NULL,
   PRIMARY KEY (id)
);


ALTER TABLE otakusekai_db.users ADD FOREIGN KEY (country_id) REFERENCES countries(id)  ;

ALTER TABLE otakusekai_db.users ADD FOREIGN KEY (profile_id) REFERENCES profiles(id)  ;

ALTER TABLE otakusekai_db.products ADD FOREIGN KEY (category_id) REFERENCES categories(id)  ;

ALTER TABLE otakusekai_db.products ADD FOREIGN KEY (serie_id) REFERENCES series(id)  ;

ALTER TABLE otakusekai_db.sales ADD FOREIGN KEY (user_id) REFERENCES users(id)  ;

ALTER TABLE otakusekai_db.sales_detail ADD FOREIGN KEY (sale_id) REFERENCES sales(id)  ;

ALTER TABLE otakusekai_db.sales_detail ADD FOREIGN KEY (product_id) REFERENCES products(id)  ;
