const express = require("express");
const usersController = require("../controllers/userctrl");
const userRouter = express.Router();
const isAuthenticated = require("../middlewares/isAuth");

//!Register
userRouter.post("/api/v1/users/register", usersController.register);
//! Login
userRouter.post("/api/v1/users/login", usersController.login);
//!PROFILE
userRouter.get(
  "/api/v1/users/profile",
  isAuthenticated,
  usersController.profile
);
//!CHANGE PASSWORD
userRouter.put(
  "/api/v1/users/change-password",
  isAuthenticated,
  usersController.changeUserPassword
);
//!UPDATE USER PROFILE
userRouter.put(
  "/api/v1/users/update-profile",
  isAuthenticated,
  usersController.updateUserProfile
);

module.exports = userRouter;
