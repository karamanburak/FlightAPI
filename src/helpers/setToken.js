"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | FlightAPI
------------------------------------------------------- */

const jwt = require("jsonwebtoken");

module.exports = function (userData, isRefresh = true) {
  const data = {
    accessData: userData.toJSON(),
    refreshData: { _id: userData.id, password: userData.password },
    accessTime: process.env.ACCESS_EXP || "30m",
    refreshTime: process.env.REFRESH_eXP || "3d",
  };
  return {
    access: jwt.sign(data.accessData, process.env.ACCESS_KEY, {
      expiresIn: data.accessTime,
    }),
    refresh: isRefresh
      ? jwt.sign(data.refreshData, process.env.REFRESH_KEY, {
          expiresIn: data.refreshTime,
        })
      : undefined,
  };
};
