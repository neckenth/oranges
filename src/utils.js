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

export const stops = [...northStops, ...southStops];

export function findStopped(trains, direction) {
  return trains.map((elem) => (elem.status === 'STOPPED_AT' && elem.direction === direction
    ? elem.stopName
    : null));
}

export function findInTransit(trains, direction) {
  return trains.map((elem) => ((elem.status === 'IN_TRANSIT_TO' || elem.status === 'INCOMING_AT')
    && elem.direction === direction
    ? elem.stopName
    : null));
}
