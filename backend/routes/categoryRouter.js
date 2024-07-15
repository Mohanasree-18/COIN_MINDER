const express = require("express");
const usersController = require("../controllers/userctrl");
const isAuthenticated = require("../middlewares/isAuth");
const categoryController = require("../controllers/categoryctrl");
const categoryRouter = express.Router();

//!ADD
categoryRouter.post(
  "/api/v1/categories/create",
  isAuthenticated,
  categoryController.create
);
//! LISTS
categoryRouter.get(
  "/api/v1/categories/lists",
  isAuthenticated,
  categoryController.lists
);
//! UPDATE
categoryRouter.put(
  "/api/v1/categories/update/:categoryId",
  isAuthenticated,
  categoryController.update
);
//! DELETE
categoryRouter.delete(
  "/api/v1/categories/delete/:id",
  isAuthenticated,
  categoryController.delete
);

module.exports = categoryRouter;
