/**
 * Determines if vehicle is new or not
 * Based on "new" definition in https://github.com/mathcolo/tracker-cache/blob/226a8550ef73385defdac6d61050b973f1d8198d/Fleet.py
 *
 * @param {number} vehicleNum The vehicle label converted to number
 * @returns {boolean}
 */
function vehicleIsNew(vehicleNum) {
  return vehicleNum >= 1400 && vehicleNum <= 1551;
}

/**
 * Filters vehicles array from API response down to only data relative to "new" vehicles
 *
 * @param {Array} vehicles raw vehicle object from API response
 * @returns {Array} filtered vehicles array
 */
function filterVehicles(vehicles) {
  return vehicles.filter((v) => vehicleIsNew(Number(v.attributes.label)));
}

/**
 * Determines stop direction based on vehicle's direction id
 * Based on similar function from newtrains.today source code
 * https://github.com/mathcolo/tracker-static/blob/8bb4fc0b02db501566e37ab58d2232259d1031d5/src/nl_functions.js#L21
 *
 * @param {object} vehicle One nested vehicle object from response array
 * @returns {string} direction - options: northbound, southbound
 */
function getVehicleDirection(vehicle) {
  return vehicle.attributes.direction_id ? "northbound" : "southbound";
}

/**
 * Determines stop name by iterating through included stop data
 * and matching stop id with nested vehicle's stop id
 *
 * @param {object} vehicle One nested vehicle object from response array
 * @param {Array} stopData Array of nested stop data - "included" from API response
 * @returns {string} stop name
 */
function getStopName(vehicle, stopData) {
  return stopData.find((stop) => stop.id === vehicle.relationships.stop.data.id)
    .attributes.name;
}

function getStopColor(vehicle) {
  const status = vehicle.attributes.current_status;
  if (status === "IN_TRANSIT_TO" || status === "INCOMING_AT") {
    return "#00ff00";
  }
  if (status === "STOPPED_AT") {
    return "#ff0000";
  }
  return "#d6d6d6";
}

/**
 * Parses singular vehicle data from API into object w/ only necessary keys
 *
 * @param {object} vehicle One nested vehicle object from response array
 * @param {string} stopName Previously returned stopName
 * @param {string} direction Previously returned direction - options: northbound, southbound
 * @param {string} color Previously returned color hex - options: #00ff00, #ff0000, #d6d6d6
 * @returns {object} limited keys: vehicleNum, status, stopId, direction, stopName, color
 */
function getDataPerVehicle(vehicle, stopName, direction, color) {
  return {
    vehicleNum: vehicle.attributes.label,
    status: vehicle.attributes.current_status,
    stopId: vehicle.relationships.stop.data.id,
    direction,
    color,
    stopName,
  };
}

/**
 * Orchestrator function to parse API response and return necessary data for frontend
 *
 * @param {object} resData raw response data from MBTA API
 * two keys:
 * data - array of orange line vehicle data
 * included - array of orange line stop data
 * @returns {Array} array of necessary vehicle data
 */
function getVehiclesAndStops(resData) {
  const { data: vehicleData, included: stopData } = resData;
  const newVehicles = filterVehicles(vehicleData);
  const final = newVehicles.map((v) => {
    const stopName = getStopName(v, stopData);
    const direction = getVehicleDirection(v);
    const color = getStopColor(v);
    return getDataPerVehicle(v, stopName, direction, color);
  });
  return final;
}

module.exports = {
  getVehiclesAndStops,
  vehicleIsNew,
  filterVehicles,
  getStopName,
};
