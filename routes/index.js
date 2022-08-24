const express = require("express");
const { CategoryRoute } = require("./category");

const { productsroute } = require("./products");
const { authRoute } = require("./auth");

module.exports = { CategoryRoute, productsroute, authRoute };
