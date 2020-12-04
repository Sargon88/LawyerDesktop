-- MySQL dump 10.17  Distrib 10.3.25-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: lawyer_desktop
-- ------------------------------------------------------
-- Server version	10.3.25-MariaDB-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `address_street` varchar(255) NOT NULL,
  `address_number` int(11) DEFAULT NULL,
  `address_city` varchar(255) NOT NULL,
  `address_province` varchar(255) DEFAULT NULL,
  `address_country` varchar(255) NOT NULL,
  `address_zipcode` varchar(255) NOT NULL,
  `legal_person` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `addresses_components`
--

DROP TABLE IF EXISTS `addresses_components`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses_components` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `field` varchar(255) NOT NULL,
  `order` int(10) unsigned NOT NULL,
  `component_type` varchar(255) NOT NULL,
  `component_id` int(11) NOT NULL,
  `address_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `address_id_fk` (`address_id`),
  CONSTRAINT `address_id_fk` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses_components`
--

LOCK TABLES `addresses_components` WRITE;
/*!40000 ALTER TABLE `addresses_components` DISABLE KEYS */;
/*!40000 ALTER TABLE `addresses_components` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `client_legal_person` int(11) DEFAULT NULL,
  `client_physical_person` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `client_name` varchar(255) DEFAULT NULL,
  `customer_name` varchar(255) DEFAULT NULL,
  `customer_type` varchar(255) DEFAULT NULL,
  `customer_active` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (6,NULL,NULL,1,1,'2020-11-21 12:07:29','2020-11-21 12:12:12',NULL,'emanuele sardini','Fisico',1),(7,NULL,NULL,1,1,'2020-11-21 12:07:45','2020-11-21 12:12:18',NULL,'sofia','Fisico',1),(8,NULL,NULL,1,1,'2020-11-21 12:08:07','2020-11-21 12:12:27',NULL,'eduteam','Giuridico',1);
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clients_components`
--

DROP TABLE IF EXISTS `clients_components`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clients_components` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `field` varchar(255) NOT NULL,
  `order` int(10) unsigned NOT NULL,
  `component_type` varchar(255) NOT NULL,
  `component_id` int(11) NOT NULL,
  `client_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `client_id_fk` (`client_id`),
  CONSTRAINT `client_id_fk` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients_components`
--

LOCK TABLES `clients_components` WRITE;
/*!40000 ALTER TABLE `clients_components` DISABLE KEYS */;
INSERT INTO `clients_components` VALUES (1,'customer_customer',1,'components_customer_physical_people',1,6),(2,'customer_customer',1,'components_customer_physical_people',2,7),(3,'customer_customer',1,'components_customer_legal_people',1,8);
/*!40000 ALTER TABLE `clients_components` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `components_address_addresses`
--

DROP TABLE IF EXISTS `components_address_addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `components_address_addresses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `address_street` varchar(255) DEFAULT NULL,
  `address_city` varchar(255) DEFAULT NULL,
  `address_region` varchar(255) DEFAULT NULL,
  `address_country` varchar(255) DEFAULT NULL,
  `address_number` int(11) DEFAULT NULL,
  `address_province` varchar(255) DEFAULT NULL,
  `address_zipcode` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `components_address_addresses`
--

LOCK TABLES `components_address_addresses` WRITE;
/*!40000 ALTER TABLE `components_address_addresses` DISABLE KEYS */;
INSERT INTO `components_address_addresses` VALUES (3,'via bolama','milano',NULL,'italia',5,'mi','20100'),(4,'via montenero','milano',NULL,'italy',22,'mi','20100'),(7,'asdfdvewf14321564','milano',NULL,'italia',12,'mi','20100'),(8,'asdfdvewf14321564','milano',NULL,'italia',12,'mi','20100'),(9,'asdfdvewf14321564','milano',NULL,'italia',12,'mi','20100'),(10,'asdfdvewf14321564','milano',NULL,'italia',12,'mi','20100'),(11,'asdfdvewf14321564','milano',NULL,'italia',12,'mi','20100'),(12,'asdfdvewf14321564','milano',NULL,'italia',12,'mi','20100'),(13,'asdfdvewf14321564','milano',NULL,'italia',12,'mi','20100'),(14,'asdfdvewf14321564','milano',NULL,'italia',12,'mi','20100'),(15,'zzz','zzz',NULL,'zzz',12,'zzz','00000'),(16,'marmottina','marmottinana',NULL,'marmottilandia',1,'nananana','01111'),(17,'a','a',NULL,'A',2,'a','00000'),(18,'a','a',NULL,'A',2,'a','00000'),(19,'a','a',NULL,'A',2,'a','00000'),(20,'a','a',NULL,'A',2,'a','00000'),(21,'a','a',NULL,'A',2,'a','00000'),(22,'a','a',NULL,'a',3,'a','00000'),(23,'a','a',NULL,'a',1,'a','00000'),(24,'a','a',NULL,'a',0,'a','00000'),(25,'a','a',NULL,'a',0,'a','00000'),(26,'a','a',NULL,'a',1,'a','00000'),(27,'a','a',NULL,'a',0,'a','00000'),(28,'a','a',NULL,'a',0,'a','00000'),(29,'a','a',NULL,'a',0,'a','00000'),(30,'a','a',NULL,'a',0,'a','00000'),(31,'a','a',NULL,'a',0,'a','00000'),(32,'a','a',NULL,'a',0,'a','00000'),(33,'a','a',NULL,'a',0,'a','00000'),(34,'a','aa',NULL,'a',0,'a','00000'),(35,'a','a',NULL,'a',0,'a','00000'),(36,'a','a',NULL,'a',0,'a','00000'),(37,'a','a',NULL,'a',0,'a','00000'),(38,'a','a',NULL,'a',0,'a','00000'),(39,'a','a',NULL,'a',0,'a','00000'),(40,'a','a',NULL,'a',0,'a','00000'),(41,'asdfdvewf14321564','milano',NULL,'italia',12,'mi','20100'),(42,'asdfdvewf14321564','milano',NULL,'italia',12,'mi','20100'),(43,'asdfdvewf14321564','milano',NULL,'italia',12,'mi','20100'),(44,'asdfdvewf14321564','milano',NULL,'italia',12,'mi','20100'),(46,'a','a',NULL,'a',0,'a','00000'),(47,'a','a',NULL,'a',0,'a','00000'),(49,'via monte sabotino','sesto san giovanni',NULL,'italia',5,'mi','20099'),(50,'asdfdvewf14321564','milano',NULL,'italia',12,'mi','20100'),(52,'via monte sabotino','sesto san giovanni',NULL,'italia',5,'mi','20099'),(54,'asdfdvewf14321564','milano',NULL,'italia',12,'mi','20100'),(55,'asdfdvewf14321564','milano',NULL,'italia',12,'mi','20100'),(56,'asdfdvewf14321564','milano',NULL,'italia',12,'mi','20100');
/*!40000 ALTER TABLE `components_address_addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `components_customer_legal_people`
--

DROP TABLE IF EXISTS `components_customer_legal_people`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `components_customer_legal_people` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `legal_person` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `components_customer_legal_people`
--

LOCK TABLES `components_customer_legal_people` WRITE;
/*!40000 ALTER TABLE `components_customer_legal_people` DISABLE KEYS */;
INSERT INTO `components_customer_legal_people` VALUES (1,3),(2,3),(3,5),(4,6),(5,7),(6,8),(7,9),(8,10),(9,11);
/*!40000 ALTER TABLE `components_customer_legal_people` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `components_customer_physical_people`
--

DROP TABLE IF EXISTS `components_customer_physical_people`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `components_customer_physical_people` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `physical_person` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `components_customer_physical_people`
--

LOCK TABLES `components_customer_physical_people` WRITE;
/*!40000 ALTER TABLE `components_customer_physical_people` DISABLE KEYS */;
INSERT INTO `components_customer_physical_people` VALUES (1,4),(2,5),(3,5),(4,4),(5,4),(16,10),(18,14),(19,15),(20,16),(21,17),(22,18),(23,19),(24,20),(25,21),(26,22),(27,23),(28,24),(29,25),(30,26),(31,27),(32,28),(33,29),(34,30),(35,31),(36,32),(37,33),(38,34),(39,35),(40,36),(41,37),(42,38),(43,39),(44,40),(45,41),(46,42),(47,43),(48,44),(49,45),(50,7),(51,8),(52,10);
/*!40000 ALTER TABLE `components_customer_physical_people` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `components_phone_phonenumbers`
--

DROP TABLE IF EXISTS `components_phone_phonenumbers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `components_phone_phonenumbers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `phone_number` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=169 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `components_phone_phonenumbers`
--

LOCK TABLES `components_phone_phonenumbers` WRITE;
/*!40000 ALTER TABLE `components_phone_phonenumbers` DISABLE KEYS */;
INSERT INTO `components_phone_phonenumbers` VALUES (13,'3334455678'),(14,'0202020231'),(15,'0202020232'),(16,'3334455789'),(17,'0211223344'),(18,'0211223345'),(19,'3386776738'),(20,'0227070077'),(21,'0227070077'),(22,'3386776738'),(23,'0227070077'),(24,'0227070077'),(25,'3386776738'),(26,'0227070077'),(27,'0227070077'),(28,'3386776738'),(29,'0227070077'),(30,'0227070077'),(31,'3386776738'),(32,'0227070077'),(33,'0227070077'),(34,'3386776738'),(35,'0227070077'),(36,'0227070077'),(37,'3386776738'),(38,'0227070077'),(39,'0227070077'),(40,'3386776738'),(41,'0227070077'),(42,'0227070077'),(43,'3334455678'),(44,'0202020200'),(45,'0202000000'),(46,'3333455643'),(47,'0333455432'),(48,NULL),(49,'3384445568'),(50,'0227070077'),(51,NULL),(52,'3384445568'),(53,'0227070077'),(54,NULL),(55,'3384445568'),(56,'0227070077'),(57,NULL),(58,'3384445568'),(59,'0227070077'),(60,NULL),(61,'3384445568'),(62,'0227070077'),(63,NULL),(64,'3333333333'),(65,'0227070000'),(66,NULL),(67,'3333333333'),(68,'0227070000'),(69,NULL),(70,'3333333333'),(71,'0222222222'),(72,NULL),(73,'3399223249'),(74,'0229939345'),(75,NULL),(76,'3333333333'),(77,'0222222222'),(78,NULL),(79,'3333333333'),(80,'0222222222'),(81,NULL),(82,'3333333333'),(83,'0333333333'),(84,NULL),(85,'3333333333'),(86,'0222222222'),(87,NULL),(88,'3333333333'),(89,'0222222222'),(90,NULL),(91,'3333333333'),(92,'0233333330'),(93,NULL),(94,'3333333333'),(95,'0222222222'),(96,NULL),(97,'3333333333'),(98,'0222222222'),(99,NULL),(100,'3333333333'),(101,'0222222222'),(102,NULL),(103,'3333333333'),(104,'0222222222'),(105,NULL),(106,'3333333333'),(107,'0227070000'),(108,NULL),(109,'3333333333'),(110,'0227070000'),(111,NULL),(112,'3333333333'),(113,'0227070000'),(114,NULL),(115,'3333333333'),(116,'0227070000'),(117,NULL),(118,'3333333333'),(119,'0227070000'),(120,NULL),(121,'3386776738'),(122,'0227070077'),(123,'0227070077'),(124,'3386776738'),(125,'0227070077'),(126,'0227070077'),(127,'3386776738'),(128,'0227070077'),(129,'0227070077'),(130,'3386776738'),(131,'0227070077'),(132,'0227070077'),(136,'3333333333'),(137,'3929964225'),(138,NULL),(139,'3333333333'),(140,'3929964225'),(141,NULL),(145,'3929964225'),(146,'0227070077'),(147,'0227070077'),(148,'3386776738'),(149,'0227070077'),(150,'0227070077'),(154,'3386778739'),(155,'0376670012'),(156,'0376670011'),(160,'3386776738'),(161,'0227070077'),(162,'0227070077'),(163,'3386776738'),(164,'0227070077'),(165,'0227070077'),(166,'3386776738'),(167,'0227070077'),(168,'0227070077');
/*!40000 ALTER TABLE `components_phone_phonenumbers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `components_recapiti_recapitis`
--

DROP TABLE IF EXISTS `components_recapiti_recapitis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `components_recapiti_recapitis` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cnn_mail` varchar(255) DEFAULT NULL,
  `cnn_pec` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `components_recapiti_recapitis`
--

LOCK TABLES `components_recapiti_recapitis` WRITE;
/*!40000 ALTER TABLE `components_recapiti_recapitis` DISABLE KEYS */;
INSERT INTO `components_recapiti_recapitis` VALUES (3,'amministrazione@eduteam.com','eduteam@pec.com'),(4,'priscop@mail.com','prisco@pec.it'),(5,'test@t.it','test@pec.it'),(6,'test@t.it','test@pec.it'),(7,'test@t.it','test@pec.it'),(8,'test@t.it','test@pec.it'),(9,'test@t.it','test@pec.it'),(10,'test@t.it','test@pec.it'),(11,'test@t.it','test@pec.it'),(12,'test@t.it','test@pec.it'),(13,'zzzd@mail.com','zzzd@pec.com'),(14,'marmottina@inaina.com','marmottinapec@pec.it'),(15,'a@a.it','a@a.it'),(16,'a@a.it','a@a.it'),(17,'a@a.it','a@a.it'),(18,'a@a.it','a@a.it'),(19,'a@a.it','a@a.it'),(20,'ta@a.it','a@a.it'),(21,'a@a.it','a@a.it'),(22,'a@a.it','a@a.it'),(23,'a@a.it','a@a.it'),(24,'a@a.it','a@a.it'),(25,'A@A.IT','a@a.it'),(26,'a@a.iy','a@a.aa'),(27,'a@a.it','a@a.it'),(28,'a@a.it','a@a.aa'),(29,'a@a.aa','a@a.aa'),(30,'a@a.aa','a@a.aa'),(31,'a@a.aa','a@a.aa'),(32,'a@a.aa','a@a.aa'),(33,'a@a.aa','a@a.aa'),(34,'a@a.aa','pecsociet1@societa1.com'),(35,'a@a.aa','pecsociet1@societa1.com'),(36,'a@a.aa','pecsociet1@societa1.com'),(37,'a@a.aa','pecsociet1@societa1.com'),(38,'a@a.aa','pecsociet1@societa1.com'),(39,'test@t.it','test@pec.it'),(40,'test@t.it','test@pec.it'),(41,'test@t.it','test@pec.it'),(42,'test@t.it','test@pec.it'),(44,'a@a.aa','A@A.AA'),(45,'a@a.aa','A@A.AA'),(47,'emanuele.sardini@gmail.com','emanuele.sardini@pec.it'),(48,'test@t.it','test@pec.it'),(50,'sofia.monici@gmail.com','sofia.monici@pec.it'),(52,'test@t.it','test@pec.it'),(53,'test@t.it','test@pec.it'),(54,'test@t.it','test@pec.it');
/*!40000 ALTER TABLE `components_recapiti_recapitis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `components_recapiti_recapitis_components`
--

DROP TABLE IF EXISTS `components_recapiti_recapitis_components`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `components_recapiti_recapitis_components` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `field` varchar(255) NOT NULL,
  `order` int(10) unsigned NOT NULL,
  `component_type` varchar(255) NOT NULL,
  `component_id` int(11) NOT NULL,
  `components_recapiti_recapiti_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `components_recapiti_recapiti_id_fk` (`components_recapiti_recapiti_id`),
  CONSTRAINT `components_recapiti_recapiti_id_fk` FOREIGN KEY (`components_recapiti_recapiti_id`) REFERENCES `components_recapiti_recapitis` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=163 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `components_recapiti_recapitis_components`
--

LOCK TABLES `components_recapiti_recapitis_components` WRITE;
/*!40000 ALTER TABLE `components_recapiti_recapitis_components` DISABLE KEYS */;
INSERT INTO `components_recapiti_recapitis_components` VALUES (7,'cnn_mobile',1,'components_phone_phonenumbers',13,3),(8,'cnn_phone',1,'components_phone_phonenumbers',14,3),(9,'cnn_fax',1,'components_phone_phonenumbers',15,3),(10,'cnn_mobile',1,'components_phone_phonenumbers',16,4),(11,'cnn_phone',1,'components_phone_phonenumbers',17,4),(12,'cnn_fax',1,'components_phone_phonenumbers',18,4),(13,'cnn_mobile',1,'components_phone_phonenumbers',19,5),(14,'cnn_phone',1,'components_phone_phonenumbers',20,5),(15,'cnn_fax',1,'components_phone_phonenumbers',21,5),(16,'cnn_mobile',1,'components_phone_phonenumbers',22,6),(17,'cnn_phone',1,'components_phone_phonenumbers',23,6),(18,'cnn_fax',1,'components_phone_phonenumbers',24,6),(19,'cnn_mobile',1,'components_phone_phonenumbers',25,7),(20,'cnn_phone',1,'components_phone_phonenumbers',26,7),(21,'cnn_fax',1,'components_phone_phonenumbers',27,7),(22,'cnn_mobile',1,'components_phone_phonenumbers',28,8),(23,'cnn_phone',1,'components_phone_phonenumbers',29,8),(24,'cnn_fax',1,'components_phone_phonenumbers',30,8),(25,'cnn_mobile',1,'components_phone_phonenumbers',31,9),(26,'cnn_phone',1,'components_phone_phonenumbers',32,9),(27,'cnn_fax',1,'components_phone_phonenumbers',33,9),(28,'cnn_mobile',1,'components_phone_phonenumbers',34,10),(29,'cnn_phone',1,'components_phone_phonenumbers',35,10),(30,'cnn_fax',1,'components_phone_phonenumbers',36,10),(31,'cnn_mobile',1,'components_phone_phonenumbers',37,11),(32,'cnn_phone',1,'components_phone_phonenumbers',38,11),(33,'cnn_fax',1,'components_phone_phonenumbers',39,11),(34,'cnn_mobile',1,'components_phone_phonenumbers',40,12),(35,'cnn_phone',1,'components_phone_phonenumbers',41,12),(36,'cnn_fax',1,'components_phone_phonenumbers',42,12),(37,'cnn_mobile',1,'components_phone_phonenumbers',43,13),(38,'cnn_phone',1,'components_phone_phonenumbers',44,13),(39,'cnn_fax',1,'components_phone_phonenumbers',45,13),(40,'cnn_mobile',1,'components_phone_phonenumbers',46,14),(41,'cnn_phone',1,'components_phone_phonenumbers',47,14),(42,'cnn_fax',1,'components_phone_phonenumbers',48,14),(43,'cnn_mobile',1,'components_phone_phonenumbers',49,15),(44,'cnn_phone',1,'components_phone_phonenumbers',50,15),(45,'cnn_fax',1,'components_phone_phonenumbers',51,15),(46,'cnn_mobile',1,'components_phone_phonenumbers',52,16),(47,'cnn_phone',1,'components_phone_phonenumbers',53,16),(48,'cnn_fax',1,'components_phone_phonenumbers',54,16),(49,'cnn_mobile',1,'components_phone_phonenumbers',55,17),(50,'cnn_phone',1,'components_phone_phonenumbers',56,17),(51,'cnn_fax',1,'components_phone_phonenumbers',57,17),(52,'cnn_mobile',1,'components_phone_phonenumbers',58,18),(53,'cnn_phone',1,'components_phone_phonenumbers',59,18),(54,'cnn_fax',1,'components_phone_phonenumbers',60,18),(55,'cnn_mobile',1,'components_phone_phonenumbers',61,19),(56,'cnn_phone',1,'components_phone_phonenumbers',62,19),(57,'cnn_fax',1,'components_phone_phonenumbers',63,19),(58,'cnn_mobile',1,'components_phone_phonenumbers',64,20),(59,'cnn_phone',1,'components_phone_phonenumbers',65,20),(60,'cnn_fax',1,'components_phone_phonenumbers',66,20),(61,'cnn_mobile',1,'components_phone_phonenumbers',67,21),(62,'cnn_phone',1,'components_phone_phonenumbers',68,21),(63,'cnn_fax',1,'components_phone_phonenumbers',69,21),(64,'cnn_mobile',1,'components_phone_phonenumbers',70,22),(65,'cnn_phone',1,'components_phone_phonenumbers',71,22),(66,'cnn_fax',1,'components_phone_phonenumbers',72,22),(67,'cnn_mobile',1,'components_phone_phonenumbers',73,23),(68,'cnn_phone',1,'components_phone_phonenumbers',74,23),(69,'cnn_fax',1,'components_phone_phonenumbers',75,23),(70,'cnn_mobile',1,'components_phone_phonenumbers',76,24),(71,'cnn_phone',1,'components_phone_phonenumbers',77,24),(72,'cnn_fax',1,'components_phone_phonenumbers',78,24),(73,'cnn_mobile',1,'components_phone_phonenumbers',79,25),(74,'cnn_phone',1,'components_phone_phonenumbers',80,25),(75,'cnn_fax',1,'components_phone_phonenumbers',81,25),(76,'cnn_mobile',1,'components_phone_phonenumbers',82,26),(77,'cnn_phone',1,'components_phone_phonenumbers',83,26),(78,'cnn_fax',1,'components_phone_phonenumbers',84,26),(79,'cnn_mobile',1,'components_phone_phonenumbers',85,27),(80,'cnn_phone',1,'components_phone_phonenumbers',86,27),(81,'cnn_fax',1,'components_phone_phonenumbers',87,27),(82,'cnn_mobile',1,'components_phone_phonenumbers',88,28),(83,'cnn_phone',1,'components_phone_phonenumbers',89,28),(84,'cnn_fax',1,'components_phone_phonenumbers',90,28),(85,'cnn_mobile',1,'components_phone_phonenumbers',91,29),(86,'cnn_phone',1,'components_phone_phonenumbers',92,29),(87,'cnn_fax',1,'components_phone_phonenumbers',93,29),(88,'cnn_mobile',1,'components_phone_phonenumbers',94,30),(89,'cnn_phone',1,'components_phone_phonenumbers',95,30),(90,'cnn_fax',1,'components_phone_phonenumbers',96,30),(91,'cnn_mobile',1,'components_phone_phonenumbers',97,31),(92,'cnn_phone',1,'components_phone_phonenumbers',98,31),(93,'cnn_fax',1,'components_phone_phonenumbers',99,31),(94,'cnn_mobile',1,'components_phone_phonenumbers',100,32),(95,'cnn_phone',1,'components_phone_phonenumbers',101,32),(96,'cnn_fax',1,'components_phone_phonenumbers',102,32),(97,'cnn_mobile',1,'components_phone_phonenumbers',103,33),(98,'cnn_phone',1,'components_phone_phonenumbers',104,33),(99,'cnn_fax',1,'components_phone_phonenumbers',105,33),(100,'cnn_mobile',1,'components_phone_phonenumbers',106,34),(101,'cnn_phone',1,'components_phone_phonenumbers',107,34),(102,'cnn_fax',1,'components_phone_phonenumbers',108,34),(103,'cnn_mobile',1,'components_phone_phonenumbers',109,35),(104,'cnn_phone',1,'components_phone_phonenumbers',110,35),(105,'cnn_fax',1,'components_phone_phonenumbers',111,35),(106,'cnn_mobile',1,'components_phone_phonenumbers',112,36),(107,'cnn_phone',1,'components_phone_phonenumbers',113,36),(108,'cnn_fax',1,'components_phone_phonenumbers',114,36),(109,'cnn_mobile',1,'components_phone_phonenumbers',115,37),(110,'cnn_phone',1,'components_phone_phonenumbers',116,37),(111,'cnn_fax',1,'components_phone_phonenumbers',117,37),(112,'cnn_mobile',1,'components_phone_phonenumbers',118,38),(113,'cnn_phone',1,'components_phone_phonenumbers',119,38),(114,'cnn_fax',1,'components_phone_phonenumbers',120,38),(115,'cnn_mobile',1,'components_phone_phonenumbers',121,39),(116,'cnn_phone',1,'components_phone_phonenumbers',122,39),(117,'cnn_fax',1,'components_phone_phonenumbers',123,39),(118,'cnn_mobile',1,'components_phone_phonenumbers',124,40),(119,'cnn_phone',1,'components_phone_phonenumbers',125,40),(120,'cnn_fax',1,'components_phone_phonenumbers',126,40),(121,'cnn_mobile',1,'components_phone_phonenumbers',127,41),(122,'cnn_phone',1,'components_phone_phonenumbers',128,41),(123,'cnn_fax',1,'components_phone_phonenumbers',129,41),(124,'cnn_mobile',1,'components_phone_phonenumbers',130,42),(125,'cnn_phone',1,'components_phone_phonenumbers',131,42),(126,'cnn_fax',1,'components_phone_phonenumbers',132,42),(130,'cnn_mobile',1,'components_phone_phonenumbers',136,44),(131,'cnn_phone',1,'components_phone_phonenumbers',137,44),(132,'cnn_fax',1,'components_phone_phonenumbers',138,44),(133,'cnn_mobile',1,'components_phone_phonenumbers',139,45),(134,'cnn_phone',1,'components_phone_phonenumbers',140,45),(135,'cnn_fax',1,'components_phone_phonenumbers',141,45),(139,'cnn_mobile',1,'components_phone_phonenumbers',145,47),(140,'cnn_phone',1,'components_phone_phonenumbers',146,47),(141,'cnn_fax',1,'components_phone_phonenumbers',147,47),(142,'cnn_mobile',1,'components_phone_phonenumbers',148,48),(143,'cnn_phone',1,'components_phone_phonenumbers',149,48),(144,'cnn_fax',1,'components_phone_phonenumbers',150,48),(148,'cnn_mobile',1,'components_phone_phonenumbers',154,50),(149,'cnn_phone',1,'components_phone_phonenumbers',155,50),(150,'cnn_fax',1,'components_phone_phonenumbers',156,50),(154,'cnn_mobile',1,'components_phone_phonenumbers',160,52),(155,'cnn_phone',1,'components_phone_phonenumbers',161,52),(156,'cnn_fax',1,'components_phone_phonenumbers',162,52),(157,'cnn_mobile',1,'components_phone_phonenumbers',163,53),(158,'cnn_phone',1,'components_phone_phonenumbers',164,53),(159,'cnn_fax',1,'components_phone_phonenumbers',165,53),(160,'cnn_mobile',1,'components_phone_phonenumbers',166,54),(161,'cnn_phone',1,'components_phone_phonenumbers',167,54),(162,'cnn_fax',1,'components_phone_phonenumbers',168,54);
/*!40000 ALTER TABLE `components_recapiti_recapitis_components` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `core_store`
--

DROP TABLE IF EXISTS `core_store`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `core_store` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `key` varchar(255) DEFAULT NULL,
  `value` longtext DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `environment` varchar(255) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `core_store`
--

LOCK TABLES `core_store` WRITE;
/*!40000 ALTER TABLE `core_store` DISABLE KEYS */;
INSERT INTO `core_store` VALUES (1,'model_def_strapi::core-store','{\"uid\":\"strapi::core-store\",\"collectionName\":\"core_store\",\"info\":{\"name\":\"core_store\",\"description\":\"\"},\"options\":{\"timestamps\":false},\"attributes\":{\"key\":{\"type\":\"string\"},\"value\":{\"type\":\"text\"},\"type\":{\"type\":\"string\"},\"environment\":{\"type\":\"string\"},\"tag\":{\"type\":\"string\"}}}','object',NULL,NULL),(2,'model_def_strapi::webhooks','{\"uid\":\"strapi::webhooks\",\"collectionName\":\"strapi_webhooks\",\"info\":{\"name\":\"Strapi webhooks\",\"description\":\"\"},\"options\":{\"timestamps\":false},\"attributes\":{\"name\":{\"type\":\"string\"},\"url\":{\"type\":\"text\"},\"headers\":{\"type\":\"json\"},\"events\":{\"type\":\"json\"},\"enabled\":{\"type\":\"boolean\"}}}','object',NULL,NULL),(3,'model_def_strapi::permission','{\"uid\":\"strapi::permission\",\"collectionName\":\"strapi_permission\",\"kind\":\"collectionType\",\"info\":{\"name\":\"Permission\",\"description\":\"\"},\"options\":{\"timestamps\":[\"created_at\",\"updated_at\"]},\"attributes\":{\"action\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":true},\"subject\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":false},\"fields\":{\"type\":\"json\",\"configurable\":false,\"required\":false,\"default\":[]},\"conditions\":{\"type\":\"json\",\"configurable\":false,\"required\":false,\"default\":[]},\"role\":{\"configurable\":false,\"model\":\"role\",\"plugin\":\"admin\"}}}','object',NULL,NULL),(4,'model_def_strapi::role','{\"uid\":\"strapi::role\",\"collectionName\":\"strapi_role\",\"kind\":\"collectionType\",\"info\":{\"name\":\"Role\",\"description\":\"\"},\"options\":{\"timestamps\":[\"created_at\",\"updated_at\"]},\"attributes\":{\"name\":{\"type\":\"string\",\"minLength\":1,\"unique\":true,\"configurable\":false,\"required\":true},\"code\":{\"type\":\"string\",\"minLength\":1,\"unique\":true,\"configurable\":false,\"required\":true},\"description\":{\"type\":\"string\",\"configurable\":false},\"users\":{\"configurable\":false,\"collection\":\"user\",\"via\":\"roles\",\"plugin\":\"admin\",\"attribute\":\"user\",\"column\":\"id\",\"isVirtual\":true},\"permissions\":{\"configurable\":false,\"plugin\":\"admin\",\"collection\":\"permission\",\"via\":\"role\",\"isVirtual\":true}}}','object',NULL,NULL),(5,'model_def_strapi::user','{\"uid\":\"strapi::user\",\"collectionName\":\"strapi_administrator\",\"kind\":\"collectionType\",\"info\":{\"name\":\"User\",\"description\":\"\"},\"options\":{\"timestamps\":false},\"attributes\":{\"firstname\":{\"type\":\"string\",\"unique\":false,\"minLength\":1,\"configurable\":false,\"required\":false},\"lastname\":{\"type\":\"string\",\"unique\":false,\"minLength\":1,\"configurable\":false,\"required\":false},\"username\":{\"type\":\"string\",\"unique\":false,\"configurable\":false,\"required\":false},\"email\":{\"type\":\"email\",\"minLength\":6,\"configurable\":false,\"required\":true,\"unique\":true,\"private\":true},\"password\":{\"type\":\"password\",\"minLength\":6,\"configurable\":false,\"required\":false,\"private\":true},\"resetPasswordToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true},\"registrationToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true},\"isActive\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false,\"private\":true},\"roles\":{\"collection\":\"role\",\"collectionName\":\"strapi_users_roles\",\"via\":\"users\",\"dominant\":true,\"plugin\":\"admin\",\"configurable\":false,\"private\":true,\"attribute\":\"role\",\"column\":\"id\",\"isVirtual\":true},\"blocked\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false,\"private\":true}}}','object',NULL,NULL),(6,'model_def_plugins::users-permissions.permission','{\"uid\":\"plugins::users-permissions.permission\",\"collectionName\":\"users-permissions_permission\",\"kind\":\"collectionType\",\"info\":{\"name\":\"permission\",\"description\":\"\"},\"options\":{\"timestamps\":false},\"attributes\":{\"type\":{\"type\":\"string\",\"required\":true,\"configurable\":false},\"controller\":{\"type\":\"string\",\"required\":true,\"configurable\":false},\"action\":{\"type\":\"string\",\"required\":true,\"configurable\":false},\"enabled\":{\"type\":\"boolean\",\"required\":true,\"configurable\":false},\"policy\":{\"type\":\"string\",\"configurable\":false},\"role\":{\"model\":\"role\",\"via\":\"permissions\",\"plugin\":\"users-permissions\",\"configurable\":false},\"created_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true},\"updated_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true}}}','object',NULL,NULL),(7,'model_def_plugins::users-permissions.role','{\"uid\":\"plugins::users-permissions.role\",\"collectionName\":\"users-permissions_role\",\"kind\":\"collectionType\",\"info\":{\"name\":\"role\",\"description\":\"\"},\"options\":{\"timestamps\":false},\"attributes\":{\"name\":{\"type\":\"string\",\"minLength\":3,\"required\":true,\"configurable\":false},\"description\":{\"type\":\"string\",\"configurable\":false},\"type\":{\"type\":\"string\",\"unique\":true,\"configurable\":false},\"permissions\":{\"collection\":\"permission\",\"via\":\"role\",\"plugin\":\"users-permissions\",\"configurable\":false,\"isVirtual\":true},\"users\":{\"collection\":\"user\",\"via\":\"role\",\"configurable\":false,\"plugin\":\"users-permissions\",\"isVirtual\":true},\"created_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true},\"updated_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true}}}','object',NULL,NULL),(8,'model_def_plugins::users-permissions.user','{\"uid\":\"plugins::users-permissions.user\",\"collectionName\":\"users-permissions_user\",\"kind\":\"collectionType\",\"info\":{\"name\":\"user\",\"description\":\"\"},\"options\":{\"draftAndPublish\":false,\"timestamps\":[\"created_at\",\"updated_at\"]},\"attributes\":{\"username\":{\"type\":\"string\",\"minLength\":3,\"unique\":true,\"configurable\":false,\"required\":true},\"email\":{\"type\":\"email\",\"minLength\":6,\"configurable\":false,\"required\":true},\"provider\":{\"type\":\"string\",\"configurable\":false},\"password\":{\"type\":\"password\",\"minLength\":6,\"configurable\":false,\"private\":true},\"resetPasswordToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true},\"confirmationToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true},\"confirmed\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false},\"blocked\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false},\"role\":{\"model\":\"role\",\"via\":\"users\",\"plugin\":\"users-permissions\",\"configurable\":false},\"created_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true},\"updated_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true}}}','object',NULL,NULL),(9,'model_def_plugins::upload.file','{\"uid\":\"plugins::upload.file\",\"collectionName\":\"upload_file\",\"kind\":\"collectionType\",\"info\":{\"name\":\"file\",\"description\":\"\"},\"options\":{\"timestamps\":[\"created_at\",\"updated_at\"]},\"attributes\":{\"name\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"alternativeText\":{\"type\":\"string\",\"configurable\":false},\"caption\":{\"type\":\"string\",\"configurable\":false},\"width\":{\"type\":\"integer\",\"configurable\":false},\"height\":{\"type\":\"integer\",\"configurable\":false},\"formats\":{\"type\":\"json\",\"configurable\":false},\"hash\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"ext\":{\"type\":\"string\",\"configurable\":false},\"mime\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"size\":{\"type\":\"decimal\",\"configurable\":false,\"required\":true},\"url\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"previewUrl\":{\"type\":\"string\",\"configurable\":false},\"provider\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"provider_metadata\":{\"type\":\"json\",\"configurable\":false},\"related\":{\"collection\":\"*\",\"filter\":\"field\",\"configurable\":false},\"created_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true},\"updated_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true}}}','object',NULL,NULL),(10,'plugin_users-permissions_grant','{\"email\":{\"enabled\":true,\"icon\":\"envelope\"},\"discord\":{\"enabled\":false,\"icon\":\"discord\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/discord/callback\",\"scope\":[\"identify\",\"email\"]},\"facebook\":{\"enabled\":false,\"icon\":\"facebook-square\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/facebook/callback\",\"scope\":[\"email\"]},\"google\":{\"enabled\":false,\"icon\":\"google\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/google/callback\",\"scope\":[\"email\"]},\"github\":{\"enabled\":false,\"icon\":\"github\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/github/callback\",\"scope\":[\"user\",\"user:email\"]},\"microsoft\":{\"enabled\":false,\"icon\":\"windows\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/microsoft/callback\",\"scope\":[\"user.read\"]},\"twitter\":{\"enabled\":false,\"icon\":\"twitter\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/twitter/callback\"},\"instagram\":{\"enabled\":false,\"icon\":\"instagram\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/instagram/callback\"},\"vk\":{\"enabled\":false,\"icon\":\"vk\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/vk/callback\",\"scope\":[\"email\"]},\"twitch\":{\"enabled\":false,\"icon\":\"twitch\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/twitch/callback\",\"scope\":[\"user:read:email\"]},\"linkedin\":{\"enabled\":false,\"icon\":\"linkedin\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/linkedin/callback\",\"scope\":[\"r_liteprofile\",\"r_emailaddress\"]},\"cognito\":{\"enabled\":false,\"icon\":\"aws\",\"key\":\"\",\"secret\":\"\",\"subdomain\":\"my.subdomain.com\",\"callback\":\"/auth/cognito/callback\",\"scope\":[\"email\",\"openid\",\"profile\"]}}','object','',''),(11,'plugin_upload_settings','{\"sizeOptimization\":true,\"responsiveDimensions\":true}','object','development',''),(12,'plugin_content_manager_configuration_content_types::strapi::permission','{\"uid\":\"strapi::permission\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"action\",\"defaultSortBy\":\"action\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"action\":{\"edit\":{\"label\":\"Action\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Action\",\"searchable\":true,\"sortable\":true}},\"subject\":{\"edit\":{\"label\":\"Subject\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Subject\",\"searchable\":true,\"sortable\":true}},\"fields\":{\"edit\":{\"label\":\"Fields\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Fields\",\"searchable\":false,\"sortable\":false}},\"conditions\":{\"edit\":{\"label\":\"Conditions\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Conditions\",\"searchable\":false,\"sortable\":false}},\"role\":{\"edit\":{\"label\":\"Role\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"Role\",\"searchable\":false,\"sortable\":false}},\"created_at\":{\"edit\":{\"label\":\"Created_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Created_at\",\"searchable\":true,\"sortable\":true}},\"updated_at\":{\"edit\":{\"label\":\"Updated_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Updated_at\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"action\",\"subject\",\"created_at\"],\"editRelations\":[\"role\"],\"edit\":[[{\"name\":\"action\",\"size\":6},{\"name\":\"subject\",\"size\":6}],[{\"name\":\"fields\",\"size\":12}],[{\"name\":\"conditions\",\"size\":12}]]}}','object','',''),(13,'plugin_content_manager_configuration_content_types::strapi::role','{\"uid\":\"strapi::role\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"name\",\"defaultSortBy\":\"name\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"name\":{\"edit\":{\"label\":\"Name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Name\",\"searchable\":true,\"sortable\":true}},\"code\":{\"edit\":{\"label\":\"Code\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Code\",\"searchable\":true,\"sortable\":true}},\"description\":{\"edit\":{\"label\":\"Description\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Description\",\"searchable\":true,\"sortable\":true}},\"users\":{\"edit\":{\"label\":\"Users\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"Users\",\"searchable\":false,\"sortable\":false}},\"permissions\":{\"edit\":{\"label\":\"Permissions\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"action\"},\"list\":{\"label\":\"Permissions\",\"searchable\":false,\"sortable\":false}},\"created_at\":{\"edit\":{\"label\":\"Created_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Created_at\",\"searchable\":true,\"sortable\":true}},\"updated_at\":{\"edit\":{\"label\":\"Updated_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Updated_at\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"name\",\"code\",\"description\"],\"editRelations\":[\"users\",\"permissions\"],\"edit\":[[{\"name\":\"name\",\"size\":6},{\"name\":\"code\",\"size\":6}],[{\"name\":\"description\",\"size\":6}]]}}','object','',''),(14,'plugin_content_manager_configuration_content_types::strapi::user','{\"uid\":\"strapi::user\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"firstname\",\"defaultSortBy\":\"firstname\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"firstname\":{\"edit\":{\"label\":\"Firstname\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Firstname\",\"searchable\":true,\"sortable\":true}},\"lastname\":{\"edit\":{\"label\":\"Lastname\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Lastname\",\"searchable\":true,\"sortable\":true}},\"username\":{\"edit\":{\"label\":\"Username\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Username\",\"searchable\":true,\"sortable\":true}},\"email\":{\"edit\":{\"label\":\"Email\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Email\",\"searchable\":true,\"sortable\":true}},\"password\":{\"edit\":{\"label\":\"Password\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Password\",\"searchable\":true,\"sortable\":true}},\"resetPasswordToken\":{\"edit\":{\"label\":\"ResetPasswordToken\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"ResetPasswordToken\",\"searchable\":true,\"sortable\":true}},\"registrationToken\":{\"edit\":{\"label\":\"RegistrationToken\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"RegistrationToken\",\"searchable\":true,\"sortable\":true}},\"isActive\":{\"edit\":{\"label\":\"IsActive\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"IsActive\",\"searchable\":true,\"sortable\":true}},\"roles\":{\"edit\":{\"label\":\"Roles\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"Roles\",\"searchable\":false,\"sortable\":false}},\"blocked\":{\"edit\":{\"label\":\"Blocked\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Blocked\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"firstname\",\"lastname\",\"username\"],\"editRelations\":[\"roles\"],\"edit\":[[{\"name\":\"firstname\",\"size\":6},{\"name\":\"lastname\",\"size\":6}],[{\"name\":\"username\",\"size\":6},{\"name\":\"email\",\"size\":6}],[{\"name\":\"password\",\"size\":6},{\"name\":\"resetPasswordToken\",\"size\":6}],[{\"name\":\"registrationToken\",\"size\":6},{\"name\":\"isActive\",\"size\":4}],[{\"name\":\"blocked\",\"size\":4}]]}}','object','',''),(15,'plugin_content_manager_configuration_content_types::plugins::users-permissions.permission','{\"uid\":\"plugins::users-permissions.permission\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"type\",\"defaultSortBy\":\"type\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"type\":{\"edit\":{\"label\":\"Type\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Type\",\"searchable\":true,\"sortable\":true}},\"controller\":{\"edit\":{\"label\":\"Controller\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Controller\",\"searchable\":true,\"sortable\":true}},\"action\":{\"edit\":{\"label\":\"Action\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Action\",\"searchable\":true,\"sortable\":true}},\"enabled\":{\"edit\":{\"label\":\"Enabled\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Enabled\",\"searchable\":true,\"sortable\":true}},\"policy\":{\"edit\":{\"label\":\"Policy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Policy\",\"searchable\":true,\"sortable\":true}},\"role\":{\"edit\":{\"label\":\"Role\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"Role\",\"searchable\":false,\"sortable\":false}}},\"layouts\":{\"list\":[\"id\",\"type\",\"controller\",\"action\"],\"editRelations\":[\"role\"],\"edit\":[[{\"name\":\"type\",\"size\":6},{\"name\":\"controller\",\"size\":6}],[{\"name\":\"action\",\"size\":6},{\"name\":\"enabled\",\"size\":4}],[{\"name\":\"policy\",\"size\":6}]]}}','object','',''),(16,'plugin_content_manager_configuration_content_types::plugins::users-permissions.role','{\"uid\":\"plugins::users-permissions.role\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"name\",\"defaultSortBy\":\"name\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"name\":{\"edit\":{\"label\":\"Name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Name\",\"searchable\":true,\"sortable\":true}},\"description\":{\"edit\":{\"label\":\"Description\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Description\",\"searchable\":true,\"sortable\":true}},\"type\":{\"edit\":{\"label\":\"Type\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Type\",\"searchable\":true,\"sortable\":true}},\"permissions\":{\"edit\":{\"label\":\"Permissions\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"type\"},\"list\":{\"label\":\"Permissions\",\"searchable\":false,\"sortable\":false}},\"users\":{\"edit\":{\"label\":\"Users\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"username\"},\"list\":{\"label\":\"Users\",\"searchable\":false,\"sortable\":false}}},\"layouts\":{\"list\":[\"id\",\"name\",\"description\",\"type\"],\"editRelations\":[\"permissions\",\"users\"],\"edit\":[[{\"name\":\"name\",\"size\":6},{\"name\":\"description\",\"size\":6}],[{\"name\":\"type\",\"size\":6}]]}}','object','',''),(17,'plugin_content_manager_configuration_content_types::plugins::upload.file','{\"uid\":\"plugins::upload.file\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"name\",\"defaultSortBy\":\"name\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"name\":{\"edit\":{\"label\":\"Name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Name\",\"searchable\":true,\"sortable\":true}},\"alternativeText\":{\"edit\":{\"label\":\"AlternativeText\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"AlternativeText\",\"searchable\":true,\"sortable\":true}},\"caption\":{\"edit\":{\"label\":\"Caption\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Caption\",\"searchable\":true,\"sortable\":true}},\"width\":{\"edit\":{\"label\":\"Width\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Width\",\"searchable\":true,\"sortable\":true}},\"height\":{\"edit\":{\"label\":\"Height\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Height\",\"searchable\":true,\"sortable\":true}},\"formats\":{\"edit\":{\"label\":\"Formats\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Formats\",\"searchable\":false,\"sortable\":false}},\"hash\":{\"edit\":{\"label\":\"Hash\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Hash\",\"searchable\":true,\"sortable\":true}},\"ext\":{\"edit\":{\"label\":\"Ext\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Ext\",\"searchable\":true,\"sortable\":true}},\"mime\":{\"edit\":{\"label\":\"Mime\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Mime\",\"searchable\":true,\"sortable\":true}},\"size\":{\"edit\":{\"label\":\"Size\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Size\",\"searchable\":true,\"sortable\":true}},\"url\":{\"edit\":{\"label\":\"Url\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Url\",\"searchable\":true,\"sortable\":true}},\"previewUrl\":{\"edit\":{\"label\":\"PreviewUrl\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"PreviewUrl\",\"searchable\":true,\"sortable\":true}},\"provider\":{\"edit\":{\"label\":\"Provider\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Provider\",\"searchable\":true,\"sortable\":true}},\"provider_metadata\":{\"edit\":{\"label\":\"Provider_metadata\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Provider_metadata\",\"searchable\":false,\"sortable\":false}},\"related\":{\"edit\":{\"label\":\"Related\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"id\"},\"list\":{\"label\":\"Related\",\"searchable\":false,\"sortable\":false}},\"created_at\":{\"edit\":{\"label\":\"Created_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Created_at\",\"searchable\":true,\"sortable\":true}},\"updated_at\":{\"edit\":{\"label\":\"Updated_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Updated_at\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"name\",\"alternativeText\",\"caption\"],\"editRelations\":[\"related\"],\"edit\":[[{\"name\":\"name\",\"size\":6},{\"name\":\"alternativeText\",\"size\":6}],[{\"name\":\"caption\",\"size\":6},{\"name\":\"width\",\"size\":4}],[{\"name\":\"height\",\"size\":4}],[{\"name\":\"formats\",\"size\":12}],[{\"name\":\"hash\",\"size\":6},{\"name\":\"ext\",\"size\":6}],[{\"name\":\"mime\",\"size\":6},{\"name\":\"size\",\"size\":4}],[{\"name\":\"url\",\"size\":6},{\"name\":\"previewUrl\",\"size\":6}],[{\"name\":\"provider\",\"size\":6}],[{\"name\":\"provider_metadata\",\"size\":12}]]}}','object','',''),(18,'plugin_content_manager_configuration_content_types::plugins::users-permissions.user','{\"uid\":\"plugins::users-permissions.user\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"username\",\"defaultSortBy\":\"username\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"username\":{\"edit\":{\"label\":\"Username\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Username\",\"searchable\":true,\"sortable\":true}},\"email\":{\"edit\":{\"label\":\"Email\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Email\",\"searchable\":true,\"sortable\":true}},\"provider\":{\"edit\":{\"label\":\"Provider\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Provider\",\"searchable\":true,\"sortable\":true}},\"password\":{\"edit\":{\"label\":\"Password\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Password\",\"searchable\":true,\"sortable\":true}},\"resetPasswordToken\":{\"edit\":{\"label\":\"ResetPasswordToken\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"ResetPasswordToken\",\"searchable\":true,\"sortable\":true}},\"confirmationToken\":{\"edit\":{\"label\":\"ConfirmationToken\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"ConfirmationToken\",\"searchable\":true,\"sortable\":true}},\"confirmed\":{\"edit\":{\"label\":\"Confirmed\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Confirmed\",\"searchable\":true,\"sortable\":true}},\"blocked\":{\"edit\":{\"label\":\"Blocked\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Blocked\",\"searchable\":true,\"sortable\":true}},\"role\":{\"edit\":{\"label\":\"Role\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"Role\",\"searchable\":false,\"sortable\":false}},\"created_at\":{\"edit\":{\"label\":\"Created_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Created_at\",\"searchable\":true,\"sortable\":true}},\"updated_at\":{\"edit\":{\"label\":\"Updated_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Updated_at\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"username\",\"email\",\"confirmed\"],\"edit\":[[{\"name\":\"username\",\"size\":6},{\"name\":\"email\",\"size\":6}],[{\"name\":\"password\",\"size\":6},{\"name\":\"confirmed\",\"size\":4}],[{\"name\":\"blocked\",\"size\":4}]],\"editRelations\":[\"role\"]}}','object','',''),(19,'plugin_users-permissions_email','{\"reset_password\":{\"display\":\"Email.template.reset_password\",\"icon\":\"sync\",\"options\":{\"from\":{\"name\":\"Administration Panel\",\"email\":\"no-reply@strapi.io\"},\"response_email\":\"\",\"object\":\"Reset password\",\"message\":\"<p>We heard that you lost your password. Sorry about that!</p>\\n\\n<p>But don’t worry! You can use the following link to reset your password:</p>\\n<p><%= URL %>?code=<%= TOKEN %></p>\\n\\n<p>Thanks.</p>\"}},\"email_confirmation\":{\"display\":\"Email.template.email_confirmation\",\"icon\":\"check-square\",\"options\":{\"from\":{\"name\":\"Administration Panel\",\"email\":\"no-reply@strapi.io\"},\"response_email\":\"\",\"object\":\"Account confirmation\",\"message\":\"<p>Thank you for registering!</p>\\n\\n<p>You have to confirm your email address. Please click on the link below.</p>\\n\\n<p><%= URL %>?confirmation=<%= CODE %></p>\\n\\n<p>Thanks.</p>\"}}}','object','',''),(20,'plugin_users-permissions_advanced','{\"unique_email\":true,\"allow_register\":true,\"email_confirmation\":false,\"email_reset_password\":null,\"email_confirmation_redirection\":null,\"default_role\":\"authenticated\"}','object','',''),(25,'model_def_application::test.test','{\"uid\":\"application::test.test\",\"collectionName\":\"tests\",\"kind\":\"collectionType\",\"info\":{\"name\":\"test\",\"description\":\"\"},\"options\":{\"increments\":true,\"timestamps\":[\"created_at\",\"updated_at\"],\"draftAndPublish\":false},\"attributes\":{\"test\":{\"type\":\"string\"},\"created_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true},\"updated_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true}}}','object',NULL,NULL),(27,'model_def_address.address','{\"uid\":\"address.address\",\"collectionName\":\"components_address_addresses\",\"info\":{\"name\":\"address\",\"icon\":\"home\",\"description\":\"\"},\"options\":{\"timestamps\":false},\"attributes\":{\"address_street\":{\"type\":\"string\",\"required\":true},\"address_city\":{\"type\":\"string\",\"required\":true},\"address_province\":{\"type\":\"string\"},\"address_country\":{\"type\":\"string\",\"required\":true},\"address_number\":{\"type\":\"integer\"},\"address_zipcode\":{\"type\":\"string\",\"required\":true}}}','object',NULL,NULL),(28,'plugin_content_manager_configuration_components::address.address','{\"uid\":\"address.address\",\"isComponent\":true,\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"address_street\",\"defaultSortBy\":\"address_street\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":false,\"sortable\":false}},\"address_street\":{\"edit\":{\"label\":\"Address_street\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Address_street\",\"searchable\":true,\"sortable\":true}},\"address_city\":{\"edit\":{\"label\":\"Address_city\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Address_city\",\"searchable\":true,\"sortable\":true}},\"address_province\":{\"edit\":{\"label\":\"Address_province\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Address_province\",\"searchable\":true,\"sortable\":true}},\"address_country\":{\"edit\":{\"label\":\"Address_country\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Address_country\",\"searchable\":true,\"sortable\":true}},\"address_number\":{\"edit\":{\"label\":\"Address_number\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Address_number\",\"searchable\":true,\"sortable\":true}},\"address_zipcode\":{\"edit\":{\"label\":\"Address_zipcode\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Address_zipcode\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"address_street\",\"address_city\",\"address_province\"],\"edit\":[[{\"name\":\"address_street\",\"size\":6},{\"name\":\"address_city\",\"size\":6}],[{\"name\":\"address_country\",\"size\":6}],[{\"name\":\"address_number\",\"size\":4},{\"name\":\"address_province\",\"size\":6}],[{\"name\":\"address_zipcode\",\"size\":6}]],\"editRelations\":[]}}','object','',''),(29,'model_def_phone.phonenumber','{\"uid\":\"phone.phonenumber\",\"collectionName\":\"components_phone_phonenumbers\",\"info\":{\"name\":\"Phonenumber\",\"icon\":\"phone\",\"description\":\"\"},\"options\":{\"timestamps\":false},\"attributes\":{\"phone_number\":{\"type\":\"string\",\"regex\":\"^(([+]|00)39)?(([03][1-9][0-9]))(\\\\d{7})$\"}}}','object',NULL,NULL),(30,'plugin_content_manager_configuration_components::phone.phonenumber','{\"uid\":\"phone.phonenumber\",\"isComponent\":true,\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"phone_number\",\"defaultSortBy\":\"phone_number\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":false,\"sortable\":false}},\"phone_number\":{\"edit\":{\"label\":\"Phone_number\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Phone_number\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"phone_number\"],\"edit\":[[{\"name\":\"phone_number\",\"size\":6}]],\"editRelations\":[]}}','object','',''),(31,'model_def_application::phisical-person.phisical-person','{\"uid\":\"application::phisical-person.phisical-person\",\"collectionName\":\"phisical_people\",\"kind\":\"collectionType\",\"info\":{\"name\":\"physical_person\",\"description\":\"\"},\"options\":{\"increments\":true,\"timestamps\":[\"created_at\",\"updated_at\"],\"draftAndPublish\":false},\"attributes\":{\"pp_name\":{\"type\":\"string\",\"required\":true},\"pp_surname\":{\"type\":\"string\",\"required\":true},\"pp_fiscalcode\":{\"type\":\"string\",\"required\":true},\"pp_contact_method\":{\"type\":\"component\",\"repeatable\":false,\"component\":\"recapiti.recapiti\"},\"pp_address\":{\"type\":\"component\",\"repeatable\":false,\"component\":\"address.address\"},\"created_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true},\"updated_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true}}}','object',NULL,NULL),(32,'plugin_content_manager_configuration_content_types::application::phisical-person.phisical-person','{\"uid\":\"application::phisical-person.phisical-person\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"pp_name\",\"defaultSortBy\":\"pp_surname\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"pp_name\":{\"edit\":{\"label\":\"Pp_name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Pp_name\",\"searchable\":true,\"sortable\":true}},\"pp_surname\":{\"edit\":{\"label\":\"Pp_surname\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Pp_surname\",\"searchable\":true,\"sortable\":true}},\"pp_fiscalcode\":{\"edit\":{\"label\":\"Pp_fiscalcode\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Pp_fiscalcode\",\"searchable\":true,\"sortable\":true}},\"pp_contact_method\":{\"edit\":{\"label\":\"Pp_contact_method\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Pp_contact_method\",\"searchable\":false,\"sortable\":false}},\"pp_address\":{\"edit\":{\"label\":\"Pp_address\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Pp_address\",\"searchable\":false,\"sortable\":false}},\"created_at\":{\"edit\":{\"label\":\"Created_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Created_at\",\"searchable\":true,\"sortable\":true}},\"updated_at\":{\"edit\":{\"label\":\"Updated_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Updated_at\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"pp_surname\",\"pp_name\",\"pp_fiscalcode\"],\"edit\":[[{\"name\":\"pp_name\",\"size\":6},{\"name\":\"pp_surname\",\"size\":6}],[{\"name\":\"pp_fiscalcode\",\"size\":6}],[{\"name\":\"pp_contact_method\",\"size\":12}],[{\"name\":\"pp_address\",\"size\":12}]],\"editRelations\":[]}}','object','',''),(33,'model_def_application::legal-person.legal-person','{\"uid\":\"application::legal-person.legal-person\",\"collectionName\":\"legal_people\",\"kind\":\"collectionType\",\"info\":{\"name\":\"Legal_person\",\"description\":\"\"},\"options\":{\"increments\":true,\"timestamps\":[\"created_at\",\"updated_at\"],\"draftAndPublish\":false},\"attributes\":{\"lp_name\":{\"type\":\"string\",\"required\":true},\"lp_contact_method\":{\"type\":\"component\",\"repeatable\":false,\"component\":\"recapiti.recapiti\"},\"lp_address\":{\"type\":\"component\",\"repeatable\":false,\"component\":\"address.address\"},\"lp_vatcode\":{\"type\":\"string\",\"required\":true},\"created_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true},\"updated_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true}}}','object',NULL,NULL),(34,'plugin_content_manager_configuration_content_types::application::legal-person.legal-person','{\"uid\":\"application::legal-person.legal-person\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"lp_name\",\"defaultSortBy\":\"lp_name\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"lp_name\":{\"edit\":{\"label\":\"Lp_name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Lp_name\",\"searchable\":true,\"sortable\":true}},\"lp_contact_method\":{\"edit\":{\"label\":\"Lp_contact_method\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Lp_contact_method\",\"searchable\":false,\"sortable\":false}},\"lp_address\":{\"edit\":{\"label\":\"Lp_address\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Lp_address\",\"searchable\":false,\"sortable\":false}},\"lp_vatcode\":{\"edit\":{\"label\":\"Lp_vatcode\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Lp_vatcode\",\"searchable\":true,\"sortable\":true}},\"created_at\":{\"edit\":{\"label\":\"Created_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Created_at\",\"searchable\":true,\"sortable\":true}},\"updated_at\":{\"edit\":{\"label\":\"Updated_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Updated_at\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"lp_name\",\"created_at\",\"updated_at\"],\"edit\":[[{\"name\":\"lp_name\",\"size\":6},{\"name\":\"lp_vatcode\",\"size\":6}],[{\"name\":\"lp_contact_method\",\"size\":12}],[{\"name\":\"lp_address\",\"size\":12}]],\"editRelations\":[]}}','object','',''),(35,'model_def_application::client.client','{\"uid\":\"application::client.client\",\"collectionName\":\"customers\",\"kind\":\"collectionType\",\"info\":{\"name\":\"Customer\",\"description\":\"\"},\"options\":{\"increments\":true,\"timestamps\":[\"created_at\",\"updated_at\"],\"draftAndPublish\":false},\"attributes\":{\"customer_name\":{\"type\":\"string\"},\"customer_customer\":{\"type\":\"dynamiczone\",\"components\":[\"customer.legal-person\",\"customer.physical-person\"],\"required\":true},\"customer_type\":{\"type\":\"enumeration\",\"enum\":[\"Fisico\",\"Giuridico\"]},\"customer_active\":{\"type\":\"boolean\",\"default\":true},\"created_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true},\"updated_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true}}}','object',NULL,NULL),(36,'plugin_content_manager_configuration_content_types::application::client.client','{\"uid\":\"application::client.client\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"id\",\"defaultSortBy\":\"id\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"customer_name\":{\"edit\":{\"label\":\"Customer_name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Customer_name\",\"searchable\":true,\"sortable\":true}},\"customer_customer\":{\"edit\":{\"label\":\"Customer_customer\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Customer_customer\",\"searchable\":false,\"sortable\":false}},\"customer_type\":{\"edit\":{\"label\":\"Customer_type\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Customer_type\",\"searchable\":true,\"sortable\":true}},\"customer_active\":{\"edit\":{\"label\":\"Customer_active\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Customer_active\",\"searchable\":true,\"sortable\":true}},\"created_at\":{\"edit\":{\"label\":\"Created_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Created_at\",\"searchable\":true,\"sortable\":true}},\"updated_at\":{\"edit\":{\"label\":\"Updated_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Updated_at\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"created_at\",\"updated_at\",\"customer_name\"],\"edit\":[[{\"name\":\"customer_name\",\"size\":6}],[{\"name\":\"customer_customer\",\"size\":12}],[{\"name\":\"customer_type\",\"size\":6},{\"name\":\"customer_active\",\"size\":4}]],\"editRelations\":[]}}','object','',''),(37,'model_def_recapiti.recapiti','{\"uid\":\"recapiti.recapiti\",\"collectionName\":\"components_recapiti_recapitis\",\"info\":{\"name\":\"Contact_Method\",\"icon\":\"address-card\",\"description\":\"\"},\"options\":{\"timestamps\":false},\"attributes\":{\"cnn_mobile\":{\"type\":\"component\",\"repeatable\":false,\"component\":\"phone.phonenumber\",\"required\":true},\"cnn_phone\":{\"type\":\"component\",\"repeatable\":false,\"component\":\"phone.phonenumber\"},\"cnn_fax\":{\"type\":\"component\",\"repeatable\":false,\"component\":\"phone.phonenumber\"},\"cnn_mail\":{\"type\":\"email\",\"required\":true},\"cnn_pec\":{\"type\":\"email\"}}}','object',NULL,NULL),(38,'plugin_content_manager_configuration_components::recapiti.recapiti','{\"uid\":\"recapiti.recapiti\",\"isComponent\":true,\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"id\",\"defaultSortBy\":\"id\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":false,\"sortable\":false}},\"cnn_mobile\":{\"edit\":{\"label\":\"Cnn_mobile\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Cnn_mobile\",\"searchable\":false,\"sortable\":false}},\"cnn_phone\":{\"edit\":{\"label\":\"Cnn_phone\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Cnn_phone\",\"searchable\":false,\"sortable\":false}},\"cnn_fax\":{\"edit\":{\"label\":\"Cnn_fax\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Cnn_fax\",\"searchable\":false,\"sortable\":false}},\"cnn_mail\":{\"edit\":{\"label\":\"Cnn_mail\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Cnn_mail\",\"searchable\":true,\"sortable\":true}},\"cnn_pec\":{\"edit\":{\"label\":\"Cnn_pec\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Cnn_pec\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"cnn_mail\",\"cnn_pec\"],\"edit\":[[{\"name\":\"cnn_mobile\",\"size\":12}],[{\"name\":\"cnn_phone\",\"size\":12}],[{\"name\":\"cnn_fax\",\"size\":12}],[{\"name\":\"cnn_mail\",\"size\":6},{\"name\":\"cnn_pec\",\"size\":6}]],\"editRelations\":[]}}','object','',''),(39,'model_def_customer.legal-person','{\"uid\":\"customer.legal-person\",\"collectionName\":\"components_customer_legal_people\",\"info\":{\"name\":\"Legal_person\",\"icon\":\"industry\"},\"options\":{\"timestamps\":false},\"attributes\":{\"legal_person\":{\"model\":\"legal-person\"}}}','object',NULL,NULL),(40,'plugin_content_manager_configuration_components::customer.legal-person','{\"uid\":\"customer.legal-person\",\"isComponent\":true,\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"id\",\"defaultSortBy\":\"id\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":false,\"sortable\":false}},\"legal_person\":{\"edit\":{\"label\":\"Legal_person\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"lp_name\"},\"list\":{\"label\":\"Legal_person\",\"searchable\":false,\"sortable\":false}}},\"layouts\":{\"list\":[\"id\"],\"edit\":[[{\"name\":\"legal_person\",\"size\":6}]],\"editRelations\":[]}}','object','',''),(41,'model_def_customer.physical-person','{\"uid\":\"customer.physical-person\",\"collectionName\":\"components_customer_physical_people\",\"info\":{\"name\":\"Physical_person\",\"icon\":\"hand-paper\"},\"options\":{\"timestamps\":false},\"attributes\":{\"physical_person\":{\"model\":\"phisical-person\"}}}','object',NULL,NULL),(42,'plugin_content_manager_configuration_components::customer.physical-person','{\"uid\":\"customer.physical-person\",\"isComponent\":true,\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"id\",\"defaultSortBy\":\"id\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":false,\"sortable\":false}},\"physical_person\":{\"edit\":{\"label\":\"Physical_person\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"pp_name\"},\"list\":{\"label\":\"Physical_person\",\"searchable\":false,\"sortable\":false}}},\"layouts\":{\"list\":[\"id\"],\"edit\":[[{\"name\":\"physical_person\",\"size\":6}]],\"editRelations\":[]}}','object','',''),(43,'model_def_application::address.address','{\"uid\":\"application::address.address\",\"collectionName\":\"addresses\",\"kind\":\"collectionType\",\"info\":{\"name\":\"Address\",\"description\":\"\"},\"options\":{\"increments\":true,\"timestamps\":[\"created_at\",\"updated_at\"],\"draftAndPublish\":false},\"attributes\":{\"address_street\":{\"type\":\"string\",\"required\":true},\"address_number\":{\"type\":\"integer\"},\"address_city\":{\"type\":\"string\",\"required\":true},\"address_province\":{\"type\":\"string\"},\"address_country\":{\"type\":\"string\",\"required\":true},\"address_zipcode\":{\"type\":\"string\",\"required\":true},\"created_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true},\"updated_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true}}}','object',NULL,NULL);
/*!40000 ALTER TABLE `core_store` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(255) DEFAULT NULL,
  `customer_type` varchar(255) DEFAULT NULL,
  `customer_active` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'Sofia','Fisico',1,1,1,'2020-11-21 12:17:00','2020-12-01 17:46:15'),(2,'eduteam','Giuridico',1,1,1,'2020-11-21 12:28:24','2020-12-03 12:47:49'),(3,'emanuele','Fisico',1,1,1,'2020-11-21 12:28:40','2020-11-21 14:58:01'),(14,'aaaa','Fisico',1,NULL,1,'2020-11-27 15:09:39','2020-11-27 15:39:12'),(16,'zzzb','Fisico',1,NULL,1,'2020-11-27 15:36:21','2020-11-27 15:39:25'),(17,'zzzc','Fisico',1,NULL,NULL,'2020-11-27 15:37:58','2020-11-27 15:37:58'),(18,'zzzd','Fisico',1,NULL,NULL,'2020-11-27 15:47:14','2020-11-27 15:47:14'),(19,'marmottina','Fisico',1,NULL,NULL,'2020-11-27 17:37:39','2020-11-27 17:37:39'),(20,'testA','Fisico',1,NULL,NULL,'2020-11-27 17:44:19','2020-11-27 17:44:19'),(21,'testA','Fisico',1,NULL,NULL,'2020-11-27 17:44:28','2020-11-27 17:44:28'),(22,'testA','Fisico',1,NULL,NULL,'2020-11-27 17:44:31','2020-11-27 17:44:31'),(23,'testA','Fisico',1,NULL,NULL,'2020-11-27 17:44:33','2020-11-27 17:44:33'),(24,'testA','Fisico',1,NULL,NULL,'2020-11-27 17:44:34','2020-11-27 17:44:34'),(25,'aaa','Fisico',1,NULL,NULL,'2020-11-27 17:51:33','2020-11-27 17:51:33'),(26,'aaa','Fisico',1,NULL,NULL,'2020-11-27 17:56:27','2020-11-27 17:56:27'),(27,'a','Fisico',1,NULL,NULL,'2020-11-27 17:58:52','2020-11-27 17:58:52'),(28,'a','Fisico',1,NULL,NULL,'2020-11-27 18:03:37','2020-11-27 18:03:37'),(29,'a','Fisico',1,NULL,NULL,'2020-11-27 18:06:00','2020-11-27 18:06:00'),(30,'a','Fisico',1,NULL,NULL,'2020-11-27 18:09:13','2020-11-27 18:09:13'),(31,'a','Fisico',1,NULL,NULL,'2020-11-27 18:11:30','2020-11-27 18:11:30'),(32,'a','Fisico',1,NULL,NULL,'2020-11-27 18:17:08','2020-11-27 18:17:08'),(33,'a','Fisico',1,NULL,NULL,'2020-11-27 18:18:47','2020-11-27 18:18:47'),(34,'a','Fisico',1,NULL,NULL,'2020-11-27 18:21:29','2020-11-27 18:21:29'),(35,'a','Fisico',1,NULL,NULL,'2020-11-27 18:23:24','2020-11-27 18:23:24'),(36,'a','Fisico',1,NULL,NULL,'2020-11-27 18:24:54','2020-11-27 18:24:54'),(37,'a','Fisico',1,NULL,NULL,'2020-11-27 18:26:17','2020-11-27 18:26:17'),(38,'supermarmottina','Fisico',1,NULL,NULL,'2020-11-27 18:28:26','2020-11-27 18:28:26'),(39,'testPostLegal','Fisico',1,NULL,NULL,'2020-11-28 08:39:26','2020-11-28 08:39:26'),(40,'testNewRules','Fisico',1,NULL,NULL,'2020-11-28 08:53:02','2020-11-28 08:53:02'),(41,'testnewendpoint','Fisico',1,NULL,NULL,'2020-11-28 08:57:35','2020-11-28 08:57:35'),(42,'Eduteam s.r.l.','Giuridico',1,NULL,NULL,'2020-11-28 13:16:22','2020-11-28 13:16:22'),(43,'test-persona1234giuridica s.r.l.','Giuridico',1,NULL,NULL,'2020-11-28 15:45:49','2020-11-28 15:45:49'),(44,'testinterfaccia','Giuridico',1,NULL,NULL,'2020-11-28 15:58:03','2020-11-28 15:58:03'),(45,'test marmottina srl','Giuridico',1,NULL,NULL,'2020-11-28 16:00:27','2020-11-28 16:00:27'),(46,'testSingleFile','Fisico',1,NULL,NULL,'2020-11-30 16:12:53','2020-11-30 16:12:53'),(47,'singlefile','Giuridico',1,NULL,NULL,'2020-11-30 16:13:23','2020-11-30 16:13:23'),(48,'testaaabbbccc','Fisico',1,NULL,NULL,'2020-11-30 16:32:12','2020-11-30 16:32:12'),(49,'testaaabbbccc','Giuridico',1,NULL,NULL,'2020-11-30 16:32:46','2020-11-30 16:32:46'),(50,'testSantoNuovo','Fisico',1,NULL,NULL,'2020-11-30 16:34:47','2020-12-01 10:16:52'),(51,'testID','Fisico',1,NULL,NULL,'2020-11-30 20:25:24','2020-11-30 20:25:24'),(52,'testIDA','Fisico',1,NULL,NULL,'2020-11-30 20:25:51','2020-11-30 20:25:51'),(53,'nuova barra1','Fisico',1,NULL,NULL,'2020-12-02 15:26:18','2020-12-02 15:26:39'),(54,'test nuova barra 2','Giuridico',1,NULL,NULL,'2020-12-02 15:29:36','2020-12-02 15:29:36');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers_components`
--

DROP TABLE IF EXISTS `customers_components`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customers_components` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `field` varchar(255) NOT NULL,
  `order` int(10) unsigned NOT NULL,
  `component_type` varchar(255) NOT NULL,
  `component_id` int(11) NOT NULL,
  `customer_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_id_fk` (`customer_id`),
  CONSTRAINT `customer_id_fk` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers_components`
--

LOCK TABLES `customers_components` WRITE;
/*!40000 ALTER TABLE `customers_components` DISABLE KEYS */;
INSERT INTO `customers_components` VALUES (1,'customer_customer',1,'components_customer_physical_people',3,1),(2,'customer_customer',1,'components_customer_legal_people',2,2),(3,'customer_customer',2,'components_customer_physical_people',4,2),(4,'customer_customer',1,'components_customer_physical_people',5,3),(9,'customer_customer',1,'components_customer_physical_people',16,14),(10,'customer_customer',1,'components_customer_physical_people',18,16),(11,'customer_customer',1,'components_customer_physical_people',19,17),(12,'customer_customer',1,'components_customer_physical_people',20,18),(13,'customer_customer',1,'components_customer_physical_people',21,19),(14,'customer_customer',1,'components_customer_physical_people',22,20),(15,'customer_customer',1,'components_customer_physical_people',23,21),(16,'customer_customer',1,'components_customer_physical_people',24,22),(17,'customer_customer',1,'components_customer_physical_people',25,23),(18,'customer_customer',1,'components_customer_physical_people',26,24),(19,'customer_customer',1,'components_customer_physical_people',27,25),(20,'customer_customer',1,'components_customer_physical_people',28,26),(21,'customer_customer',1,'components_customer_physical_people',29,27),(22,'customer_customer',1,'components_customer_physical_people',30,28),(23,'customer_customer',1,'components_customer_physical_people',31,29),(24,'customer_customer',1,'components_customer_physical_people',32,30),(25,'customer_customer',1,'components_customer_physical_people',33,31),(26,'customer_customer',1,'components_customer_physical_people',34,32),(27,'customer_customer',1,'components_customer_physical_people',35,33),(28,'customer_customer',1,'components_customer_physical_people',36,34),(29,'customer_customer',1,'components_customer_physical_people',37,35),(30,'customer_customer',1,'components_customer_physical_people',38,36),(31,'customer_customer',1,'components_customer_physical_people',39,37),(32,'customer_customer',1,'components_customer_physical_people',40,38),(33,'customer_customer',1,'components_customer_physical_people',41,39),(34,'customer_customer',1,'components_customer_physical_people',42,40),(35,'customer_customer',1,'components_customer_physical_people',43,41),(36,'customer_customer',1,'components_customer_legal_people',3,42),(37,'customer_customer',1,'components_customer_legal_people',4,43),(38,'customer_customer',1,'components_customer_legal_people',5,44),(39,'customer_customer',1,'components_customer_legal_people',6,45),(40,'customer_customer',1,'components_customer_physical_people',44,46),(41,'customer_customer',1,'components_customer_legal_people',7,47),(42,'customer_customer',1,'components_customer_physical_people',45,48),(43,'customer_customer',1,'components_customer_legal_people',8,49),(44,'customer_customer',1,'components_customer_physical_people',46,50),(45,'customer_customer',1,'components_customer_physical_people',47,51),(46,'customer_customer',1,'components_customer_physical_people',48,52),(47,'customer_customer',1,'components_customer_physical_people',49,53),(48,'customer_customer',1,'components_customer_legal_people',9,54),(49,'customer_customer',3,'components_customer_physical_people',50,2),(50,'customer_customer',4,'components_customer_physical_people',51,2),(51,'customer_customer',5,'components_customer_physical_people',52,2);
/*!40000 ALTER TABLE `customers_components` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `legal_people`
--

DROP TABLE IF EXISTS `legal_people`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `legal_people` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `lp_name` varchar(255) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `lp_vatcode` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `legal_people`
--

LOCK TABLES `legal_people` WRITE;
/*!40000 ALTER TABLE `legal_people` DISABLE KEYS */;
INSERT INTO `legal_people` VALUES (3,'eduteam',1,1,'2020-11-21 12:05:39','2020-11-21 15:15:37','12345'),(4,'studio prisco & partners',1,1,'2020-11-21 12:09:20','2020-11-21 15:15:45','09876'),(5,'Eduteam s.r.l.',NULL,NULL,'2020-11-28 13:16:22','2020-11-28 13:16:22','11111111111'),(6,'test-persona1234giuridica s.r.l.',NULL,NULL,'2020-11-28 15:45:49','2020-11-28 15:45:49','11111111111'),(7,'testinterfaccia',NULL,NULL,'2020-11-28 15:58:03','2020-11-28 15:58:03','11111111111'),(8,'test marmottina srl',NULL,NULL,'2020-11-28 16:00:26','2020-11-28 16:00:26','11111111111'),(9,'singlefile',NULL,NULL,'2020-11-30 16:13:23','2020-11-30 16:13:23','00000000000'),(10,'testaaabbbccc',NULL,NULL,'2020-11-30 16:32:46','2020-11-30 16:32:46','11111111111'),(11,'test nuova barra 2',NULL,NULL,'2020-12-02 15:29:35','2020-12-02 15:29:35','11111111111');
/*!40000 ALTER TABLE `legal_people` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `legal_people__addresses`
--

DROP TABLE IF EXISTS `legal_people__addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `legal_people__addresses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `legal_person_id` int(11) DEFAULT NULL,
  `address_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `legal_people__addresses`
--

LOCK TABLES `legal_people__addresses` WRITE;
/*!40000 ALTER TABLE `legal_people__addresses` DISABLE KEYS */;
INSERT INTO `legal_people__addresses` VALUES (1,3,2),(2,4,3);
/*!40000 ALTER TABLE `legal_people__addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `legal_people_components`
--

DROP TABLE IF EXISTS `legal_people_components`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `legal_people_components` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `field` varchar(255) NOT NULL,
  `order` int(10) unsigned NOT NULL,
  `component_type` varchar(255) NOT NULL,
  `component_id` int(11) NOT NULL,
  `legal_person_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `legal_person_id_fk` (`legal_person_id`),
  CONSTRAINT `legal_person_id_fk` FOREIGN KEY (`legal_person_id`) REFERENCES `legal_people` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `legal_people_components`
--

LOCK TABLES `legal_people_components` WRITE;
/*!40000 ALTER TABLE `legal_people_components` DISABLE KEYS */;
INSERT INTO `legal_people_components` VALUES (1,'lp_contact_method',1,'components_recapiti_recapitis',3,3),(2,'lp_contact_method',1,'components_recapiti_recapitis',4,4),(3,'lp_address',1,'components_address_addresses',3,3),(4,'lp_address',1,'components_address_addresses',4,4),(5,'lp_contact_method',1,'components_recapiti_recapitis',37,7),(6,'lp_address',1,'components_address_addresses',39,7),(7,'lp_contact_method',1,'components_recapiti_recapitis',38,8),(8,'lp_address',1,'components_address_addresses',40,8),(9,'lp_contact_method',1,'components_recapiti_recapitis',40,9),(10,'lp_address',1,'components_address_addresses',42,9),(11,'lp_contact_method',1,'components_recapiti_recapitis',42,10),(12,'lp_address',1,'components_address_addresses',44,10),(13,'lp_contact_method',1,'components_recapiti_recapitis',53,11),(14,'lp_address',1,'components_address_addresses',55,11),(15,'lp_contact_method',1,'components_recapiti_recapitis',54,5),(16,'lp_address',1,'components_address_addresses',56,5);
/*!40000 ALTER TABLE `legal_people_components` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phisical_people`
--

DROP TABLE IF EXISTS `phisical_people`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `phisical_people` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `pp_name` varchar(255) DEFAULT NULL,
  `pp_surname` varchar(255) DEFAULT NULL,
  `pp_fiscalcode` varchar(255) DEFAULT NULL,
  `pp_email` varchar(255) DEFAULT NULL,
  `pp_pec` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phisical_people`
--

LOCK TABLES `phisical_people` WRITE;
/*!40000 ALTER TABLE `phisical_people` DISABLE KEYS */;
INSERT INTO `phisical_people` VALUES (4,1,1,'2020-11-21 12:01:32','2020-12-01 10:16:23','emanuele','sardini','srdmnl88e11c111f',NULL,NULL),(5,1,1,'2020-11-21 12:04:39','2020-12-01 17:46:14','Sofia','Monici','mncsfo90a12a123a',NULL,NULL),(6,NULL,NULL,'2020-11-27 10:51:39','2020-11-27 10:51:39','emanuele_debug','sardini_debug','srdmnl88e11c111f',NULL,NULL),(7,NULL,NULL,'2020-11-27 11:22:10','2020-11-27 11:22:10','emanuele_debug','sardini_debug','srdmnl88e11c111f',NULL,NULL),(8,NULL,NULL,'2020-11-27 11:24:01','2020-11-27 11:24:01','a','vvvv','srdmnl88e02c312f',NULL,NULL),(9,NULL,NULL,'2020-11-27 15:22:56','2020-11-27 15:22:56','a','vvvv','srdmnl88e02c312f',NULL,NULL),(10,NULL,NULL,'2020-11-27 15:23:20','2020-11-27 15:23:20','aaaadv','vvvv','srdmnl88e02c312f',NULL,NULL),(11,NULL,NULL,'2020-11-27 15:25:31','2020-11-27 15:25:31','bbb','bbb','srdmnl88e02c312f',NULL,NULL),(12,NULL,NULL,'2020-11-27 15:31:52','2020-11-27 15:31:52','zzzzzz','vvvv','srdmnl88e02c312f',NULL,NULL),(13,NULL,NULL,'2020-11-27 15:34:31','2020-11-27 15:34:31','zzza','zzza','srdmnl88e02c312f',NULL,NULL),(14,NULL,NULL,'2020-11-27 15:36:10','2020-11-27 15:36:10','zzzb','zzzb','srdmnl88e02c312f',NULL,NULL),(15,NULL,NULL,'2020-11-27 15:37:55','2020-11-27 15:37:55','zzzc','zzzc','srdmnl88e02c312f',NULL,NULL),(16,NULL,NULL,'2020-11-27 15:47:09','2020-11-27 15:47:09','zzzd','zzzd','zzzccc00c02q123v',NULL,NULL),(17,NULL,NULL,'2020-11-27 17:37:39','2020-11-27 17:37:39','marmottina','inaina','mmmina00a01c133a',NULL,NULL),(18,NULL,NULL,'2020-11-27 17:44:19','2020-11-27 17:44:19','testA','testA','srdmnl88e02c312f',NULL,NULL),(19,NULL,NULL,'2020-11-27 17:44:28','2020-11-27 17:44:28','testA','testA','srdmnl88e02c312f',NULL,NULL),(20,NULL,NULL,'2020-11-27 17:44:31','2020-11-27 17:44:31','testA','testA','srdmnl88e02c312f',NULL,NULL),(21,NULL,NULL,'2020-11-27 17:44:32','2020-11-27 17:44:32','testA','testA','srdmnl88e02c312f',NULL,NULL),(22,NULL,NULL,'2020-11-27 17:44:33','2020-11-27 17:44:33','testA','testA','srdmnl88e02c312f',NULL,NULL),(23,NULL,NULL,'2020-11-27 17:51:32','2020-11-27 17:51:32','aaa','aaa','aaaaaa22a11a121a',NULL,NULL),(24,NULL,NULL,'2020-11-27 17:56:26','2020-11-27 17:56:26','aaa','a','aaaaaa00a00a000a',NULL,NULL),(25,NULL,NULL,'2020-11-27 17:58:51','2020-11-27 17:58:51','a','a','aaaaaa00a00a000a',NULL,NULL),(26,NULL,NULL,'2020-11-27 18:03:37','2020-11-27 18:03:37','a','a','aaaaaa00a00a111a',NULL,NULL),(27,NULL,NULL,'2020-11-27 18:06:00','2020-11-27 18:06:00','a','a','aaaaaa11a11a111a',NULL,NULL),(28,NULL,NULL,'2020-11-27 18:09:03','2020-11-27 18:09:03','a','a','aaaaaa00a00a000a',NULL,NULL),(29,NULL,NULL,'2020-11-27 18:11:30','2020-11-27 18:11:30','a','a','aaaaaa00a00a000a',NULL,NULL),(30,NULL,NULL,'2020-11-27 18:17:08','2020-11-27 18:17:08','a','a','aaaaaa00a00a000a',NULL,NULL),(31,NULL,NULL,'2020-11-27 18:18:47','2020-11-27 18:18:47','a','a','aaaaaa00a00a000a',NULL,NULL),(32,NULL,NULL,'2020-11-27 18:21:28','2020-11-27 18:21:28','a','a','aaaaaa00a00a000a',NULL,NULL),(33,NULL,NULL,'2020-11-27 18:23:24','2020-11-27 18:23:24','a','a','aaaaaa00a00a000a',NULL,NULL),(34,NULL,NULL,'2020-11-27 18:24:53','2020-11-27 18:24:53','a','a','aaaaaa00a00a000a',NULL,NULL),(35,NULL,NULL,'2020-11-27 18:26:16','2020-11-27 18:26:16','a','a','aaaaaa00a00a000a',NULL,NULL),(36,NULL,NULL,'2020-11-27 18:28:26','2020-11-27 18:28:26','supermarmottina','nananana','aaaaaa00a00a000a',NULL,NULL),(37,NULL,NULL,'2020-11-28 08:39:26','2020-11-28 08:39:26','testPostLegal','test','aaaaaa11a11a111a',NULL,NULL),(38,NULL,NULL,'2020-11-28 08:53:02','2020-11-28 08:53:02','testNewRules','test','aaaaaa11a11a111a',NULL,NULL),(39,NULL,NULL,'2020-11-28 08:57:35','2020-11-28 08:57:35','testnewendpoint','test','aaaaaa11a11a111a',NULL,NULL),(40,NULL,NULL,'2020-11-30 16:12:52','2020-11-30 16:12:52','testSingleFile','vvvv','srdmnl88e02c312f',NULL,NULL),(41,NULL,NULL,'2020-11-30 16:32:11','2020-11-30 16:32:11','testaaabbbccc','testaaabbbccc','srdmnl88e02c312f',NULL,NULL),(42,NULL,NULL,'2020-11-30 16:34:47','2020-12-01 10:16:51','testSantoNuovo','testSantoprova','srdmnl88e02c312f',NULL,NULL),(43,NULL,NULL,'2020-11-30 20:25:24','2020-11-30 20:25:24','testID','testID','aaaaaa11a11a111a',NULL,NULL),(44,NULL,NULL,'2020-11-30 20:25:51','2020-11-30 20:25:51','testIDA','testIDA','aaaaaa11a11a111a',NULL,NULL),(45,NULL,NULL,'2020-12-02 15:26:18','2020-12-02 15:26:39','nuova barra1','barra barra','aaaaaa00a00a000a',NULL,NULL);
/*!40000 ALTER TABLE `phisical_people` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phisical_people__addresses`
--

DROP TABLE IF EXISTS `phisical_people__addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `phisical_people__addresses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `phisical_person_id` int(11) DEFAULT NULL,
  `address_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phisical_people__addresses`
--

LOCK TABLES `phisical_people__addresses` WRITE;
/*!40000 ALTER TABLE `phisical_people__addresses` DISABLE KEYS */;
INSERT INTO `phisical_people__addresses` VALUES (1,4,1),(2,5,1);
/*!40000 ALTER TABLE `phisical_people__addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phisical_people_components`
--

DROP TABLE IF EXISTS `phisical_people_components`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `phisical_people_components` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `field` varchar(255) NOT NULL,
  `order` int(10) unsigned NOT NULL,
  `component_type` varchar(255) NOT NULL,
  `component_id` int(11) NOT NULL,
  `phisical_person_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `phisical_person_id_fk` (`phisical_person_id`),
  CONSTRAINT `phisical_person_id_fk` FOREIGN KEY (`phisical_person_id`) REFERENCES `phisical_people` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phisical_people_components`
--

LOCK TABLES `phisical_people_components` WRITE;
/*!40000 ALTER TABLE `phisical_people_components` DISABLE KEYS */;
INSERT INTO `phisical_people_components` VALUES (13,'pp_contact_method',1,'components_recapiti_recapitis',5,8),(14,'pp_address',1,'components_address_addresses',7,8),(15,'pp_contact_method',1,'components_recapiti_recapitis',6,9),(16,'pp_address',1,'components_address_addresses',8,9),(17,'pp_contact_method',1,'components_recapiti_recapitis',7,10),(18,'pp_address',1,'components_address_addresses',9,10),(19,'pp_contact_method',1,'components_recapiti_recapitis',8,11),(20,'pp_address',1,'components_address_addresses',10,11),(21,'pp_contact_method',1,'components_recapiti_recapitis',9,12),(22,'pp_address',1,'components_address_addresses',11,12),(23,'pp_contact_method',1,'components_recapiti_recapitis',10,13),(24,'pp_address',1,'components_address_addresses',12,13),(25,'pp_contact_method',1,'components_recapiti_recapitis',11,14),(26,'pp_address',1,'components_address_addresses',13,14),(27,'pp_contact_method',1,'components_recapiti_recapitis',12,15),(28,'pp_address',1,'components_address_addresses',14,15),(29,'pp_contact_method',1,'components_recapiti_recapitis',13,16),(30,'pp_address',1,'components_address_addresses',15,16),(31,'pp_contact_method',1,'components_recapiti_recapitis',14,17),(32,'pp_address',1,'components_address_addresses',16,17),(33,'pp_contact_method',1,'components_recapiti_recapitis',15,18),(34,'pp_address',1,'components_address_addresses',17,18),(35,'pp_contact_method',1,'components_recapiti_recapitis',16,19),(36,'pp_address',1,'components_address_addresses',18,19),(37,'pp_contact_method',1,'components_recapiti_recapitis',17,20),(38,'pp_address',1,'components_address_addresses',19,20),(39,'pp_contact_method',1,'components_recapiti_recapitis',18,21),(40,'pp_address',1,'components_address_addresses',20,21),(41,'pp_contact_method',1,'components_recapiti_recapitis',19,22),(42,'pp_address',1,'components_address_addresses',21,22),(43,'pp_contact_method',1,'components_recapiti_recapitis',20,23),(44,'pp_address',1,'components_address_addresses',22,23),(45,'pp_contact_method',1,'components_recapiti_recapitis',21,24),(46,'pp_address',1,'components_address_addresses',23,24),(47,'pp_contact_method',1,'components_recapiti_recapitis',22,25),(48,'pp_address',1,'components_address_addresses',24,25),(49,'pp_contact_method',1,'components_recapiti_recapitis',23,26),(50,'pp_address',1,'components_address_addresses',25,26),(51,'pp_contact_method',1,'components_recapiti_recapitis',24,27),(52,'pp_address',1,'components_address_addresses',26,27),(53,'pp_contact_method',1,'components_recapiti_recapitis',25,28),(54,'pp_address',1,'components_address_addresses',27,28),(55,'pp_contact_method',1,'components_recapiti_recapitis',26,29),(56,'pp_address',1,'components_address_addresses',28,29),(57,'pp_contact_method',1,'components_recapiti_recapitis',27,30),(58,'pp_address',1,'components_address_addresses',29,30),(59,'pp_contact_method',1,'components_recapiti_recapitis',28,31),(60,'pp_address',1,'components_address_addresses',30,31),(61,'pp_contact_method',1,'components_recapiti_recapitis',29,32),(62,'pp_address',1,'components_address_addresses',31,32),(63,'pp_contact_method',1,'components_recapiti_recapitis',30,33),(64,'pp_address',1,'components_address_addresses',32,33),(65,'pp_contact_method',1,'components_recapiti_recapitis',31,34),(66,'pp_address',1,'components_address_addresses',33,34),(67,'pp_contact_method',1,'components_recapiti_recapitis',32,35),(68,'pp_address',1,'components_address_addresses',34,35),(69,'pp_contact_method',1,'components_recapiti_recapitis',33,36),(70,'pp_address',1,'components_address_addresses',35,36),(71,'pp_contact_method',1,'components_recapiti_recapitis',34,37),(72,'pp_address',1,'components_address_addresses',36,37),(73,'pp_contact_method',1,'components_recapiti_recapitis',35,38),(74,'pp_address',1,'components_address_addresses',37,38),(75,'pp_contact_method',1,'components_recapiti_recapitis',36,39),(76,'pp_address',1,'components_address_addresses',38,39),(77,'pp_contact_method',1,'components_recapiti_recapitis',39,40),(78,'pp_address',1,'components_address_addresses',41,40),(79,'pp_contact_method',1,'components_recapiti_recapitis',41,41),(80,'pp_address',1,'components_address_addresses',43,41),(83,'pp_contact_method',1,'components_recapiti_recapitis',44,43),(84,'pp_address',1,'components_address_addresses',46,43),(85,'pp_contact_method',1,'components_recapiti_recapitis',45,44),(86,'pp_address',1,'components_address_addresses',47,44),(89,'pp_contact_method',1,'components_recapiti_recapitis',47,4),(90,'pp_address',1,'components_address_addresses',49,4),(91,'pp_contact_method',1,'components_recapiti_recapitis',48,42),(92,'pp_address',1,'components_address_addresses',50,42),(95,'pp_contact_method',1,'components_recapiti_recapitis',50,5),(96,'pp_address',1,'components_address_addresses',52,5),(99,'pp_contact_method',1,'components_recapiti_recapitis',52,45),(100,'pp_address',1,'components_address_addresses',54,45);
/*!40000 ALTER TABLE `phisical_people_components` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `strapi_administrator`
--

DROP TABLE IF EXISTS `strapi_administrator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `strapi_administrator` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `resetPasswordToken` varchar(255) DEFAULT NULL,
  `registrationToken` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT NULL,
  `blocked` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `strapi_administrator_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `strapi_administrator`
--

LOCK TABLES `strapi_administrator` WRITE;
/*!40000 ALTER TABLE `strapi_administrator` DISABLE KEYS */;
INSERT INTO `strapi_administrator` VALUES (1,'Emanuele','Sardini',NULL,'emanuele.sardini@gmail.com','$2a$10$Mu3dyarB3a4r9l86G1cRCu58d/N/0ofe/mWMqpemEN2ryuOmZSnhC',NULL,NULL,1,NULL);
/*!40000 ALTER TABLE `strapi_administrator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `strapi_permission`
--

DROP TABLE IF EXISTS `strapi_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `strapi_permission` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `action` varchar(255) NOT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `fields` longtext DEFAULT NULL,
  `conditions` longtext DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=134 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `strapi_permission`
--

LOCK TABLES `strapi_permission` WRITE;
/*!40000 ALTER TABLE `strapi_permission` DISABLE KEYS */;
INSERT INTO `strapi_permission` VALUES (1,'plugins::upload.read',NULL,NULL,'[]',2,'2020-10-09 14:06:08','2020-10-09 14:06:08'),(2,'plugins::upload.assets.create',NULL,NULL,'[]',2,'2020-10-09 14:06:08','2020-10-09 14:06:08'),(3,'plugins::upload.assets.update',NULL,NULL,'[]',2,'2020-10-09 14:06:08','2020-10-09 14:06:08'),(4,'plugins::upload.assets.download',NULL,NULL,'[]',2,'2020-10-09 14:06:08','2020-10-09 14:06:08'),(5,'plugins::upload.assets.copy-link',NULL,NULL,'[]',2,'2020-10-09 14:06:08','2020-10-09 14:06:08'),(6,'plugins::upload.read',NULL,NULL,'[\"admin::is-creator\"]',3,'2020-10-09 14:06:08','2020-10-09 14:06:08'),(7,'plugins::upload.assets.create',NULL,NULL,'[]',3,'2020-10-09 14:06:08','2020-10-09 14:06:08'),(8,'plugins::upload.assets.update',NULL,NULL,'[\"admin::is-creator\"]',3,'2020-10-09 14:06:08','2020-10-09 14:06:08'),(9,'plugins::upload.assets.download',NULL,NULL,'[]',3,'2020-10-09 14:06:08','2020-10-09 14:06:08'),(10,'plugins::upload.assets.copy-link',NULL,NULL,'[]',3,'2020-10-09 14:06:08','2020-10-09 14:06:08'),(14,'plugins::content-manager.explorer.delete','plugins::users-permissions.user',NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(15,'plugins::content-type-builder.read',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(16,'plugins::upload.read',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(17,'plugins::upload.assets.create',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(18,'plugins::upload.assets.update',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(19,'plugins::upload.assets.download',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(20,'plugins::upload.assets.copy-link',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(21,'plugins::upload.settings.read',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(22,'plugins::content-manager.single-types.configure-view',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(23,'plugins::content-manager.collection-types.configure-view',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(24,'plugins::content-manager.components.configure-layout',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(25,'plugins::users-permissions.roles.create',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(26,'plugins::users-permissions.roles.read',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(27,'plugins::users-permissions.roles.update',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(28,'plugins::users-permissions.roles.delete',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(29,'plugins::users-permissions.providers.read',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(30,'plugins::users-permissions.providers.update',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(31,'plugins::users-permissions.email-templates.read',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(32,'plugins::users-permissions.email-templates.update',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(33,'plugins::users-permissions.advanced-settings.read',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(34,'plugins::users-permissions.advanced-settings.update',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(35,'admin::marketplace.read',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(36,'admin::marketplace.plugins.install',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(37,'admin::marketplace.plugins.uninstall',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(38,'admin::webhooks.create',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(39,'admin::webhooks.read',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(40,'admin::webhooks.update',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(41,'admin::webhooks.delete',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(42,'admin::users.create',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(43,'admin::users.read',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(44,'admin::users.update',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(45,'admin::users.delete',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(46,'admin::roles.create',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(47,'admin::roles.read',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(48,'admin::roles.update',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(49,'admin::roles.delete',NULL,NULL,'[]',1,'2020-10-09 14:06:09','2020-10-09 14:06:09'),(58,'plugins::content-manager.explorer.create','plugins::users-permissions.user','[\"username\",\"email\",\"provider\",\"password\",\"resetPasswordToken\",\"confirmationToken\",\"confirmed\",\"blocked\",\"role\"]','[]',1,'2020-11-01 15:50:34','2020-11-01 15:50:34'),(59,'plugins::content-manager.explorer.read','plugins::users-permissions.user','[\"username\",\"email\",\"provider\",\"password\",\"resetPasswordToken\",\"confirmationToken\",\"confirmed\",\"blocked\",\"role\"]','[]',1,'2020-11-01 15:50:34','2020-11-01 15:50:34'),(60,'plugins::content-manager.explorer.update','plugins::users-permissions.user','[\"username\",\"email\",\"provider\",\"password\",\"resetPasswordToken\",\"confirmationToken\",\"confirmed\",\"blocked\",\"role\"]','[]',1,'2020-11-01 15:50:34','2020-11-01 15:50:34'),(69,'plugins::content-manager.explorer.delete','application::phisical-person.phisical-person',NULL,'[]',1,'2020-11-19 16:18:49','2020-11-19 16:18:49'),(77,'plugins::content-manager.explorer.delete','application::legal-person.legal-person',NULL,'[]',1,'2020-11-19 16:29:25','2020-11-19 16:29:25'),(81,'plugins::content-manager.explorer.delete','application::client.client',NULL,'[]',1,'2020-11-19 16:31:46','2020-11-19 16:31:46'),(113,'plugins::content-manager.explorer.create','application::client.client','[\"customer_name\",\"customer_customer\",\"customer_type\",\"customer_active\"]','[]',1,'2020-11-21 12:11:36','2020-11-21 12:11:37'),(114,'plugins::content-manager.explorer.read','application::client.client','[\"customer_name\",\"customer_customer\",\"customer_type\",\"customer_active\"]','[]',1,'2020-11-21 12:11:36','2020-11-21 12:11:37'),(115,'plugins::content-manager.explorer.update','application::client.client','[\"customer_name\",\"customer_customer\",\"customer_type\",\"customer_active\"]','[]',1,'2020-11-21 12:11:36','2020-11-21 12:11:37'),(123,'plugins::content-manager.explorer.create','application::phisical-person.phisical-person','[\"pp_name\",\"pp_surname\",\"pp_fiscalcode\",\"pp_contact_method.cnn_mobile.phone_number\",\"pp_contact_method.cnn_phone.phone_number\",\"pp_contact_method.cnn_fax.phone_number\",\"pp_contact_method.cnn_mail\",\"pp_contact_method.cnn_pec\",\"pp_address.address_street\",\"pp_address.address_city\",\"pp_address.address_province\",\"pp_address.address_country\",\"pp_address.address_number\",\"pp_address.address_zipcode\"]','[]',1,'2020-11-21 12:25:17','2020-11-21 12:25:18'),(125,'plugins::content-manager.explorer.read','application::phisical-person.phisical-person','[\"pp_name\",\"pp_surname\",\"pp_fiscalcode\",\"pp_contact_method.cnn_mobile.phone_number\",\"pp_contact_method.cnn_phone.phone_number\",\"pp_contact_method.cnn_fax.phone_number\",\"pp_contact_method.cnn_mail\",\"pp_contact_method.cnn_pec\",\"pp_address.address_street\",\"pp_address.address_city\",\"pp_address.address_province\",\"pp_address.address_country\",\"pp_address.address_number\",\"pp_address.address_zipcode\"]','[]',1,'2020-11-21 12:25:17','2020-11-21 12:25:18'),(127,'plugins::content-manager.explorer.update','application::phisical-person.phisical-person','[\"pp_name\",\"pp_surname\",\"pp_fiscalcode\",\"pp_contact_method.cnn_mobile.phone_number\",\"pp_contact_method.cnn_phone.phone_number\",\"pp_contact_method.cnn_fax.phone_number\",\"pp_contact_method.cnn_mail\",\"pp_contact_method.cnn_pec\",\"pp_address.address_street\",\"pp_address.address_city\",\"pp_address.address_province\",\"pp_address.address_country\",\"pp_address.address_number\",\"pp_address.address_zipcode\"]','[]',1,'2020-11-21 12:25:17','2020-11-21 12:25:18'),(131,'plugins::content-manager.explorer.create','application::legal-person.legal-person','[\"lp_name\",\"lp_contact_method.cnn_mobile.phone_number\",\"lp_contact_method.cnn_phone.phone_number\",\"lp_contact_method.cnn_fax.phone_number\",\"lp_contact_method.cnn_mail\",\"lp_contact_method.cnn_pec\",\"lp_address.address_street\",\"lp_address.address_city\",\"lp_address.address_province\",\"lp_address.address_country\",\"lp_address.address_number\",\"lp_address.address_zipcode\",\"lp_vatcode\"]','[]',1,'2020-11-21 15:15:27','2020-11-21 15:15:27'),(132,'plugins::content-manager.explorer.read','application::legal-person.legal-person','[\"lp_name\",\"lp_contact_method.cnn_mobile.phone_number\",\"lp_contact_method.cnn_phone.phone_number\",\"lp_contact_method.cnn_fax.phone_number\",\"lp_contact_method.cnn_mail\",\"lp_contact_method.cnn_pec\",\"lp_address.address_street\",\"lp_address.address_city\",\"lp_address.address_province\",\"lp_address.address_country\",\"lp_address.address_number\",\"lp_address.address_zipcode\",\"lp_vatcode\"]','[]',1,'2020-11-21 15:15:27','2020-11-21 15:15:27'),(133,'plugins::content-manager.explorer.update','application::legal-person.legal-person','[\"lp_name\",\"lp_contact_method.cnn_mobile.phone_number\",\"lp_contact_method.cnn_phone.phone_number\",\"lp_contact_method.cnn_fax.phone_number\",\"lp_contact_method.cnn_mail\",\"lp_contact_method.cnn_pec\",\"lp_address.address_street\",\"lp_address.address_city\",\"lp_address.address_province\",\"lp_address.address_country\",\"lp_address.address_number\",\"lp_address.address_zipcode\",\"lp_vatcode\"]','[]',1,'2020-11-21 15:15:27','2020-11-21 15:15:27');
/*!40000 ALTER TABLE `strapi_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `strapi_role`
--

DROP TABLE IF EXISTS `strapi_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `strapi_role` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `strapi_role_name_unique` (`name`),
  UNIQUE KEY `strapi_role_code_unique` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `strapi_role`
--

LOCK TABLES `strapi_role` WRITE;
/*!40000 ALTER TABLE `strapi_role` DISABLE KEYS */;
INSERT INTO `strapi_role` VALUES (1,'Super Admin','strapi-super-admin','Super Admins can access and manage all features and settings.','2020-10-09 14:06:08','2020-10-09 14:06:08'),(2,'Editor','strapi-editor','Editors can manage and publish contents including those of other users.','2020-10-09 14:06:08','2020-10-09 14:06:08'),(3,'Author','strapi-author','Authors can manage the content they have created.','2020-10-09 14:06:08','2020-10-09 14:06:08');
/*!40000 ALTER TABLE `strapi_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `strapi_users_roles`
--

DROP TABLE IF EXISTS `strapi_users_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `strapi_users_roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `strapi_users_roles`
--

LOCK TABLES `strapi_users_roles` WRITE;
/*!40000 ALTER TABLE `strapi_users_roles` DISABLE KEYS */;
INSERT INTO `strapi_users_roles` VALUES (1,1,1);
/*!40000 ALTER TABLE `strapi_users_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `strapi_webhooks`
--

DROP TABLE IF EXISTS `strapi_webhooks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `strapi_webhooks` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `url` longtext DEFAULT NULL,
  `headers` longtext DEFAULT NULL,
  `events` longtext DEFAULT NULL,
  `enabled` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `strapi_webhooks`
--

LOCK TABLES `strapi_webhooks` WRITE;
/*!40000 ALTER TABLE `strapi_webhooks` DISABLE KEYS */;
/*!40000 ALTER TABLE `strapi_webhooks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tests`
--

DROP TABLE IF EXISTS `tests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tests` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `test` varchar(255) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tests`
--

LOCK TABLES `tests` WRITE;
/*!40000 ALTER TABLE `tests` DISABLE KEYS */;
INSERT INTO `tests` VALUES (1,'test 1',1,1,'2020-11-19 15:49:28','2020-11-19 15:49:37'),(2,'test2',1,1,'2020-11-19 15:50:13','2020-11-19 15:50:13'),(3,'test 3',1,1,'2020-11-19 15:50:23','2020-11-19 15:50:23');
/*!40000 ALTER TABLE `tests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `upload_file`
--

DROP TABLE IF EXISTS `upload_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `upload_file` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `alternativeText` varchar(255) DEFAULT NULL,
  `caption` varchar(255) DEFAULT NULL,
  `width` int(11) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `formats` longtext DEFAULT NULL,
  `hash` varchar(255) NOT NULL,
  `ext` varchar(255) DEFAULT NULL,
  `mime` varchar(255) NOT NULL,
  `size` decimal(10,2) NOT NULL,
  `url` varchar(255) NOT NULL,
  `previewUrl` varchar(255) DEFAULT NULL,
  `provider` varchar(255) NOT NULL,
  `provider_metadata` longtext DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `upload_file`
--

LOCK TABLES `upload_file` WRITE;
/*!40000 ALTER TABLE `upload_file` DISABLE KEYS */;
/*!40000 ALTER TABLE `upload_file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `upload_file_morph`
--

DROP TABLE IF EXISTS `upload_file_morph`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `upload_file_morph` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `upload_file_id` int(11) DEFAULT NULL,
  `related_id` int(11) DEFAULT NULL,
  `related_type` longtext DEFAULT NULL,
  `field` longtext DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `upload_file_morph`
--

LOCK TABLES `upload_file_morph` WRITE;
/*!40000 ALTER TABLE `upload_file_morph` DISABLE KEYS */;
/*!40000 ALTER TABLE `upload_file_morph` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users-permissions_permission`
--

DROP TABLE IF EXISTS `users-permissions_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users-permissions_permission` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `controller` varchar(255) NOT NULL,
  `action` varchar(255) NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `policy` varchar(255) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=219 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users-permissions_permission`
--

LOCK TABLES `users-permissions_permission` WRITE;
/*!40000 ALTER TABLE `users-permissions_permission` DISABLE KEYS */;
INSERT INTO `users-permissions_permission` VALUES (1,'content-manager','components','findcomponent',0,'',1,NULL,NULL),(2,'content-manager','components','findcomponent',0,'',2,NULL,NULL),(3,'content-manager','components','listcomponents',0,'',1,NULL,NULL),(4,'content-manager','components','listcomponents',0,'',2,NULL,NULL),(5,'content-manager','components','updatecomponent',0,'',1,NULL,NULL),(6,'content-manager','components','updatecomponent',0,'',2,NULL,NULL),(7,'content-manager','contentmanager','checkuidavailability',0,'',1,NULL,NULL),(8,'content-manager','contentmanager','checkuidavailability',0,'',2,NULL,NULL),(9,'content-manager','contentmanager','count',0,'',1,NULL,NULL),(10,'content-manager','contentmanager','count',0,'',2,NULL,NULL),(11,'content-manager','contentmanager','create',0,'',1,NULL,NULL),(12,'content-manager','contentmanager','create',0,'',2,NULL,NULL),(13,'content-manager','contentmanager','delete',0,'',1,NULL,NULL),(14,'content-manager','contentmanager','delete',0,'',2,NULL,NULL),(15,'content-manager','contentmanager','deletemany',0,'',1,NULL,NULL),(16,'content-manager','contentmanager','deletemany',0,'',2,NULL,NULL),(17,'content-manager','contentmanager','find',0,'',1,NULL,NULL),(18,'content-manager','contentmanager','find',0,'',2,NULL,NULL),(19,'content-manager','contentmanager','findone',0,'',1,NULL,NULL),(20,'content-manager','contentmanager','findone',0,'',2,NULL,NULL),(21,'content-manager','contentmanager','findrelationlist',0,'',1,NULL,NULL),(22,'content-manager','contentmanager','findrelationlist',0,'',2,NULL,NULL),(23,'content-manager','contentmanager','generateuid',0,'',1,NULL,NULL),(24,'content-manager','contentmanager','generateuid',0,'',2,NULL,NULL),(25,'content-manager','contentmanager','publish',0,'',1,NULL,NULL),(26,'content-manager','contentmanager','publish',0,'',2,NULL,NULL),(27,'content-manager','contentmanager','unpublish',0,'',1,NULL,NULL),(28,'content-manager','contentmanager','unpublish',0,'',2,NULL,NULL),(29,'content-manager','contentmanager','update',0,'',1,NULL,NULL),(30,'content-manager','contentmanager','update',0,'',2,NULL,NULL),(31,'content-manager','contenttypes','findcontenttype',0,'',1,NULL,NULL),(32,'content-manager','contenttypes','findcontenttype',0,'',2,NULL,NULL),(33,'content-manager','contenttypes','listcontenttypes',0,'',1,NULL,NULL),(34,'content-manager','contenttypes','listcontenttypes',0,'',2,NULL,NULL),(35,'content-manager','contenttypes','updatecontenttype',0,'',1,NULL,NULL),(36,'content-manager','contenttypes','updatecontenttype',0,'',2,NULL,NULL),(37,'content-type-builder','builder','getreservednames',0,'',1,NULL,NULL),(38,'content-type-builder','builder','getreservednames',0,'',2,NULL,NULL),(39,'content-type-builder','componentcategories','deletecategory',0,'',1,NULL,NULL),(40,'content-type-builder','componentcategories','deletecategory',0,'',2,NULL,NULL),(41,'content-type-builder','componentcategories','editcategory',0,'',1,NULL,NULL),(42,'content-type-builder','componentcategories','editcategory',0,'',2,NULL,NULL),(43,'content-type-builder','components','createcomponent',0,'',1,NULL,NULL),(44,'content-type-builder','components','createcomponent',0,'',2,NULL,NULL),(45,'content-type-builder','components','deletecomponent',0,'',1,NULL,NULL),(46,'content-type-builder','components','deletecomponent',0,'',2,NULL,NULL),(47,'content-type-builder','components','getcomponent',0,'',1,NULL,NULL),(48,'content-type-builder','components','getcomponent',0,'',2,NULL,NULL),(49,'content-type-builder','components','getcomponents',0,'',1,NULL,NULL),(50,'content-type-builder','components','getcomponents',0,'',2,NULL,NULL),(51,'content-type-builder','components','updatecomponent',0,'',1,NULL,NULL),(52,'content-type-builder','components','updatecomponent',0,'',2,NULL,NULL),(53,'content-type-builder','connections','getconnections',0,'',1,NULL,NULL),(54,'content-type-builder','connections','getconnections',0,'',2,NULL,NULL),(55,'content-type-builder','contenttypes','createcontenttype',0,'',1,NULL,NULL),(56,'content-type-builder','contenttypes','createcontenttype',0,'',2,NULL,NULL),(57,'content-type-builder','contenttypes','deletecontenttype',0,'',1,NULL,NULL),(58,'content-type-builder','contenttypes','deletecontenttype',0,'',2,NULL,NULL),(59,'content-type-builder','contenttypes','getcontenttype',0,'',1,NULL,NULL),(60,'content-type-builder','contenttypes','getcontenttype',0,'',2,NULL,NULL),(61,'content-type-builder','contenttypes','getcontenttypes',0,'',1,NULL,NULL),(62,'content-type-builder','contenttypes','getcontenttypes',0,'',2,NULL,NULL),(63,'content-type-builder','contenttypes','updatecontenttype',0,'',1,NULL,NULL),(64,'content-type-builder','contenttypes','updatecontenttype',0,'',2,NULL,NULL),(65,'email','email','send',0,'',1,NULL,NULL),(66,'email','email','send',0,'',2,NULL,NULL),(69,'upload','upload','count',0,'',1,NULL,NULL),(70,'upload','upload','count',0,'',2,NULL,NULL),(71,'upload','upload','destroy',0,'',1,NULL,NULL),(72,'upload','upload','destroy',0,'',2,NULL,NULL),(73,'upload','upload','find',0,'',1,NULL,NULL),(74,'upload','upload','find',0,'',2,NULL,NULL),(75,'upload','upload','findone',0,'',1,NULL,NULL),(76,'upload','upload','findone',0,'',2,NULL,NULL),(77,'upload','upload','getsettings',0,'',1,NULL,NULL),(78,'upload','upload','getsettings',0,'',2,NULL,NULL),(79,'upload','upload','search',0,'',1,NULL,NULL),(80,'upload','upload','search',0,'',2,NULL,NULL),(81,'upload','upload','updatesettings',0,'',1,NULL,NULL),(82,'upload','upload','updatesettings',0,'',2,NULL,NULL),(83,'upload','upload','upload',0,'',1,NULL,NULL),(84,'upload','upload','upload',0,'',2,NULL,NULL),(85,'users-permissions','auth','callback',0,'',1,NULL,NULL),(86,'users-permissions','auth','callback',1,'',2,NULL,NULL),(87,'users-permissions','auth','connect',1,'',1,NULL,NULL),(88,'users-permissions','auth','connect',1,'',2,NULL,NULL),(89,'users-permissions','auth','emailconfirmation',0,'',1,NULL,NULL),(90,'users-permissions','auth','emailconfirmation',1,'',2,NULL,NULL),(91,'users-permissions','auth','forgotpassword',0,'',1,NULL,NULL),(92,'users-permissions','auth','forgotpassword',1,'',2,NULL,NULL),(93,'users-permissions','auth','register',0,'',1,NULL,NULL),(94,'users-permissions','auth','register',1,'',2,NULL,NULL),(95,'users-permissions','auth','resetpassword',0,'',1,NULL,NULL),(96,'users-permissions','auth','resetpassword',1,'',2,NULL,NULL),(97,'users-permissions','auth','sendemailconfirmation',0,'',1,NULL,NULL),(98,'users-permissions','auth','sendemailconfirmation',0,'',2,NULL,NULL),(99,'users-permissions','user','count',1,'',1,NULL,NULL),(100,'users-permissions','user','count',0,'',2,NULL,NULL),(101,'users-permissions','user','create',0,'',1,NULL,NULL),(102,'users-permissions','user','create',0,'',2,NULL,NULL),(103,'users-permissions','user','destroy',0,'',1,NULL,NULL),(104,'users-permissions','user','destroy',0,'',2,NULL,NULL),(105,'users-permissions','user','destroyall',0,'',1,NULL,NULL),(106,'users-permissions','user','destroyall',0,'',2,NULL,NULL),(107,'users-permissions','user','find',1,'',1,NULL,NULL),(108,'users-permissions','user','find',0,'',2,NULL,NULL),(109,'users-permissions','user','findone',0,'',1,NULL,NULL),(110,'users-permissions','user','findone',0,'',2,NULL,NULL),(111,'users-permissions','user','me',1,'',1,NULL,NULL),(112,'users-permissions','user','me',1,'',2,NULL,NULL),(113,'users-permissions','user','update',0,'',1,NULL,NULL),(114,'users-permissions','user','update',0,'',2,NULL,NULL),(115,'users-permissions','userspermissions','createrole',0,'',1,NULL,NULL),(116,'users-permissions','userspermissions','createrole',0,'',2,NULL,NULL),(117,'users-permissions','userspermissions','deleterole',0,'',1,NULL,NULL),(118,'users-permissions','userspermissions','deleterole',0,'',2,NULL,NULL),(119,'users-permissions','userspermissions','getadvancedsettings',0,'',1,NULL,NULL),(120,'users-permissions','userspermissions','getadvancedsettings',0,'',2,NULL,NULL),(121,'users-permissions','userspermissions','getemailtemplate',0,'',1,NULL,NULL),(122,'users-permissions','userspermissions','getemailtemplate',0,'',2,NULL,NULL),(123,'users-permissions','userspermissions','getpermissions',0,'',1,NULL,NULL),(124,'users-permissions','userspermissions','getpermissions',0,'',2,NULL,NULL),(125,'users-permissions','userspermissions','getpolicies',0,'',1,NULL,NULL),(126,'users-permissions','userspermissions','getpolicies',0,'',2,NULL,NULL),(127,'users-permissions','userspermissions','getproviders',0,'',1,NULL,NULL),(128,'users-permissions','userspermissions','getproviders',0,'',2,NULL,NULL),(129,'users-permissions','userspermissions','getrole',0,'',1,NULL,NULL),(130,'users-permissions','userspermissions','getrole',0,'',2,NULL,NULL),(131,'users-permissions','userspermissions','getroles',0,'',1,NULL,NULL),(132,'users-permissions','userspermissions','getroles',0,'',2,NULL,NULL),(133,'users-permissions','userspermissions','getroutes',0,'',1,NULL,NULL),(134,'users-permissions','userspermissions','getroutes',0,'',2,NULL,NULL),(135,'users-permissions','userspermissions','index',0,'',1,NULL,NULL),(136,'users-permissions','userspermissions','index',0,'',2,NULL,NULL),(137,'users-permissions','userspermissions','searchusers',0,'',1,NULL,NULL),(138,'users-permissions','userspermissions','searchusers',0,'',2,NULL,NULL),(139,'users-permissions','userspermissions','updateadvancedsettings',0,'',1,NULL,NULL),(140,'users-permissions','userspermissions','updateadvancedsettings',0,'',2,NULL,NULL),(141,'users-permissions','userspermissions','updateemailtemplate',0,'',1,NULL,NULL),(142,'users-permissions','userspermissions','updateemailtemplate',0,'',2,NULL,NULL),(143,'users-permissions','userspermissions','updateproviders',0,'',1,NULL,NULL),(144,'users-permissions','userspermissions','updateproviders',0,'',2,NULL,NULL),(145,'users-permissions','userspermissions','updaterole',0,'',1,NULL,NULL),(146,'users-permissions','userspermissions','updaterole',0,'',2,NULL,NULL),(171,'application','phisical-person','count',1,'',1,NULL,NULL),(172,'application','phisical-person','count',1,'',2,NULL,NULL),(173,'application','phisical-person','create',1,'',1,NULL,NULL),(174,'application','phisical-person','create',0,'',2,NULL,NULL),(175,'application','phisical-person','delete',0,'',1,NULL,NULL),(176,'application','phisical-person','delete',0,'',2,NULL,NULL),(177,'application','phisical-person','find',1,'',1,NULL,NULL),(178,'application','phisical-person','find',1,'',2,NULL,NULL),(179,'application','phisical-person','findone',1,'',1,NULL,NULL),(180,'application','phisical-person','findone',1,'',2,NULL,NULL),(181,'application','phisical-person','update',1,'',1,NULL,NULL),(182,'application','phisical-person','update',0,'',2,NULL,NULL),(183,'application','legal-person','count',1,'',1,NULL,NULL),(184,'application','legal-person','count',1,'',2,NULL,NULL),(185,'application','legal-person','create',1,'',1,NULL,NULL),(186,'application','legal-person','create',0,'',2,NULL,NULL),(187,'application','legal-person','delete',0,'',1,NULL,NULL),(188,'application','legal-person','delete',0,'',2,NULL,NULL),(189,'application','legal-person','find',1,'',1,NULL,NULL),(190,'application','legal-person','find',1,'',2,NULL,NULL),(191,'application','legal-person','findone',1,'',1,NULL,NULL),(192,'application','legal-person','findone',1,'',2,NULL,NULL),(193,'application','legal-person','update',1,'',1,NULL,NULL),(194,'application','legal-person','update',0,'',2,NULL,NULL),(195,'application','client','count',1,'',1,NULL,NULL),(196,'application','client','count',1,'',2,NULL,NULL),(197,'application','client','create',1,'',1,NULL,NULL),(198,'application','client','create',0,'',2,NULL,NULL),(199,'application','client','delete',0,'',1,NULL,NULL),(200,'application','client','delete',0,'',2,NULL,NULL),(201,'application','client','find',1,'',1,NULL,NULL),(202,'application','client','find',1,'',2,NULL,NULL),(203,'application','client','findone',1,'',1,NULL,NULL),(204,'application','client','findone',1,'',2,NULL,NULL),(205,'application','client','update',1,'',1,NULL,NULL),(206,'application','client','update',0,'',2,NULL,NULL);
/*!40000 ALTER TABLE `users-permissions_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users-permissions_role`
--

DROP TABLE IF EXISTS `users-permissions_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users-permissions_role` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users-permissions_role_type_unique` (`type`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users-permissions_role`
--

LOCK TABLES `users-permissions_role` WRITE;
/*!40000 ALTER TABLE `users-permissions_role` DISABLE KEYS */;
INSERT INTO `users-permissions_role` VALUES (1,'Authenticated','Default role given to authenticated user.','authenticated',NULL,NULL),(2,'Public','Default role given to unauthenticated user.','public',NULL,NULL);
/*!40000 ALTER TABLE `users-permissions_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users-permissions_user`
--

DROP TABLE IF EXISTS `users-permissions_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users-permissions_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `resetPasswordToken` varchar(255) DEFAULT NULL,
  `confirmed` tinyint(1) DEFAULT NULL,
  `blocked` tinyint(1) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `confirmationToken` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users-permissions_user_username_unique` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users-permissions_user`
--

LOCK TABLES `users-permissions_user` WRITE;
/*!40000 ALTER TABLE `users-permissions_user` DISABLE KEYS */;
INSERT INTO `users-permissions_user` VALUES (1,'user1','user1@mail.com','local','$2a$10$1/nqP1jDwuL.I/XVueQ0w.0.zLIoQ6qHdGO6xxEMXSeP7E5bSEX5O',NULL,1,0,1,1,1,'2020-10-25 09:01:34','2020-11-19 15:45:06',NULL),(2,'user2','user2@mail.com','local','$2a$10$F80GpcZmxVtRXDHcfFvqJur0usdZsUo8Os.xoeZYJd5rtBzTYOdUO',NULL,1,0,1,1,1,'2020-10-25 09:01:48','2020-11-19 15:45:25',NULL);
/*!40000 ALTER TABLE `users-permissions_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-04 10:02:37
