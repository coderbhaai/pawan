-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 18, 2021 at 01:35 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reward`
--

-- --------------------------------------------------------

--
-- Table structure for table `ads`
--

CREATE TABLE `ads` (
  `id` int(255) NOT NULL,
  `type` int(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `status` int(255) NOT NULL,
  `target` int(11) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ads`
--

INSERT INTO `ads` (`id`, `type`, `image`, `url`, `status`, `target`, `created_at`, `updated_at`) VALUES
(1, 1, 'top-banner.png', '/qqqqqqqqqq', 1, 0, '2021-01-27 00:37:37', '2021-01-27 02:24:00'),
(2, 2, '1.png', '/yyyyyyyyyy', 1, 0, '2021-01-27 00:52:34', '2021-01-28 07:43:22'),
(3, 3, 'product-2.jpg', '/wwwwwwwwww', 1, 0, '2021-01-27 00:52:34', '2021-01-27 00:52:34'),
(4, 7, 'product-3.jpg', '/ttttttttttt', 1, 0, '2021-01-27 00:52:34', '2021-01-27 00:52:34'),
(5, 8, 'product-4.jpg', '/uuuuuuuuuuu', 1, 0, '2021-01-27 00:52:34', '2021-01-27 00:52:34'),
(6, 9, 'product-5.jpg', '/iiiiiiiiiiiiii', 1, 0, '2021-01-27 00:52:34', '2021-01-27 00:52:34'),
(7, 10, '1.jpg', '/eeeeeeeeeeeeeeeeeee', 1, 0, '2021-01-27 00:52:34', '2021-01-27 00:52:34'),
(8, 10, '2.jpg', '/aaaaaaaaaaaa', 1, 0, '2021-01-27 00:52:34', '2021-01-27 00:52:34'),
(9, 10, '3.jpg', '/rrrrrrrrrr', 1, 0, '2021-01-27 00:57:31', '2021-01-27 00:57:31'),
(10, 10, '4.jpg', '/uuuuuuuuuuu', 1, 0, '2021-01-27 00:57:31', '2021-01-27 00:57:31'),
(11, 10, '5.jpg', '/ggggggggg', 1, 0, '2021-01-27 00:57:31', '2021-01-27 00:57:31'),
(12, 10, '6.jpg', '/yyyyyyyyyyyy', 1, 0, '2021-01-27 00:57:31', '2021-01-27 00:57:31'),
(13, 6, '7.jpg', '/tttttttttt', 1, 0, '2021-01-27 00:57:31', '2021-01-27 00:57:31'),
(14, 6, '8.jpg', '/yyyyyyyyy', 1, 0, '2021-01-27 00:57:31', '2021-01-27 00:57:31'),
(15, 6, '9.jpg', '/iiiiiiiiiiii', 1, 0, '2021-01-27 00:57:31', '2021-01-27 00:57:31'),
(16, 6, '62.jpg', '/uuuuuuuuuuuu', 1, 0, '2021-01-27 00:57:31', '2021-01-27 00:57:31'),
(17, 6, 'Coupons-11.jpg', '/wwwwwwwwwwww', 1, 0, '2021-01-27 00:57:31', '2021-01-27 00:57:31'),
(18, 6, 'December-Special-1.jpg', '/rrrrrrrrrrrr', 1, 0, '2021-01-27 00:57:31', '2021-01-27 00:57:31'),
(19, 6, 'Feb-Special-4.jpg', '/tttttttttttt', 1, 0, '2021-01-27 00:57:31', '2021-01-27 00:57:31'),
(20, 6, 'Feb-Special-3.jpg', '/uuuuuuuuuuuuu', 1, 0, '2021-01-27 00:57:31', '2021-01-27 00:57:31'),
(21, 11, 'Feb-Special-5.jpg', '/qqqqqqqqq', 1, 0, '2021-01-27 00:57:31', '2021-01-27 00:57:31'),
(22, 11, 'Jan-Special-1.jpg', '/tttttttttt', 1, 0, '2021-01-27 00:57:31', '2021-01-27 00:57:31'),
(23, 12, 'product-7.jpg', '/vvvvvvvvvvvvv', 1, 0, '2021-01-27 01:11:40', '2021-01-27 01:11:40'),
(24, 13, 'product-9.jpg', '/bbbbbbbbbbb', 1, 0, '2021-01-27 01:11:40', '2021-01-27 01:11:40'),
(25, 4, 'product-11.jpg', '/nnnnnnnnnnn', 1, 0, '2021-01-27 01:22:19', '2021-01-27 01:22:19'),
(26, 5, 'product-12.jpg', '/mmmmmmmmmm', 1, 0, '2021-01-27 01:22:19', '2021-01-27 01:22:19'),
(27, 13, 'product-3.jpg', 'qqqqqqqqqqq', 1, 0, '2021-02-06 05:49:11', '2021-02-06 05:49:11'),
(28, 13, 'product-3.jpg', 'qqqqqqqqq', 1, 0, '2021-02-06 05:49:11', '2021-02-06 05:49:11'),
(29, 14, 'product-10.jpg', 'qqqqqqqqqqq', 1, 0, '2021-02-06 05:51:21', '2021-02-06 05:51:21'),
(30, 15, 'product-9.jpg', 'wwwwwww', 1, 0, '2021-02-06 05:51:21', '2021-02-06 05:51:21'),
(31, 16, 'product-8.jpg', 'eeeeeeeee', 1, 0, '2021-02-06 05:51:21', '2021-02-06 05:51:21'),
(32, 17, 'product-7.jpg', 'rrrrrrrrrrrrrrr', 1, 0, '2021-02-06 05:51:21', '2021-02-06 05:51:21'),
(33, 18, 'product-11.jpg', 'mmmmm', 1, 0, '2021-02-07 03:00:39', '2021-02-07 03:11:59'),
(34, 19, 'product-6.jpg', 'nnnnnnnnnnnnnnnnnnnnn', 1, 0, '2021-02-07 03:00:39', '2021-02-07 03:00:39'),
(35, 20, '1.jpg', 'qqqqqqqqq', 1, 0, '2021-02-08 11:12:42', '2021-02-08 11:12:42'),
(36, 20, '2.jpg', 'qqqqqqqqq', 1, 0, '2021-02-08 11:12:42', '2021-02-08 11:12:42'),
(37, 20, '3.jpg', 'qqqqqqqqq', 1, 0, '2021-02-08 11:12:42', '2021-02-08 11:12:42'),
(38, 20, '4.jpg', 'qqqqqqqqq', 1, 0, '2021-02-08 11:12:42', '2021-02-08 11:12:42'),
(39, 20, '5.jpg', 'qqqqqqqqq', 1, 0, '2021-02-08 11:12:42', '2021-02-08 11:12:42'),
(40, 20, '6.jpg', 'qqqqqqqqq', 1, 0, '2021-02-08 11:12:42', '2021-02-08 11:12:42'),
(41, 20, '7.jpg', 'qqqqqqqqq', 1, 0, '2021-02-08 11:12:42', '2021-02-08 11:12:42'),
(42, 20, '8.jpg', 'qqqqqqqqq', 1, 0, '2021-02-08 11:12:42', '2021-02-08 11:12:42'),
(43, 20, '9.jpg', 'qqqqqqqqq', 1, 0, '2021-02-08 11:12:42', '2021-02-08 11:12:42'),
(44, 21, 'Blog-2.jpg', 'qqqqqqqqqqq', 1, 0, '2021-02-11 06:38:35', '2021-02-11 06:38:35'),
(45, 21, 'Blog-4.jpg', 'qqqqqqqqqqq', 1, 0, '2021-02-11 06:38:35', '2021-02-11 06:38:35'),
(46, 21, 'Blog-6.jpg', 'qqqqqqqqqqq', 1, 0, '2021-02-11 06:38:35', '2021-02-11 06:38:35');

-- --------------------------------------------------------

--
-- Table structure for table `basic`
--

CREATE TABLE `basic` (
  `id` int(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `tab1` varchar(255) DEFAULT NULL,
  `tab2` varchar(255) DEFAULT NULL,
  `tab3` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `basic`
--

INSERT INTO `basic` (`id`, `type`, `name`, `tab1`, `tab2`, `tab3`, `created_at`, `updated_at`) VALUES
(1, 'Carousel', '10.jpg', '', '', NULL, '2021-01-19 06:52:37', '2021-01-28 07:34:31'),
(2, 'Carousel', '9.jpg', '', '', NULL, '2021-01-19 08:24:48', '2021-01-28 07:34:31'),
(3, 'Carousel', '7.jpg', '', '', NULL, '2021-01-19 08:24:48', '2021-01-28 07:34:31'),
(4, 'Publisher', 'Publisher A', '', '', NULL, '2021-01-20 03:00:06', '2021-01-20 03:00:06'),
(5, 'Publisher', 'Publisher B', '', '', NULL, '2021-01-20 03:00:06', '2021-01-20 03:00:06'),
(6, 'Publisher', 'Publisher C', '', '', NULL, '2021-01-20 03:00:06', '2021-01-20 03:00:06'),
(7, 'Publisher', 'Publisher D', '', '', NULL, '2021-01-20 03:00:06', '2021-01-20 03:00:06'),
(8, 'Publisher', 'Publisher E', '', '', NULL, '2021-01-20 03:00:06', '2021-01-20 03:00:06'),
(9, 'Tags', 'Recommended', '', '', NULL, '2021-01-20 05:39:33', '2021-01-20 05:39:33'),
(10, 'Tags', 'Special Offers', '', '', NULL, '2021-01-20 05:39:33', '2021-01-20 05:39:33'),
(11, 'Tags', 'Staff Recommended', '', '', NULL, '2021-01-20 05:39:33', '2021-01-20 05:39:33'),
(12, 'Tags', 'Daily Ranking', '', '', NULL, '2021-01-20 05:39:33', '2021-01-20 05:39:33'),
(13, 'CouponType', 'Type A', '', '', NULL, '2021-01-20 06:34:26', '2021-01-20 06:34:26'),
(14, 'CouponType', 'Type B', '', '', NULL, '2021-01-20 06:34:26', '2021-01-20 06:34:26'),
(15, 'CouponType', 'Type C', '', '', NULL, '2021-01-20 06:34:26', '2021-01-20 06:34:26'),
(16, 'Carousel', '01 - Copy (3).jpg', '', '', NULL, '2021-01-26 04:07:31', '2021-01-26 04:07:31'),
(17, 'Carousel', '8.jpg', '', '', NULL, '2021-01-26 04:07:31', '2021-01-28 07:34:31'),
(18, 'Carousel', '6.jpg', '', '', NULL, '2021-01-26 04:07:31', '2021-01-28 07:34:31'),
(19, 'Tags', 'New Arrival Store', '', '', NULL, '2021-02-06 06:24:36', '2021-02-06 06:24:36'),
(20, 'Tags', 'Popular Stores', '', '', NULL, '2021-02-06 06:24:36', '2021-02-06 06:24:36'),
(21, 'Tags', 'Trending Stores', '', '', NULL, '2021-02-06 06:24:36', '2021-02-06 06:24:36'),
(22, 'Tags', 'Recommended Stores', '', '', NULL, '2021-02-06 06:24:36', '2021-02-06 06:24:36'),
(23, 'Tags', 'Education', '', '', NULL, '2021-02-06 06:24:36', '2021-02-06 06:24:36'),
(24, 'Tags', 'Fashion & Lifestyle', '', '', NULL, '2021-02-06 06:24:36', '2021-02-06 06:24:36'),
(25, 'Tags', 'Food & Drinks', '', '', NULL, '2021-02-06 06:24:36', '2021-02-06 06:24:36'),
(26, 'Tags', 'Grocery', '', '', NULL, '2021-02-06 06:24:36', '2021-02-06 06:24:36'),
(27, 'Survey', 'Food category', '1', '1', '1613045931574-organic-vegetablesS-RrewardAsia.png', '2021-02-10 05:55:54', '2021-02-11 06:46:09'),
(28, 'Survey', 'Sports category', '2', '1', '1613045926952-healthcareS-RrewardAsia.png', '2021-02-10 05:57:20', '2021-02-11 06:46:09'),
(29, 'Survey', 'Job category', '7', '0', '1613045922099-fashion-lifestyleS-RrewardAsia.png', '2021-02-10 05:57:20', '2021-02-11 06:46:09');

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `coverImg` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category` mediumtext COLLATE utf8mb4_unicode_ci,
  `tag` mediumtext COLLATE utf8mb4_unicode_ci,
  `content` longtext COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `url`, `coverImg`, `category`, `tag`, `content`, `created_at`, `updated_at`) VALUES
(1, 'Blog A', 'Blog A', 'hiring-a-digital-marketing-agency.jpg', '[2,1,3,4]', '[5,6,7,8]', '<p>Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>\n', '2021-01-09 00:50:43', '2021-01-09 00:50:43'),
(2, 'Blog B', 'Blog B', 'how-much-a-website-building-cost-should-be.jpg', '[1,2,3,4]', '[5,6,7,8]', '<p>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</p>\n', '2021-01-09 00:54:46', '2021-01-09 00:54:46'),
(3, 'Blog C', 'Blog C', 'how-to-improve-google-search-ranking.jpg', '[1,2,3,4]', '[5,6,7,8]', '<p>cccccccccccccccccccccccccccccccccc</p>\n', '2021-01-09 00:54:46', '2021-01-09 00:54:46'),
(4, 'Blog D', 'Blog D', 'how-to-improve-website-conversion-rates.jpg', '[1,2,3,4]', '[5,6,7,8]', '<p>Dddddddddddddddddddddddddddddddddddddddddd</p>\n', '2021-01-09 00:54:46', '2021-01-09 00:54:46'),
(5, 'Blog E', 'Blog E', 'how-to-make-existing-website-mobile-friendly.jpg', '[1,2,3,4]', '[5,6,7,8]', '<p>Eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>\n', '2021-01-09 00:54:46', '2021-01-09 00:54:46');

-- --------------------------------------------------------

--
-- Table structure for table `blog_metas`
--

CREATE TABLE `blog_metas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blog_metas`
--

INSERT INTO `blog_metas` (`id`, `type`, `name`, `url`, `created_at`, `updated_at`) VALUES
(1, 'category', 'Category A', 'Category-A', '2021-01-09 00:50:43', '2021-01-09 00:50:43'),
(2, 'category', 'Category B', 'Category-B', '2021-01-09 00:50:43', '2021-01-09 00:50:43'),
(3, 'category', 'Category C', 'Category-C', '2021-01-09 00:50:43', '2021-01-09 00:50:43'),
(4, 'category', 'Category D', 'Category-D', '2021-01-09 00:50:43', '2021-01-09 00:50:43'),
(5, 'tag', 'tag A', 'tag-A', '2021-01-09 00:50:43', '2021-01-09 00:50:43'),
(6, 'tag', 'tag B', 'tag-B', '2021-01-09 00:50:43', '2021-01-09 00:50:43'),
(7, 'tag', 'tag C', 'tag-C', '2021-01-09 00:50:43', '2021-01-09 00:50:43'),
(8, 'tag', 'tag D', 'tag-D', '2021-01-09 00:50:43', '2021-01-09 00:50:43');

-- --------------------------------------------------------

--
-- Table structure for table `career`
--

CREATE TABLE `career` (
  `id` int(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `qualification` mediumtext,
  `experience` mediumtext,
  `description` mediumtext,
  `status` int(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `career`
--

INSERT INTO `career` (`id`, `role`, `location`, `qualification`, `experience`, `description`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Digital marketingss', 'Gurgaon', 'BE MBA', 'no exp', 'come as you are.........', 1, '2021-02-12 02:04:56', '2021-02-12 02:08:49'),
(2, 'Salessssss', 'GGN', 'BE', '2 years', 'check this', 1, '2021-02-12 02:06:29', '2021-02-12 02:08:49');

-- --------------------------------------------------------

--
-- Table structure for table `cashback`
--

CREATE TABLE `cashback` (
  `id` int(255) NOT NULL,
  `userId` int(255) NOT NULL,
  `publisher` int(255) NOT NULL,
  `date` datetime NOT NULL,
  `store` int(255) NOT NULL,
  `amount` int(255) NOT NULL,
  `rewardPayout` int(255) NOT NULL,
  `description` mediumtext NOT NULL,
  `customerPayout` int(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cashback`
--

INSERT INTO `cashback` (`id`, `userId`, `publisher`, `date`, `store`, `amount`, `rewardPayout`, `description`, `customerPayout`, `created_at`, `updated_at`) VALUES
(1, 7, 6, '2021-02-19 00:00:00', 4, 100, 60, 'qqqqqqqq', 40, '2021-02-11 06:02:58', '2021-02-11 06:02:58'),
(2, 7, 5, '2021-03-06 00:00:00', 3, 120, 70, 'eeeeeee', 50, '2021-02-11 06:02:58', '2021-02-11 06:02:58'),
(3, 7, 6, '2021-02-26 00:00:00', 2, 100, 20, 'rrrrrrr', 70, '2021-02-11 06:07:31', '2021-02-11 06:07:31');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `category` int(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `status` int(255) NOT NULL,
  `display_order` int(255) NOT NULL,
  `icon` varchar(255) NOT NULL,
  `banner` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `type`, `category`, `name`, `url`, `title`, `status`, `display_order`, `icon`, `banner`, `created_at`, `updated_at`) VALUES
(1, 'Category', NULL, 'Category A', 'Category-A', 'Category A', 1, 1, 'countertop.png', 'hiring-a-digital-marketing-agency.jpg', '2021-01-09 01:25:24', '2021-01-20 02:35:06'),
(2, 'Category', NULL, 'Category B', 'Category-B', 'Category B', 1, 2, 'bookshelf.png', 'how-to-improve-website-conversion-rates.jpg', '2021-01-09 01:25:24', '2021-01-20 02:35:06'),
(3, 'Category', NULL, 'Category C', 'Category-C', 'Category C', 1, 3, 'books.png', 'image-optimisation-in-website.jpg', '2021-01-09 01:25:24', '2021-01-20 02:35:06'),
(4, 'Category', NULL, 'Category D', 'Category-D', 'Category D', 1, 4, 'bid.png', 'off-page-seo-techniques.jpg', '2021-01-09 01:25:24', '2021-01-20 02:35:06'),
(5, 'Category', NULL, 'Category E', 'Category-E', 'Category E', 1, 5, 'deal.png', 'hiring-a-digital-marketing-agency.jpg', '2021-01-20 02:35:06', '2021-01-20 02:35:06'),
(6, 'Category', NULL, 'Category F', 'Category-F', 'Category F', 1, 6, 'debit-card.png', 'how-much-a-website-building-cost-should-be.jpg', '2021-01-20 02:35:06', '2021-01-20 02:35:06'),
(7, 'Category', NULL, 'Category G', 'Category-G', 'Category G', 1, 7, 'diamond.png', 'increase-your-business-after-lockdown.jpg', '2021-01-20 02:35:06', '2021-01-20 02:35:06'),
(8, 'Category', NULL, 'Category H', 'Category-H', 'Category H', 1, 8, 'document.png', 'online-digital-marketing.jpg', '2021-01-20 02:35:06', '2021-01-20 02:35:06'),
(9, 'Category', NULL, 'Category I', 'Category-I', 'Category Ii', 1, 7, '5842997fa6515b1e0ad75adf.png', 'online-seo-strategy.jpg', '2021-02-06 14:34:55', '2021-02-06 14:34:55'),
(10, 'SubCategory', 1, 'Sub Cat 1', 'Sub-Cat-1', 'Sub Cat 1', 1, 1, 'Alibaba.png', 'online-how-to-improve-website-conversion-rates.jpg', '2021-02-06 14:43:13', '2021-02-07 03:56:01'),
(11, 'SubCategory', 1, 'Sub cat 2', 'Sub-cat-2', 'Sub cat 2', 1, 2, 'oyo-rooms-logo.png', 'how-much-a-website-building-cost-should-be.jpg', '2021-02-06 14:59:22', '2021-02-07 03:56:01'),
(12, 'SubCategory', 1, 'Sub cat 3', 'Sub-cat-3', 'Sub cat ', 1, 4, 'logo-flipkart-png-flipkart-591.png', 'online-how-to-make-existing-website-mobile-friendly.jpg', '2021-02-07 04:08:51', '2021-02-07 04:08:51'),
(13, 'SubCategory', 1, 'Sub cat 4', 'Sub-cat-', 'Sub cat ', 1, 4, 'logo-flipkart-png-flipkart-591.png', 'online-how-to-make-existing-website-mobile-friendly.jpg', '2021-02-07 04:08:51', '2021-02-07 04:08:51'),
(14, 'SubCategory', 1, 'Sub cat 5', 'Sub-cat-5', 'Sub cat ', 1, 4, 'logo-flipkart-png-flipkart-591.png', 'online-how-to-make-existing-website-mobile-friendly.jpg', '2021-02-07 04:08:51', '2021-02-07 04:08:51'),
(15, 'SubCategory', 1, 'Sub cat 6', 'Sub-cat-6', 'Sub cat ', 1, 4, 'logo-flipkart-png-flipkart-591.png', 'online-how-to-make-existing-website-mobile-friendly.jpg', '2021-02-07 04:08:51', '2021-02-07 04:08:51'),
(16, 'SubCategory', 1, 'Sub cat 7', 'Sub-cat-7', 'Sub cat ', 1, 4, 'logo-flipkart-png-flipkart-591.png', 'online-how-to-make-existing-website-mobile-friendly.jpg', '2021-02-07 04:08:51', '2021-02-07 04:08:51'),
(17, 'SubCategory', 1, 'Sub cat 8', 'Sub-cat-8', 'Sub cat ', 1, 4, 'logo-flipkart-png-flipkart-591.png', 'online-how-to-make-existing-website-mobile-friendly.jpg', '2021-02-07 04:08:51', '2021-02-07 04:08:51'),
(18, 'SubCategory', 1, 'Sub cat 9', 'Sub-cat-9', 'Sub cat ', 1, 4, 'logo-flipkart-png-flipkart-591.png', 'online-how-to-make-existing-website-mobile-friendly.jpg', '2021-02-07 04:08:51', '2021-02-07 04:08:51'),
(19, 'SubCategory', 8, 'Sub cat 10', 'Sub-cat-10', 'Sub cat ', 1, 4, 'logo-flipkart-png-flipkart-591.png', 'online-how-to-make-existing-website-mobile-friendly.jpg', '2021-02-07 04:08:51', '2021-02-07 04:22:02');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(10) UNSIGNED NOT NULL,
  `blogId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `c_order` int(11) NOT NULL,
  `commentId` int(11) NOT NULL,
  `user` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `comment` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contact_forms`
--

CREATE TABLE `contact_forms` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contact_forms`
--

INSERT INTO `contact_forms` (`id`, `name`, `email`, `phone`, `message`, `created_at`, `updated_at`) VALUES
(1, 'qqqqqqq', 'qwwwwwwwwwww', 'eeeeeeeee', 'errrrrrrrrrr', '2021-02-15 02:05:29', '2021-02-15 02:05:29');

-- --------------------------------------------------------

--
-- Table structure for table `coupon`
--

CREATE TABLE `coupon` (
  `id` int(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `store` int(255) NOT NULL,
  `category` int(255) NOT NULL,
  `tags` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `publisher` int(255) NOT NULL,
  `commission` varchar(255) NOT NULL,
  `offer` mediumtext NOT NULL,
  `cashback` varchar(255) NOT NULL,
  `status` int(255) NOT NULL,
  `start` datetime NOT NULL,
  `expiry` datetime NOT NULL,
  `coupon_type` int(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `coupon`
--

INSERT INTO `coupon` (`id`, `type`, `store`, `category`, `tags`, `title`, `url`, `publisher`, `commission`, `offer`, `cashback`, `status`, `start`, `expiry`, `coupon_type`, `image`, `created_at`, `updated_at`) VALUES
(1, 'coupon', 4, 1, '[4,1,2,3]', 'Coupon A', 'Coupon-A', 4, 'Coupon A commision', 'Coupon A offer', 'Coupon A', 1, '2021-01-09 00:00:00', '2021-01-17 00:00:00', 13, '4.jpg', '2021-01-09 01:29:46', '2021-01-28 08:37:07'),
(2, 'coupon', 4, 2, '[1,2,3,4]', 'Coupon B', 'Coupon-B', 4, 'Coupon B', 'Coupon B', 'Coupon B', 1, '2021-01-11 00:00:00', '2021-01-19 00:00:00', 14, '7.jpg', '2021-01-09 01:29:46', '2021-01-22 03:18:40'),
(3, 'coupon', 4, 3, '[1,2,3,4]', 'Coupon C', 'Coupon-C', 4, 'Coupon C', 'Coupon C', 'Coupon C', 1, '2021-01-11 00:00:00', '2021-01-19 00:00:00', 14, '9.jpg', '2021-01-09 01:29:46', '2021-01-22 05:09:08'),
(4, 'coupon', 4, 2, '[1,2,3,4]', 'Coupon D', 'Coupon-D', 4, 'Coupon D', 'Coupon D', 'Coupon D', 1, '2021-01-07 00:00:00', '2021-01-15 00:00:00', 15, '3.jpg', '2021-01-09 01:29:46', '2021-01-22 03:18:40'),
(5, 'coupon', 4, 8, '[1,2,3,4]', 'Copuon E', 'Copuon-E', 8, 'Copuon E', 'Copuon E', 'Copuon E', 1, '2021-01-20 00:00:00', '2021-01-21 00:00:00', 14, '2.jpg', '2021-01-20 06:34:26', '2021-01-22 03:18:40'),
(6, 'coupon', 4, 8, '[3,4,2,1]', 'Amazon Discount is going on', 'Copuon-F', 8, 'Copuon F', 'Copuon F', 'Upto 50% Cashback', 1, '2021-01-15 00:00:00', '2021-01-16 00:00:00', 14, '62.jpg', '2021-01-20 06:34:26', '2021-01-28 08:32:49');

-- --------------------------------------------------------

--
-- Table structure for table `deal`
--

CREATE TABLE `deal` (
  `id` int(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `store` int(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `category` int(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `percent` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `tagline` mediumtext NOT NULL,
  `cutoff` varchar(255) NOT NULL,
  `current_value` varchar(255) NOT NULL,
  `status` int(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `deal`
--

INSERT INTO `deal` (`id`, `type`, `store`, `url`, `category`, `title`, `percent`, `image`, `tagline`, `cutoff`, `current_value`, `status`, `created_at`, `updated_at`) VALUES
(1, 'deal', 4, 'Deal-A', 1, 'Deal A', '20', '1016236_dominos-logo-png.png', 'Deal A', '30', '40', 1, '2021-01-09 01:31:59', '2021-01-22 03:18:40'),
(2, 'deal', 4, 'Deal-B', 2, 'Deal B', '10', 'Sterlomax_I.png', 'Deal B', '20', '30', 1, '2021-01-09 01:34:47', '2021-01-22 03:18:40'),
(3, 'deal', 4, 'Deal-C', 3, 'Deal C', '33', 'woodland-logo.png', 'Deal C', '22', '11', 1, '2021-01-09 01:35:53', '2021-01-22 03:18:40'),
(4, 'deal', 2, 'Deal-D', 4, 'Deal D', '11', 'unicef-uk-child-organization-unrwa-job-vacancy.jpg', '22', '33', '44', 1, '2021-01-09 01:35:53', '2021-01-22 03:18:40'),
(5, 'deal', 4, 'Deal-E', 1, 'Deal E', '11', 'Agoda.png', 'Deal E', '11', '22', 1, '2021-01-09 08:38:11', '2021-01-22 03:18:40'),
(6, 'deal', 4, 'Deal-F', 2, 'Deal F', '11', '610.png', 'Deal F', '11', '22', 1, '2021-01-09 08:38:11', '2021-01-22 03:18:40'),
(7, 'deal', 4, 'Deal-G', 3, 'Deal G', '11', '400x146xLogo1-1.png.pagespeed.ic.XSyyA5l4JX.png', 'Deal G', '11', '22', 1, '2021-01-09 08:38:11', '2021-01-22 03:18:40'),
(8, 'deal', 4, 'Deal-H', 4, 'Exciting Offers On Laptops', '11', '1.png', 'Tagline for deals', '11', '22', 1, '2021-01-09 08:42:43', '2021-01-22 05:48:07');

-- --------------------------------------------------------

--
-- Table structure for table `jobapplication`
--

CREATE TABLE `jobapplication` (
  `id` int(255) NOT NULL,
  `careerId` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `resume` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jobapplication`
--

INSERT INTO `jobapplication` (`id`, `careerId`, `name`, `email`, `phone`, `resume`, `created_at`, `updated_at`) VALUES
(1, 1, 'qqqqqq', 'qq@ww.com', '111111111', 'hiring-a-digital-marketing-agency.jpg', '2021-02-12 03:14:02', '2021-02-12 03:14:02'),
(2, 1, 'qqqqqq', 'qq@ww.com', '111111111', 'hiring-a-digital-marketing-agency.jpg', '2021-02-12 03:14:02', '2021-02-12 03:14:02'),
(3, 1, 'aaaaaaaaaa', 'aa@aa.com', '111111', 'node.docx', '2021-02-12 03:52:43', '2021-02-12 03:52:43'),
(4, 1, 'wwwwww', 'ww@ww.com', '111111111', 'node.docx', '2021-02-12 03:54:14', '2021-02-12 03:54:14');

-- --------------------------------------------------------

--
-- Table structure for table `leaderboard`
--

CREATE TABLE `leaderboard` (
  `id` int(255) NOT NULL,
  `userId` int(255) NOT NULL,
  `reward` int(255) NOT NULL,
  `redeemed` int(255) NOT NULL,
  `total` int(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `leaderboard`
--

INSERT INTO `leaderboard` (`id`, `userId`, `reward`, `redeemed`, `total`, `created_at`, `updated_at`) VALUES
(1, 2, 180, 0, 180, '2021-02-11 06:02:58', '2021-02-11 06:07:31'),
(2, 3, 500, 0, 500, '2021-02-11 06:02:58', '2021-02-11 06:02:58');

-- --------------------------------------------------------

--
-- Table structure for table `metas`
--

CREATE TABLE `metas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` mediumtext COLLATE utf8mb4_unicode_ci,
  `description` mediumtext COLLATE utf8mb4_unicode_ci,
  `keyword` mediumtext COLLATE utf8mb4_unicode_ci,
  `_token` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `metas`
--

INSERT INTO `metas` (`id`, `url`, `title`, `description`, `keyword`, `_token`, `created_at`, `updated_at`) VALUES
(1, 'default', 'Default Title', 'Default Description', 'Default Keyword', NULL, '2021-01-09 00:42:38', '2021-01-09 00:42:38');

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `id` int(255) NOT NULL,
  `title` mediumtext NOT NULL,
  `type` int(255) NOT NULL,
  `mandatory` int(255) NOT NULL,
  `options` mediumtext,
  `answer` mediumtext,
  `status` int(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`id`, `title`, `type`, `mandatory`, `options`, `answer`, `status`, `created_at`, `updated_at`) VALUES
(1, 'What is your favorite food', 2, 1, '[\"Pizza\",\"Sandwhich\",\"Chicken\",\"Salad\"]', '3', 1, '2021-02-10 08:04:58', '2021-02-10 11:24:41'),
(2, 'What is your favorite drink', 2, 1, '[\"lassi\",\"milkshake\",\"beer\",\"juice\"]', '3', 1, '2021-02-10 08:06:08', '2021-02-10 08:06:08'),
(3, 'What is your favorite meal', 2, 1, '[\"Breakfastqqqqq\",\"Lunchwwwwwww\",\"Dinnereeeeeee\",\"Late Nightrrrrrrrr\"]', '1', 1, '2021-02-10 08:06:08', '2021-02-10 11:18:01'),
(4, 'What is your favorite sports', 2, 1, '[\"Cricket\",\"Football\",\"Table tennis\",\"Badminton\"]', '3', 1, '2021-02-10 08:06:08', '2021-02-10 10:26:58'),
(5, 'What is your favorite Actor', 2, 1, '[\"Amitabh\",\"Hritik\",\"Salman\",\"Shahrukh\"]', '0', 1, '2021-02-10 08:06:08', '2021-02-10 08:06:08'),
(6, 'describe your days', 1, 1, NULL, '', 1, '2021-02-10 08:06:08', '2021-02-10 11:13:53');

-- --------------------------------------------------------

--
-- Table structure for table `special`
--

CREATE TABLE `special` (
  `id` int(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `status` int(255) NOT NULL,
  `tag` int(255) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `special`
--

INSERT INTO `special` (`id`, `image`, `url`, `status`, `tag`, `created_at`, `updated_at`) VALUES
(1, 'Feb-Special-2.jpg', '/yyyyyyyyyyyyy', 1, 1, '2021-01-20 11:29:57', '2021-01-25 08:30:41'),
(2, 'December-Special-2.jpg', '/zzzzzzzzzzz', 1, 1, '2021-01-20 11:43:33', '2021-01-25 08:30:41'),
(3, 'Feb-Special-1.jpg', '/ddddddd', 1, 1, '2021-01-20 12:03:45', '2021-01-25 08:30:41'),
(4, 'December-Special-1.jpg', '/hhhhhhhhhhhhhhh', 1, 1, '2021-01-20 12:03:45', '2021-01-25 08:30:41'),
(5, 'Coupons-11.jpg', '/ffffffff', 1, 2, '2021-01-20 12:05:35', '2021-01-25 08:30:41'),
(6, '62.jpg', '/ggggggggggg', 1, 2, '2021-01-20 12:05:35', '2021-01-25 08:30:41');

-- --------------------------------------------------------

--
-- Table structure for table `store`
--

CREATE TABLE `store` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `publisher` int(255) NOT NULL,
  `category` int(255) NOT NULL,
  `tags` mediumtext,
  `display_order` int(255) NOT NULL,
  `title` mediumtext NOT NULL,
  `description` mediumtext,
  `status` int(255) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `banner` varchar(255) NOT NULL,
  `tagline` mediumtext NOT NULL,
  `cashback` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `store`
--

INSERT INTO `store` (`id`, `name`, `url`, `publisher`, `category`, `tags`, `display_order`, `title`, `description`, `status`, `logo`, `banner`, `tagline`, `cashback`, `created_at`, `updated_at`) VALUES
(1, 'Store A', 'Store-A', 4, 1, '[24,25]', 1, 'Store A Title', '<p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>\n', 1, '1016236_dominos-logo-png.png', 'online-what-are-the-benefits-of-the-first-page-google.jpg', 'This is tagline for A', '10%', '2021-01-09 00:59:49', '2021-02-06 09:53:49'),
(2, 'Store B', 'Store-B', 4, 2, '[9,10,11,12,19,20,21,22,24,25]', 2, 'Store B Title', '<p>Bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</p>\n', 1, '5 Paisa.jpg', 'online-what-are-the-benefits-of-the-first-page-google.jpg', 'This is tagline for B', '20%', '2021-01-09 00:59:49', '2021-01-22 06:47:54'),
(3, 'Store C', 'Store-C', 4, 3, '[9,10,11,12,19,20,21,22,24,25]', 3, 'Store C Title', '<p>Ccccccccccccccccccccccccccc</p>\n', 1, '1mg.png', 'online-how-much-a-website-building-cost-should-be.jpg', 'This is tagline for C', '15%', '2021-01-09 00:59:49', '2021-01-22 06:47:54'),
(4, 'Store D', 'Store-D', 4, 4, '[9,10,11,12,19,20,21,22,24,25]', 4, 'Store D Title', '<p>Dddddddddddddddddddddddd</p>\n', 1, '1.png', 'online-how-much-a-website-building-cost-should-be.jpg', 'This is tagline for D', '50%', '2021-01-09 00:59:49', '2021-01-22 06:47:54'),
(5, 'BStore E', 'Store-E', 4, 7, '[9,10,11,12,19,20,21,22,24,25]', 5, 'Store E', '<p>Store E</p>\n', 1, 'AJIO 2.png', 'how-much-a-website-building-cost-should-be.jpg', 'Store E Tagline', 'Store E', '2021-02-06 07:36:45', '2021-02-08 02:34:30'),
(6, 'AStore F', 'Store-F', 4, 2, '[9,10,11,12,19,20]', 6, 'Store F', '<p>Store F</p>\n', 1, '1016236_dominos-logo-png.png', 'online-how-to-make-existing-website-mobile-friendly.jpg', 'Store F', 'Store F', '2021-02-06 07:36:45', '2021-02-08 02:34:30');

-- --------------------------------------------------------

--
-- Table structure for table `survey`
--

CREATE TABLE `survey` (
  `id` int(255) NOT NULL,
  `title` mediumtext NOT NULL,
  `questions` mediumtext NOT NULL,
  `status` int(255) NOT NULL,
  `reward` int(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `survey`
--

INSERT INTO `survey` (`id`, `title`, `questions`, `status`, `reward`, `created_at`, `updated_at`) VALUES
(1, 'title', '[3,2,2]', 1, 10, '2021-02-11 03:11:46', '2021-02-11 03:14:03'),
(2, 'title', '[3,2,2]', 1, 10, '2021-02-11 03:27:09', '2021-02-11 03:27:09'),
(3, 'title', '[3,2,2]', 1, 10, '2021-02-11 03:27:09', '2021-02-11 03:27:09'),
(4, 'title', '[3,2,2,3]', 1, 10, '2021-02-11 03:31:56', '2021-02-11 03:38:37');

-- --------------------------------------------------------

--
-- Table structure for table `surveyresponse`
--

CREATE TABLE `surveyresponse` (
  `id` int(255) NOT NULL,
  `surveyId` int(255) NOT NULL,
  `userId` int(255) NOT NULL,
  `answers` mediumtext NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `surveyresponse`
--

INSERT INTO `surveyresponse` (`id`, `surveyId`, `userId`, `answers`, `created_at`, `updated_at`) VALUES
(1, 4, 7, '[\"0\",\"1\",\"2\",\"3\"]', '2021-02-11 08:08:05', '2021-02-11 08:08:05'),
(2, 4, 7, '[\"0\",\"3\",\"2\",\"1\"]', '2021-02-11 08:10:35', '2021-02-11 08:10:35');

-- --------------------------------------------------------

--
-- Table structure for table `userprofile`
--

CREATE TABLE `userprofile` (
  `id` int(255) NOT NULL,
  `userId` int(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` mediumtext,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `password` mediumtext NOT NULL,
  `token` mediumtext NOT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `image` mediumtext,
  `referralcode` varchar(255) DEFAULT NULL,
  `refrence` int(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `role`, `phone`, `password`, `token`, `provider`, `image`, `referralcode`, `refrence`, `created_at`, `updated_at`) VALUES
(2, 'Test 2', 'test@test.com', 'Admin', '123456789', '$2a$10$suPGpzSFH6Hyk1utQDLreOnX8hzxzYfCWiaSw3ue7d2YpsbdFy8fq', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJuYW1lIjoiVGVzdCAyIiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwicm9sZSI6IkFkbWluIiwicmVmZXJyYWxjb2RlIjpudWxsfSwiaWF0IjoxNjEzNjU0NjcyfQ.1Wt8H5wvosXe-6J5vd37ZUcQMcIKz5OQXrdgmGNM7xU', NULL, NULL, NULL, NULL, '2021-01-08 23:57:37', '2021-02-18 07:53:57'),
(3, 'Test 3', 'test@test.com2', 'User', '123456789', '$2a$10$EItpK.pAZ2XXEtBa6lTrn..5unMUs4T7rOVjFUkJHHnImTS7Mw/7.', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJuYW1lIjoiVGVzdCAzIiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tMiIsInJvbGUiOiJVc2VyIiwicmVmZXJyYWxjb2RlIjoiMTYxMzAzNjc1NjI3OCJ9LCJpYXQiOjE2MTMwNjU2ODB9.xEoxxJIsxGI8VkB2RsP9-nUlZCgs9Mw9nfkbaSw6voc', NULL, NULL, '1613036756278', NULL, '2021-02-11 04:15:50', '2021-02-11 12:17:37'),
(7, 'Test', 'test@test.com3', 'User', '123456789', '$2a$10$7r0SlTk636RwIDwEu/guBuAdADwD3jB1wS7VO6mPAcuI8YlcJ9TEO', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJUZXN0IiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tMyIsInJvbGUiOiJVc2VyIiwicGhvbmUiOiIxMjM0NTY3ODkiLCJyZWZlcnJhbGNvZGUiOjE2MTMwNjg4ODIxMzl9LCJpYXQiOjE2MTMwNjg4ODJ9.cVFN2QP5ho_bveMH6fFehu8OpJFYiJZ3xan3hGsmOVU', NULL, NULL, '1613068882139', 3, '2021-02-11 13:11:16', '2021-02-11 13:11:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ads`
--
ALTER TABLE `ads`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `basic`
--
ALTER TABLE `basic`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `blogs_url_unique` (`url`);

--
-- Indexes for table `blog_metas`
--
ALTER TABLE `blog_metas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `blog_metas_url_unique` (`url`);

--
-- Indexes for table `career`
--
ALTER TABLE `career`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cashback`
--
ALTER TABLE `cashback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_forms`
--
ALTER TABLE `contact_forms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coupon`
--
ALTER TABLE `coupon`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `deal`
--
ALTER TABLE `deal`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobapplication`
--
ALTER TABLE `jobapplication`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leaderboard`
--
ALTER TABLE `leaderboard`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `metas`
--
ALTER TABLE `metas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `metas_url_unique` (`url`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `special`
--
ALTER TABLE `special`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `store`
--
ALTER TABLE `store`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `survey`
--
ALTER TABLE `survey`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `surveyresponse`
--
ALTER TABLE `surveyresponse`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userprofile`
--
ALTER TABLE `userprofile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ads`
--
ALTER TABLE `ads`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `basic`
--
ALTER TABLE `basic`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `blog_metas`
--
ALTER TABLE `blog_metas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `career`
--
ALTER TABLE `career`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `cashback`
--
ALTER TABLE `cashback`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contact_forms`
--
ALTER TABLE `contact_forms`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `coupon`
--
ALTER TABLE `coupon`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `deal`
--
ALTER TABLE `deal`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `jobapplication`
--
ALTER TABLE `jobapplication`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `leaderboard`
--
ALTER TABLE `leaderboard`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `metas`
--
ALTER TABLE `metas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `special`
--
ALTER TABLE `special`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `store`
--
ALTER TABLE `store`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `survey`
--
ALTER TABLE `survey`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `surveyresponse`
--
ALTER TABLE `surveyresponse`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `userprofile`
--
ALTER TABLE `userprofile`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
