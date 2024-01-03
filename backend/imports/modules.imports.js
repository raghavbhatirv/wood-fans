const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const colors = require("colors")
const asyncHandler = require("express-async-handler")
require("dotenv").config()

module.exports = {
     express,
     mongoose,
     bcrypt,
     asyncHandler,
     colors,
     cors,
     jwt,

}