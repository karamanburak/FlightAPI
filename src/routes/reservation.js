"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | FlightAPI
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
const Reservation = require("../models/reservation");
const reservation = require("../controllers/reservation");
const idValidation = require("../middlewares/idValidation");
const permission = require("../middlewares/permissions");

router.use(permission.isLogin);

//* "/reservations"

//* Login olan kullanıcılar delete hariç tüm işlemleri yapabilecek.
//? Listeleme işlemini Staf veya Adminse tüm rezervasyonlar, Staff veya Admin değilse sadece kendisine ait rezervasyonlar
//! Update işlemini Staf veya Adminse tüm rezervasyonlar, Staff veya Admin değilse sadece kendisine ait rezervasyonlar
// Delete işlemini sadece Admin yapabilir.

const getModel = (req, res, next) => {
  req.model = Reservation;
  next();
};

router.route("/").get(reservation.list).post(reservation.create);

router
  .route("/:id")
  .all(idValidation)
  .get(getModel, permission.isAdminOrStaffOrOwn, reservation.read)
  .put(getModel, permission.isAdminOrStaffOrOwn, reservation.update)
  .patch(getModel, permission.isAdminOrStaffOrOwn, reservation.update)
  .delete(permission.isAdmin, reservation.delete);

/* ------------------------------------------------------- */
module.exports = router;
