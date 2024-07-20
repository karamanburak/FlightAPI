"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | FlightAPI
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
const flight = require("../controllers/flight");
const idValidation = require("../middlewares/idValidation");
const permission = require("../middlewares/permissions");

//* "/flights"

//* Login olan herkes uçuşları listeleyebilir.
//! Staff yada Admin olan post,put,patch işlemlerini yapabilir.
//? sadece admin delete işlemini yapabilir.

router
  .route("/")
  .get(permission.isLogin, flight.list)
  .post(permission.isStaffOrAdmin, flight.create);

router
  .route("/:id")
  .all(idValidation)
  .get(flight.read)
  .put(permission.isLoginStaffOrAdmin, flight.update)
  .patch(permission.isLoginStaffOrAdmin, flight.update)
  .delete(permission.isLoginAdmin, flight.delete);

/* ------------------------------------------------------- */
module.exports = router;
