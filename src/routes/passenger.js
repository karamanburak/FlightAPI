"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | FlightAPI
------------------------------------------------------- */

const router = require("express").Router();
/* ------------------------------------------------------- */
const Passenger = require("../models/passenger");
const passenger = require("../controllers/passenger");
const idValidation = require("../middlewares/idValidation");
const permission = require("../middlewares/permissions");

//* "/passenger"
//* login olan kullanıcı kendi yolcularını görüntüleyebilir, yolcu oluşturabilir.
//? Yolcu editleme işlemini staff yada Admin yapabilir.
//! Yoclu silme işlemini Admin yapabilir.
const getModel = (req, res, next) => {
  req.model = Passenger;
  next();
};

router
  .route("/")
  .get(permission.isLogin, passenger.list)
  .post(permission.isLogin, passenger.create);

router
  .route("/:id")
  .all(idValidation)
  .get(
    permission.isLogin,
    getModel,
    permission.isAdminOrStaffOrOwn,
    passenger.read
  )
  .put(permission.isLoginStaffOrAdmin, passenger.update)
  .patch(permission.isLoginStaffOrAdmin, passenger.update)
  .delete(permission.isLoginAdmin, passenger.delete);

/* ------------------------------------------------------- */
module.exports = router;
