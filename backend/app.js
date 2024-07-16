const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const categoryRouter = require("./routes/categoryRouter");
const transactionRouter = require("./routes/transactionRouter");
//!connecting mongoose
mongoose
  .connect(
    ""
  )
  .then(() => console.log("mongoose connected sucessfully"))
  .catch((e) => console.log(e));

//!CORS CONFIGURATION
const corsOptions = {
  Origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));

//!MIDDLEWARES
app.use(express.json()); //?parses incoming data
app.use(errorHandler); //?error handler middleware

//!ROUTES
app.use("/", userRouter); // ROUTE to user control
app.use("/", categoryRouter); //ROUTE TO CATEGORY CONTROL
app.use("/", transactionRouter);
// ... rest of your code

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("server is running"));
