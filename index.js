// Code your solution in this file
// drivers = [d1, d2, d3, etc]
// 'd1'
function findMatching(drivers, string) {
  return drivers.filter(function(driver) {return string.toLowerCase() === driver.toLowerCase()});
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(driver) {return string.toLowerCase().charAt(0) === driver.toLowerCase().charAt(0)});
}

function matchName(drivers, string) {
  return drivers.filter(function(driver) {return string.toLowerCase() === driver.name.toLowerCase()});
}
