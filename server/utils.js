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

module.exports = {
  vehicleIsNew,
};
