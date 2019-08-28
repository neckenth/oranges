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
 * Maps API response data to limited # of human-readable keys relevant for frontend
 *
 * @param {object} vehicle The nested vehicle object from response array
 * @param {array} stopData "included" array of stop metadata objects from API response
 * @returns {object}
 */
function narrowData(vehicle, stopData) {
  const stopName = stopData.find((stop) => stop.id === vehicle.relationships.stop.data.id).attributes.name;

  return {
    vehicleNum: vehicle.attributes.label,
    status: vehicle.attributes.current_status,
    stopId: vehicle.relationships.stop.data.id,
    // https://github.com/mathcolo/tracker-static/blob/8bb4fc0b02db501566e37ab58d2232259d1031d5/src/nl_functions.js#L21
    direction: vehicle.attributes.direction_id ? 'northbound' : 'southbound',
    stopName,
  };
}

module.exports = {
  vehicleIsNew,
  narrowData,
};
