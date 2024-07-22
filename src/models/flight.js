"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | FlightAPI
------------------------------------------------------- */

const { mongoose } = require("../configs/dbConnection");

const FlightSchema = new mongoose.Schema(
  {
    flightNumber: {
      //IS-AN-001
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    airline: {
      type: String,
      trim: true,
      required: true,
    },
    // departure: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "City",
    //     required:true
    // },
    departure: {
      type: String,
      trim: true,
      required: true,
    },
    departureDate: {
      type: Date,
      required: true,
    },
    // arrival: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "City",
    //     required:true
    // },
    arrival: {
      type: String,
      trim: true,
      required: true,
    },
    arrivalDate: {
      type: Date,
      required: true,
    },
    createdId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    collection: "flights",
    timestamps: true,
  }
);

//* init => veriyi databaseden cektikten sonra frontende teslim edecekken db de olmayan bir veriyi araya bir islem yaparak veri eklemeye yarar.
FlightSchema.pre("init", function (document) {
  console.log(document);
  // document.user = "burak";
  document.departureDateStr = document.departureDate.toLocaleString("de-DE", {
    dateStyle: "full",
    timeStyle: "medium",
  });
  document.arrivalDateStr = document.arrivalDate.toLocaleString("de-DE", {
    dateStyle: "full",
    timeStyle: "medium",
  });
});

module.exports = mongoose.model("Flight", FlightSchema);
