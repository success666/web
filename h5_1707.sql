/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5_1707

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-01-08 20:04:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `iphone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '', 'e10adc3949ba59abbe56e057f20f883e', null, null);
INSERT INTO `user` VALUES ('2', '18218661437', 'dc483e80a7a0bd9ef71d8cf973673924', null, null);
INSERT INTO `user` VALUES ('3', '13527007540', 'e13f3643cc57e9c43577229842080912', null, null);
INSERT INTO `user` VALUES ('4', '18218661430', 'adf00707a1c0154a9ad8edb57c8646f4', null, null);
INSERT INTO `user` VALUES ('5', '18288888888', 'dc483e80a7a0bd9ef71d8cf973673924', null, null);
INSERT INTO `user` VALUES ('6', '18288888889', 'af8f9dffa5d420fbc249141645b962ee', null, null);
INSERT INTO `user` VALUES ('7', '18266666666', 'af8f9dffa5d420fbc249141645b962ee', null, null);
INSERT INTO `user` VALUES ('8', '18288888866', 'af8f9dffa5d420fbc249141645b962ee', null, null);
INSERT INTO `user` VALUES ('9', 's64696717@qq.com', 'af8f9dffa5d420fbc249141645b962ee', null, null);
INSERT INTO `user` VALUES ('10', '13527092024', 'af8f9dffa5d420fbc249141645b962ee', null, null);
