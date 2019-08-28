export function stopsToPoints(stopsList) {
  return stopsList.reduce((acc, stop) => acc.concat([stop.x, stop.y]), []);
}

export const northStops = [
  { name: 'Oak Grove' },
  { name: 'Malden Center' },
  { name: 'Wellington' },
  { name: 'Assembly' },
  { name: 'Sullivan Square' },
  { name: 'Community College' },
  { name: 'North Station' },
  { name: 'Haymarket' },
  { name: 'State' },
];

export const southStops = [
  { name: 'Downtown Crossing' },
  { name: 'Chinatown' },
  { name: 'Tufts Medical Center' },
  { name: 'Back Bay' },
  { name: 'Massachusetts Avenue' },
  { name: 'Ruggles' },
  { name: 'Roxbury Crossing' },
  { name: 'Jackson Square' },
  { name: 'Stony Brook' },
  { name: 'Green Street' },
  { name: 'Forest Hills' },
];

export function computeNorthStopCoords(stops, start_x, start_y, offset) {
  const x = start_x;
  let y = start_y;
  return stops.map((stop) => {
    stop.x = x;
    stop.y = y;
    y += offset;
    return stop;
  });
}


export function computeSouthStopCoords(stops, start_x, start_y, north_offset, south_offset) {
  const northCoords = computeNorthStopCoords(northStops, start_x, start_y, north_offset);
  const finalNorth = northCoords.slice(northCoords.length - 1)[0];

  const final_x = finalNorth.x;
  const final_y = finalNorth.y;

  let x = final_x - south_offset;
  let y = final_y + south_offset;
  return stops.map((stop) => {
    stop.x = x;
    stop.y = y;
    x -= south_offset;
    y += south_offset;
    return stop;
  });
}

export function collectStops() {
  return [...computeNorthStopCoords(northStops, 500, 40, 40), ...computeSouthStopCoords(southStops, 500, 40, 40, 29)];
}

export function collectPoints(stops) {
  return stops.reduce((acc, stop) => acc.concat([stop.x, stop.y]), []);
}
