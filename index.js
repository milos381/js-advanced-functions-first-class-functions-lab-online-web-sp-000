// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
    return array.slice(0,2)
}
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};
const selectingDrivers = [
    returnFirstTwoDrivers, 
    returnLastTwoDrivers
];
const createFareMultiplier = function (multiplyValue) {
    return function (value) {
        if (multiplyValue === 4) {
            return multiplyValue * 4;
        } else {
            return multiplyValue * value;
        }
      
    };
  };

  const fareDoubler = createFareMultiplier(2);

  const fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = function (drivers, whichDrivers) {
    return whichDrivers(drivers);
  };