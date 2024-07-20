"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | FlightAPI
------------------------------------------------------- */
const Flight = require("../models/flight");

module.exports = {
  list: async (req, res) => {
    const flights = await res.getModelList(Flight);
    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Flight),
      totalRecords: flights.length,
      flights,
    });
  },
  create: async (req, res) => {
    req.body.createdId = req.user._id;
    const newFlight = await Flight.create(req.body);

    res.status(201).send({
      error: false,
      newFlight,
    });
  },
  read: async (req, res) => {
    const flight = await Flight.findOne({ _id: req.params.id }).populate(
      "createdId"
    );
    res.status(200).send({
      error: false,
      flight,
    });
  },
  update: async (req, res) => {
    req.body.createdId = req.user._id;
    const flight = await Flight.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });
    res.status(202).send({
      error: false,
      flight,
      updatedFlight: await Flight.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    const flight = await Flight.deleteOne({ _id: req.params.id });
    res.status(flight.deletedCount ? 204 : 404).send({
      error: !flight.deletedCount,
      flight,
    });
  },
};
