"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | FlightAPI
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// ROUTER INDEX:

// URL: /

// auth:
router.use("/auth", require("./auth"));
// user:
router.use("/users", require("./user"));

// document:
router.use("/documents", require("./documents"));

/* ------------------------------------------------------- */
module.exports = router;
