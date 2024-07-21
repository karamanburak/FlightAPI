"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | FlightAPI
------------------------------------------------------- */

const User = require("../models/user");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Users"]
            #swagger.summary = "List Users"
            #swagger.description = `
                You can send query with endpoint for filter[], search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
    const users = await res.getModelList(User);
    res.status(200).send({
      error: false,
      details: await res.getModelListDetails,
      totalRecords: users.length,
      users,
    });
  },
  //! CRUD(Create-Read-Update-Delete)
  create: async (req, res) => {
    /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Create User"
        */

    console.log(req.file);
    if (req.file) {
      req.body.avatar = "/uploads/" + req.file.filename;
    }

    const newUser = await User.create(req.body);

    res.status(201).send({
      error: false,
      newUser,
    });
  },
  read: async (req, res) => {
    /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Get Single User"
        */
    const user = await User.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      user,
    });
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Update User"
        */

    //* Kullanici statusu degistirme yetkisi sadece adminde olacak
    if (!req.user.isAdmin) {
      delete req.body.isAdmin;
      delete req.body.isStaff;
      delete req.body.isActive;
    }
    if (req.file) {
      req.body.avatar = "/uploads/" + req.file.filename;
    }
    const user = await User.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      user,
      updatedUser: await User.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Delete User"
        */
    const users = await User.deleteOne({ _id: req.params.id });
    res.status(users.deletedCount ? 204 : 404).send({
      error: !users.deletedCount,
      users,
      message: "User not found!",
    });
  },
};
