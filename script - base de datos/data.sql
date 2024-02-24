-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: bebidasonline
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'Juan Pérez','250000','1990-01-01','juanperez@gmail.com',3851234567,'Calle 123, Santiago del Estero','abc123','2024-02-23 12:52:21','2024-02-23 12:52:21'),(2,'María Gómez','280000','1985-02-15','mariagomez@gmail.com',3852345678,'Avenida 456, Santiago del Estero','xyz456','2024-02-23 12:52:49','2024-02-23 12:52:49'),(3,'Carlos Rodríguez','310000','1988-05-20','carlosrodriguez@gmail.com',3853456789,'Calle 789, Santiago del Estero','123abc','2024-02-23 12:52:49','2024-02-23 12:52:49'),(4,'Laura Martínez','340000','1992-09-10','lauramartinez@gmail.com',3854567890,'Avenida 1011, Santiago del Estero','456xyz','2024-02-23 12:52:49','2024-02-23 12:52:49'),(5,'Pedro Sánchez','370000','1983-11-30','pedrosanchez@gmail.com',3855678901,'Calle 1213, Santiago del Estero','789abc','2024-02-23 12:52:49','2024-02-23 12:52:49'),(6,'Ana López','400000','1995-04-25','analopez@gmail.com',3856789012,'Avenida 1415, Santiago del Estero','abc456','2024-02-23 12:52:49','2024-02-23 12:52:49'),(7,'Gabriel González','430000','1987-08-08','gabrielgonzalez@gmail.com',3857890123,'Calle 1617, Santiago del Estero','xyz123','2024-02-23 12:52:49','2024-02-23 12:52:49'),(8,'Lucía Díaz','460000','1998-03-12','luciadiaz@gmail.com',3858901234,'Avenida 1819, Santiago del Estero','123xyz','2024-02-23 12:52:49','2024-02-23 12:52:49'),(9,'Javier Herrera','490000','1980-06-18','javierherrera@gmail.com',3859012345,'Calle 2021, Santiago del Estero','456abc','2024-02-23 12:52:49','2024-02-23 12:52:49'),(10,'Martina Fernández','420000','1993-12-05','martinafernandez@gmail.com',3850123456,'Avenida 2223, Santiago del Estero','789xyz','2024-02-23 12:53:15','2024-02-23 12:53:15');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,'En proceso','2024-02-23 13:34:50','2024-02-23 13:34:50',1,3),(2,'Entregado','2024-02-23 13:34:50','2024-02-23 13:34:50',2,2),(3,'En proceso','2024-02-23 13:34:50','2024-02-23 13:34:50',3,1),(4,'Entregado','2024-02-23 13:34:50','2024-02-23 13:34:50',4,1),(5,'Cancelado','2024-02-23 13:34:50','2024-02-23 13:34:50',5,4),(6,'En proceso','2024-02-23 13:34:50','2024-02-23 13:34:50',6,1),(7,'Entregado','2024-02-23 13:34:50','2024-02-23 13:34:50',7,2),(8,'En proceso','2024-02-23 13:34:50','2024-02-23 13:34:50',8,5),(9,'En proceso','2024-02-23 13:34:50','2024-02-23 13:34:50',9,3),(10,'Entregado','2024-02-23 13:34:50','2024-02-23 13:34:50',8,2),(11,'En proceso','2024-02-23 13:34:50','2024-02-23 13:34:50',1,3),(12,'Entregado','2024-02-23 13:34:50','2024-02-23 13:34:50',2,2),(13,'En proceso','2024-02-23 13:34:50','2024-02-23 13:34:50',3,1),(14,'Entregado','2024-02-23 13:34:50','2024-02-23 13:34:50',4,1),(15,'Cancelado','2024-02-23 13:34:50','2024-02-23 13:34:50',5,4),(16,'En proceso','2024-02-23 13:34:50','2024-02-23 13:34:50',6,1),(17,'Entregado','2024-02-23 13:34:50','2024-02-23 13:34:50',7,2),(18,'En proceso','2024-02-23 13:34:50','2024-02-23 13:34:50',8,5),(19,'En proceso','2024-02-23 13:34:50','2024-02-23 13:34:50',9,3),(20,'Entregado','2024-02-23 13:35:19','2024-02-23 13:35:19',10,2);
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'secco','manzana',3.000,'Gaseosas',5,2499.55,NULL,'2024-02-14 18:48:25','2024-02-14 18:48:25',NULL),(2,'Coca-Cola','Refresco de cola',2.000,'Gaseosa',100,2.50,NULL,'2024-02-23 13:59:49','2024-02-23 13:59:49',1),(3,'Pepsi','Refresco de cola',1.500,'Gaseosa',80,2.00,NULL,'2024-02-23 13:59:49','2024-02-23 13:59:49',2),(4,'Jack Daniel\'s','Whisky Tennessee',1.000,'Alcohol',20,45.00,NULL,'2024-02-23 13:59:49','2024-02-23 13:59:49',3),(5,'Absolut','Vodka',0.700,'Alcohol',30,20.00,NULL,'2024-02-23 13:59:49','2024-02-23 13:59:49',4),(6,'Agua Mineral','Agua sin gas',0.500,'Agua',120,1.00,NULL,'2024-02-23 13:59:49','2024-02-23 13:59:49',5),(7,'Corona','Cerveza',0.330,'Cerveza',50,3.50,NULL,'2024-02-23 13:59:49','2024-02-23 13:59:49',6),(8,'Red Bull','Bebida energética',0.250,'Energética',40,3.00,NULL,'2024-02-23 13:59:49','2024-02-23 13:59:49',7),(9,'Mojito','Cóctel de ron y menta',0.300,'Cóctel',25,8.00,NULL,'2024-02-23 13:59:49','2024-02-23 13:59:49',8),(10,'Vino Tinto','Vino tinto seco',0.750,'Vino',15,12.00,NULL,'2024-02-23 13:59:49','2024-02-23 13:59:49',9),(11,'Sprite','Refresco de limón-lima',2.000,'Gaseosa',90,2.30,NULL,'2024-02-23 13:59:49','2024-02-23 13:59:49',10),(12,'Heineken','Cerveza',0.330,'Cerveza',60,3.00,NULL,'2024-02-23 13:59:49','2024-02-23 13:59:49',11),(13,'Tequila','Tequila añejo',0.750,'Alcohol',25,25.00,NULL,'2024-02-23 13:59:49','2024-02-23 13:59:49',12),(14,'Gin Tonic','Cóctel de ginebra y tónica',0.500,'Cóctel',30,10.00,NULL,'2024-02-23 13:59:49','2024-02-23 13:59:49',13),(15,'Agua con gas','Agua con burbujas',0.500,'Agua',100,1.50,NULL,'2024-02-23 13:59:49','2024-02-23 13:59:49',14),(16,'Fernet Branca','Licor de hierbas',0.750,'Alcohol',20,15.00,NULL,'2024-02-23 13:59:49','2024-02-23 13:59:49',15),(17,'Margarita','Cóctel de tequila y limón',0.300,'Cóctel',25,8.50,NULL,'2024-02-23 13:59:49','2024-02-23 13:59:49',16),(18,'Vino Blanco','Vino blanco seco',0.750,'Vino',18,14.00,NULL,'2024-02-23 13:59:49','2024-02-23 13:59:49',17),(19,'Pepsi Light','Refresco de cola light',1.500,'Gaseosa',70,2.20,NULL,'2024-02-23 13:59:49','2024-02-23 13:59:49',18),(20,'Tequila Patron','Tequila premium',0.750,'Alcohol',15,40.00,NULL,'2024-02-23 13:59:49','2024-02-23 13:59:49',19),(21,'Tónica','Agua tónica',0.500,'Gaseosa',80,2.50,NULL,'2024-02-23 14:00:09','2024-02-23 14:00:09',20);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-24  6:50:30
