const express = require("express");
const usersController = require("../controllers/userctrl");
const isAuthenticated = require("../middlewares/isAuth");
const categoryController = require("../controllers/categoryctrl");
const transactionController = require("../controllers/transactionctrl");
const transactionRouter = express.Router();

//!ADD
transactionRouter.post(
  "/api/v1/transactions/create",
  isAuthenticated,
  transactionController.create
);
//! LISTS
transactionRouter.get(
  "/api/v1/transactions/lists",
  isAuthenticated,
  transactionController.getFilteredTransactions
);
//! UPDATE
transactionRouter.put(
  "/api/v1/transactions/update/:id",
  isAuthenticated,
  transactionController.update
);
//! DELETE
transactionRouter.delete(
  "/api/v1/transactions/delete/:id",
  isAuthenticated,
  transactionController.delete
);

module.exports = transactionRouter;
