const express = require("express");
const path = require("path");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const app = express();
const router = require("./src/router");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");


if (process.env.MODE === "prod") {
    app.use(awsServerlessExpressMiddleware.eventContext());
  }
app.use(bodyParser({ extended: true }));

//static paths
const publicPath = express.static(path.join(__dirname, "public"));
const viewsPath = path.join(__dirname, "templates/views");
const partialsPath = path.join(__dirname, "templates/partials");

// app.use(express.json());
app.use(publicPath);
app.use(router);

app.set("view engine", "hbs");
app.set("views", viewsPath);

hbs.registerPartials(partialsPath);

module.exports = app;
