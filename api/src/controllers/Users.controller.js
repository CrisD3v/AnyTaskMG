const {
  registUser,
  updateUser,
  deleteUserProfile,
} = require("../services/Users/Users.services");

const bcrypt = require("bcrypt");
const fs = require("fs-extra");


