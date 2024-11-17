const express = require("express");
const cors = require("cors");

const app = express();

const corsConfig = {
  origin: "http://127.0.0.1:5000",
  methods: "GET, POST, PUT, DELETE",
  allowHeaders: "Content-Type, Authorization",
  credentials: true,
};

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsConfig));



module.exports = app;
