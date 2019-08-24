function vehicleIsNew(vehicleNum) {
// https://github.com/mathcolo/tracker-cache/blob/226a8550ef73385defdac6d61050b973f1d8198d/Fleet.py
  return vehicleNum >= 1400 && vehicleNum <= 1551;
}

module.exports = {
  vehicleIsNew,
};
