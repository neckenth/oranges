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

export function computeNorthStopCoords(stops, startX, startY, offset) {
  const x = startX;
  let y = startY;
  return stops.map((stop) => {
    stop.x = x;
    stop.y = y;
    y += offset;
    return stop;
  });
}


export function computeSouthStopCoords(stops, startX, startY, northOffset, southOffset) {
  const northCoords = computeNorthStopCoords(northStops, startX, startY, northOffset);
  const finalNorth = northCoords.slice(northCoords.length - 1)[0];

  const finalX = finalNorth.x;
  const finalY = finalNorth.y;

  let x = finalX - southOffset;
  let y = finalY + southOffset;
  return stops.map((stop) => {
    stop.x = x;
    stop.y = y;
    x -= southOffset;
    y += southOffset;
    return stop;
  });
}

export function collectStops() {
  return [
    ...computeNorthStopCoords(northStops, 800, 40, 40),
    ...computeSouthStopCoords(southStops, 800, 40, 40, 29),
  ];
}

export function collectPoints(stops) {
  return stops.reduce((acc, stop) => acc.concat([stop.x, stop.y]), []);
}

export function determineColor(stop, trains) {
  const activeStop = trains.find((t) => t.stopName === stop.name);
  if (!activeStop) {
    return 'white';
  } if (activeStop.status === 'STOPPED_AT') {
    return 'red';
  } if (activeStop.status === 'IN_TRANSIT_TO') {
    return 'yellow';
  } if (activeStop.status === 'INCOMING_AT') {
    return 'green';
  }
}
