"use strict";
const { CustomError } = require("../errors/customError");
/* -------------------------------------------------------
    NODEJS EXPRESS | FlightAPI
------------------------------------------------------- */
const Passenger = require("../models/passenger");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Passengers"]
            #swagger.summary = "List Passengers"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

    let customFilter = {};

    if (!req.user.isAdmin && !req.user.isStaff) {
      customFilter = { createdId: req.user._id };
    }

    const data = await res.getModelList(Passenger, customFilter);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Passenger, customFilter),
      data,
    });
  },
  create: async (req, res) => {
    /*
            #swagger.tags = ["Passengers"]
            #swagger.summary = "Create Passenger"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                }
            }
        */
    req.body.createdId = req.user._id;

    const data = await Passenger.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },
  read: async (req, res) => {
    /*
            #swagger.tags = ["Passengers"]
            #swagger.summary = "Get Single Passenger"
        */

    //* isAdminOrStaffOrOwn
    if (!req.user.isAdmin && !req.user.isStaff) {
      const checkData = await Passenger.findOne({ _id: req.params.id });
      if (checkData.createdId?.toString() != req.user._id.toString()) {
        throw new CustomError(
          "NoPermission!You must be admin or staff or own!"
        );
      }
    }

    const data = await Passenger.findOne({ _id: req.params.id }).populate(
      "createdId"
    );

    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Passengers"]
            #swagger.summary = "Update Passenger"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                }
            }
        */
    req.body.createdId = req.user._id;
    const data = await Passenger.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });
    res.status(202).send({
      error: false,
      data,
      new: await Passenger.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    /*
            #swagger.tags = ["Passengers"]
            #swagger.summary = "Delete Passenger"
        */
    const data = await Passenger.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
