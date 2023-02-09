const functions = require("firebase-functions");
const express = require("express");

const app = express();

app.use(express.static("public"));
// Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

exports.app = functions.https.onRequest(app);
