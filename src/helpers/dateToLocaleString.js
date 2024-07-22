"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | FlightAPI
------------------------------------------------------- */

module.exports = (locale, date) => {
  return date.toLocaleString(locale, {
    dateStyle: "full",
    timeStyle: "medium",
  });
};
