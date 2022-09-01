const express = require("express")
const morgan = require("morgan")
const createError = require("http-errors")
const cors = require("cors");

const app = express();

// database connection
require("./config/database");

const PORT = 4001;

// middleware
app.use(express.static(__dirname));
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());
app.use(morgan("dev"))



app.get("/", (req, res, next) => {
  try {
    res.status(200).json({"home": "Home page"});
  } catch (error) {
    next(error);
  }
});

const StudentRoute = require("./routes/StudentRoute");
const CollegeRoute = require("./routes/CollegeRoute");

app.use("/students", StudentRoute);
app.use("/colleges", CollegeRoute);


app.use(async (req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message,
    error: err,
  });
});


app.listen(PORT, ()=> console.log("Server is listening on port: "+ PORT))
