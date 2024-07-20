"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | FlightAPI
------------------------------------------------------- */

const router = require("express").Router();
/* ------------------------------------------------------- */
const passenger = require("../controllers/passenger");
const idValidation = require("../middlewares/idValidation");
const permission = require("../middlewares/permissions");

//* "/passenger"
//* login olan kullanıcı kendi yolcularını görüntüleyebilir, yolcu oluşturabilir.
//? Yolcu editleme işlemini staff yada Admin yapabilir.
//! Yoclu silme işlemini Admin yapabilir.

router
  .route("/")
  .get(permission.isLogin, passenger.list)
  .post(permission.isLogin, passenger.create);

router
  .route("/:id")
  .all(idValidation)
  .get(permission.isLogin, passenger.read)
  .put(permission.isLoginStaffOrAdmin, passenger.update)
  .patch(permission.isLoginStaffOrAdmin, passenger.update)
  .delete(permission.isLoginAdmin, passenger.delete);

/* ------------------------------------------------------- */
module.exports = router;
