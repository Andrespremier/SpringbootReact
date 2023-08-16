CREATE TABLE customers (
    CUSTOMER_ID NUMBER PRIMARY KEY,
    firstname VARCHAR2(255),
    lastname VARCHAR2(255),
    email VARCHAR2(255),
    phone VARCHAR2(255),
    address VARCHAR2(255)
);

select * from customer;




SELECT owner, table_name
FROM all_tables
WHERE table_name = 'customer';



----------------------

-- Crear un nuevo usuario
CREATE USER "premier" IDENTIFIED BY "prefijo"  
DEFAULT TABLESPACE "USERS"
TEMPORARY TABLESPACE "TEMP";

-- Conceder privilegios necesarios
GRANT CONNECT, RESOURCE TO javareact;

-- Conceder permisos específicos para CRUD en tus tablas
GRANT SELECT, INSERT, UPDATE, DELETE ON "SYS"."CUSTOMER" TO javareact;

CREATE SEQUENCE CUSTOMER_SEQ START WITH 1 INCREMENT BY 1;


INSERT INTO CUSTOMERS (CUSTOMER_ID, FIRSTNAME, LASTNAME, EMAIL, PHONE, ADDRESS)
VALUES (CUSTOMER_SEQ.NEXTVAL, 'John', 'Doe', 'john@example.com', '123-456-7890', '123 Main St');

INSERT INTO CUSTOMERS (CUSTOMER_ID, FIRSTNAME, LASTNAME, EMAIL, PHONE, ADDRESS)
VALUES (CUSTOMER_SEQ.NEXTVAL, 'Jane', 'Smith', 'jane@example.com', '987-654-3210', '456 Elm St');

INSERT INTO CUSTOMERS (CUSTOMER_ID, FIRSTNAME, LASTNAME, EMAIL, PHONE, ADDRESS)
VALUES (CUSTOMER_SEQ.NEXTVAL, 'Michael', 'Johnson', 'michael@example.com', '555-123-4567', '789 Oak Ave');

-- Agrega más inserciones aquí...

select c1_0.customer_id,c1_0.address,c1_0.email,c1_0.firstname,c1_0.lastname,c1_0.phone from customers c1_0;
select c1_0.customer_id,c1_0.address,c1_0.email,c1_0.firstname,c1_0.lastname,c1_0.phone from customers c1_0

