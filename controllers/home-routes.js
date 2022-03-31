
const router = require("express").Router();
const sequelize = require("../config/connection.js");
const { User, } = require("../models");


router.get("/")