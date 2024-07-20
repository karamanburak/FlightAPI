"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | FlightAPI
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");

const PassengerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    gender: {
      type: String,
      enum: [null, "M", "F"],
      default: null,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: [true, "Email already exists! Email field must be unique!"],
      index: true,
      validate: [
        (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
        "Email type is not correct.",
      ],
    },
    createdId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    collection: "passengers",
    timestamps: true,
  }
);

module.exports = mongoose.model("Passenger", PassengerSchema);
