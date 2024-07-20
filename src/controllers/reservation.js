"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | FlightAPI
------------------------------------------------------- */
const Reservation = require("../models/reservation");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "List Reservations"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
    const reservations = await res.getModelList(
      Reservation,
      {},
      {
        path: "createdId",
        select: "username email",
      }
    );
    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Reservation),
      totalRecords: reservations.length,
      reservations,
    });
  },
  create: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Create Reservation"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                }
            }
        */
    req.body.createdId = req.user._id;
    // console.log(req.user._id);
    const newReservation = await Reservation.create(req.body);

    res.status(201).send({
      error: false,
      newReservation,
    });
  },
  read: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Get Single Reservation"
        */
    const reservation = await Reservation.findOne({
      _id: req.params.id,
    }).populate("createdId");
    res.status(200).send({
      error: false,
      reservation,
    });
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Update Reservation"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                }
            }
        */
    req.body.createdId = req.user._id;
    const reservation = await Reservation.updateOne(
      { _id: req.params.id },
      req.body,
      {
        runValidators: true,
      }
    );
    res.status(202).send({
      error: false,
      reservation,
      updatedReservation: await Reservation.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Delete Reservation"
        */
    const reservation = await Reservation.deleteOne({ _id: req.params.id });
    res.status(reservation.deletedCount ? 204 : 404).send({
      error: !reservation.deletedCount,
      reservation,
    });
  },
};
