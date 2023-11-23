-- connect to db via Dbeaver
-- execute the script

CREATE TABLE client (
    id integer NOT NULL,
    name varchar(20)  NOT NULL,
    email varchar(100) NOT NULL
);

INSERT INTO client (id, name, email) VALUES (1, 'Lim Zi Soon', 'limzisoon@hotmail.com');
INSERT INTO client (id, name, email) VALUES (2, 'Lim Yong En', 'limyongen@hotmail.com');
INSERT INTO client (id, name, email) VALUES (3, 'Lim Yong Hui', 'limyonghui@hotmail.com');

