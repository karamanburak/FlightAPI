"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | FlightAPI
------------------------------------------------------- */

const router = require("express").Router();
/* ------------------------------------------------------- */
const passenger = require("../controllers/passenger");
const idValidation = require("../middlewares/idValidation");

//* "/passenger"
router.route("/").get(passenger.list).post(passenger.create);

router
  .route("/:id")
  .all(idValidation)
  .get(passenger.read)
  .put(passenger.update)
  .patch(passenger.update)
  .delete(passenger.delete);

/* ------------------------------------------------------- */
module.exports = router;
