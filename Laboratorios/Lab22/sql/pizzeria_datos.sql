-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 12-03-2024 a las 17:15:01
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
--
-- Base de datos: `minecraft`
--
--
-- Volcado de datos para la tabla `asigna`
--
--
-- Volcado de datos para la tabla `construccion`
-- Volcado de datos para la tabla `permiso`
--
INSERT INTO `permiso` (`id`, `funcion`, `created_at`) VALUES
(1, 'crear', '2024-03-12 16:13:28'),
(2, 'ver', '2024-03-12 16:13:28');
--
-- Volcado de datos para la tabla `posee`
--
INSERT INTO `posee` (`idrol`, `idpermiso`, `created_at`) VALUES
(1, 2, '2024-03-12 16:14:20'),
(2, 1, '2024-03-12 16:14:33'),
(2, 2, '2024-03-12 16:14:33');
--
-- Volcado de datos para la tabla `rol`
--
INSERT INTO `rol` (`id`, `nombre`, `created_at`) VALUES
(1, 'visualizador', '2024-03-12 16:13:11'),
(2, 'creador', '2024-03-12 16:13:11');
--
-- Volcado de datos para la tabla `usuario`
--
INSERT INTO `usuario` (`username`, `password`, `created_at`) VALUES
('Alexys', 'aguauwu3', '2024-03-11 16:22:24'),
('angel', '$2a$12$gwPQy02SAzuDcAdSo1H.4./MtFc/dsHg.e.ifHn7zo1HES0j2uC.2', '2024-03-12 16:12:20'),
('ian', '$2a$12$6.yt7jD7UYVXRBA0R9OcJeHHA1I60J7GjQaUYwtCh7hckoAudafqO', '2024-03-12 16:11:54'),
('levi', '$2a$12$qlwoAqSbaWpHP1aKheN5quIcpBqTgraCf5X.MmgnNJcLSR7KT92Gu', '2024-03-11 16:39:41'),
('rommel49', 'rommel49', '2024-03-07 16:22:57');
COMMIT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;