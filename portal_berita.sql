-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 21, 2020 at 04:55 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portal_berita`
--

-- --------------------------------------------------------

--
-- Table structure for table `berita`
--

CREATE TABLE `berita` (
  `id_berita` int(10) NOT NULL,
  `id_profile` int(10) NOT NULL,
  `judul_berita` varchar(255) NOT NULL,
  `isi_berita` varchar(255) NOT NULL,
  `created` varchar(30) NOT NULL,
  `modified` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `berita`
--

INSERT INTO `berita` (`id_berita`, `id_profile`, `judul_berita`, `isi_berita`, `created`, `modified`) VALUES
(3, 8, 'Corona di Indonesia Menurun Drastis', 'Saat ini hanya terdapat 2 kasus baru di Indonesia, semoga kalian tetap menjaga kesehatan dan kebersihan', '2020-07-19 15:00:50.968', '2020-07-19 19:07:52.662'),
(5, 1, 'Rismaharini: Selamat Berjuang Mas Gibran', 'Wali Kota Surabaya, Tri Rismaharini mengucapkan selamat kepada Gibran Rakabuming Raka yang resmi diusung PDI Perjuangan untuk Pilkada Solo 2020. Dengan rekomendasi PDI Perjuangan itu, Risma mendoakan Gibran agar dapat mewujudkan Solo yang semakin baik. \'S', '2020-07-20 11:45:31.982', '2020-07-20 11:45:31.982');

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `id_profile` int(10) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `no_tlpn` varchar(30) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`id_profile`, `nama`, `no_tlpn`, `email`, `password`) VALUES
(1, 'Nashywa Syavira Nur Arliza', '085785411707', 'nashywaa@gmail.com', '$2a$10$UY6RzBO91e6Zi6ra.CtDS.8pk20IyTqVr3J3F35wbxlj5QDr6IIjq'),
(4, 'tulip', '9988779900', 'tulip@gmail.com', '$2a$10$Xwfgv6JrVSCFS5FGjPk4YeFkvMidt9nDxICBhqB9OXuJZ1v9ehrMG'),
(8, 'Bunga Kamboja', '085990123455', 'kamboja@gmail.com', '$2a$10$57NC5H4z08UnDWG69gjYFuooUYutV4775uIFkYFVfscfshUKjEazi');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `berita`
--
ALTER TABLE `berita`
  ADD PRIMARY KEY (`id_berita`),
  ADD UNIQUE KEY `id_profile` (`id_profile`);

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`id_profile`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `berita`
--
ALTER TABLE `berita`
  MODIFY `id_berita` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
