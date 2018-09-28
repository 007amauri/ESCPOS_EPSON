CREATE LOGIN myname  
    WITH PASSWORD = '123456';  
GO 

create database bancovip

use bancovip

CREATE TABLE Matricula 
(SID int IDENTITY(1,1) PRIMARY KEY,
Nome varchar(30), 
Re varchar(30),
);


INSERT INTO Matricula (Nome, Re) VALUES ('Amauri','88139');

select * from Matricula order by SID desc

ALTER TABLE Matricula AUTO_INCREMENT=100;

