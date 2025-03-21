const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

routes(app);

try {
  mongoose.connect(`${process.env.MONGODB}`);
  console.log("Connect to database success!");
} catch (error) {
  console.log(error);
}

app.listen(port, () => {
  console.log("Server is running in port ", +port);
});
