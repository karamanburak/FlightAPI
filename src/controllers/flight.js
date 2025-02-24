"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | FlightAPI
------------------------------------------------------- */
const Flight = require("../models/flight");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Flights"]
            #swagger.summary = "List Flights"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
    const flights = await res.getModelList(
      Flight,
      {},
      {
        path: "createdId",
        select: "username email",
      }
    );
    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Flight),
      totalRecords: flights.length,
      flights,
    });
  },
  create: async (req, res) => {
    /*
            #swagger.tags = ["Flights"]
            #swagger.summary = "Create Flight"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                }
            }
        */
    req.body.createdId = req.user._id;
    // console.log(req.user._id);
    const newFlight = await Flight.create(req.body);

    res.status(201).send({
      error: false,
      newFlight,
    });
  },
  read: async (req, res) => {
    /*
            #swagger.tags = ["Flights"]
            #swagger.summary = "Get Single Flight"
        */
    const flight = await Flight.findOne({ _id: req.params.id }).populate(
      "createdId"
    );
    res.status(200).send({
      error: false,
      flight,
    });
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Flights"]
            #swagger.summary = "Update Flight"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                }
            }
        */
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
    /*
            #swagger.tags = ["Flights"]
            #swagger.summary = "Delete Flight"
        */
    const flight = await Flight.deleteOne({ _id: req.params.id });
    res.status(flight.deletedCount ? 204 : 404).send({
      error: !flight.deletedCount,
      flight,
    });
  },
};
