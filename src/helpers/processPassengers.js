module.exports = async (Model, passengerInfos, userId) => {
  let passengerIds = [],
    passenger = {};

  for (let passengerInfo of passengerInfos) {
    if (typeof passengerInfo == "object") {
      passenger = await Model.findOne({ email: passengerInfo.email }); //* reelde email degil unique olan tckn/passportId
      if (!passenger) {
        // passengerInfo = { ...passengerInfo, createdId: req.user._id };
        Object.assign(passengerInfo, { createdId: userId }); //* passenger create ederken benden createdId değeri bekliyor.

        passenger = await Model.create(passengerInfo);
      }
    } else {
      //* string olarak id bilgisi gelirse
      passenger = await Model.findOne({ _id: passengerInfo }); //* id check
    }

    if (passenger) passengerIds.push(passenger._id);
  }

  return passengerIds;
};
