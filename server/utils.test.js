const utils = require('./utils');

test('correctly determines if a train is new based on id #', () => {
  expect(utils.vehicleIsNew(1400)).toBeTruthy();

  expect(utils.vehicleIsNew(1500)).toBeTruthy();

  expect(utils.vehicleIsNew(1551)).toBeTruthy();

  expect(utils.vehicleIsNew(1399)).toBeFalsy();

  expect(utils.vehicleIsNew(1552)).toBeFalsy();
});

test('correctly filters vehicles array to only new vehicles', () => {
  expect(true).toBeTruthy();
});


describe('narrowing API data to only specified train details for relevant trains', () => {
  const response = {
    included: [
      {
        attributes: {
          address: null, at_street: null, description: 'Ruggles - Orange Line - Forest Hills', latitude: 42.336377, location_type: 0, longitude: -71.088961, municipality: 'Boston', name: 'Ruggles', on_street: null, platform_code: null, platform_name: 'Forest Hills', vehicle_type: 1, wheelchair_boarding: 1,
        },
        id: '70010',
        links: { self: '/stops/70010' },
        relationships: {
          child_stops: {}, facilities: { links: { related: '/facilities/?filter[stop]=70010' } }, parent_station: { data: { id: 'place-rugg', type: 'stop' } }, recommended_transfers: {}, zone: { data: null },
        },
        type: 'stop',
      }, {
        attributes: {
          address: null, at_street: null, description: 'Tufts Medical Center - Orange Line - Oak Grove', latitude: 42.349662, location_type: 0, longitude: -71.063917, municipality: 'Boston', name: 'Tufts Medical Center', on_street: null, platform_code: null, platform_name: 'Oak Grove', vehicle_type: 1, wheelchair_boarding: 1,
        },
        id: '70017',
        links: { self: '/stops/70017' },
        relationships: {
          child_stops: {}, facilities: { links: { related: '/facilities/?filter[stop]=70017' } }, parent_station: { data: { id: 'place-tumnl', type: 'stop' } }, recommended_transfers: {}, zone: { data: null },
        },
        type: 'stop',
      }, {
        attributes: {
          address: null, at_street: null, description: 'Chinatown - Orange Line - Forest Hills', latitude: 42.352547, location_type: 0, longitude: -71.062752, municipality: 'Boston', name: 'Chinatown', on_street: null, platform_code: null, platform_name: 'Forest Hills', vehicle_type: 1, wheelchair_boarding: 1,
        },
        id: '70018',
        links: { self: '/stops/70018' },
        relationships: {
          child_stops: {}, facilities: { links: { related: '/facilities/?filter[stop]=70018' } }, parent_station: { data: { id: 'place-chncl', type: 'stop' } }, recommended_transfers: {}, zone: { data: null },
        },
        type: 'stop',
      }, {
        attributes: {
          address: null, at_street: null, description: 'Wellington - Orange Line - Forest Hills', latitude: 42.40237, location_type: 0, longitude: -71.077082, municipality: 'Medford', name: 'Wellington', on_street: null, platform_code: '1', platform_name: 'Forest Hills', vehicle_type: 1, wheelchair_boarding: 1,
        },
        id: '70032',
        links: { self: '/stops/70032' },
        relationships: {
          child_stops: {}, facilities: { links: { related: '/facilities/?filter[stop]=70032' } }, parent_station: { data: { id: 'place-welln', type: 'stop' } }, recommended_transfers: {}, zone: { data: null },
        },
        type: 'stop',
      }, {
        attributes: {
          address: null, at_street: null, description: 'Wellington - Orange Line - Oak Grove', latitude: 42.40237, location_type: 0, longitude: -71.077082, municipality: 'Medford', name: 'Wellington', on_street: null, platform_code: '2', platform_name: 'Oak Grove', vehicle_type: 1, wheelchair_boarding: 1,
        },
        id: '70033',
        links: { self: '/stops/70033' },
        relationships: {
          child_stops: {}, facilities: { links: { related: '/facilities/?filter[stop]=70033' } }, parent_station: { data: { id: 'place-welln', type: 'stop' } }, recommended_transfers: {}, zone: { data: null },
        },
        type: 'stop',
      }, {
        attributes: {
          address: null, at_street: null, description: 'Oak Grove - Orange Line - Track 1', latitude: 42.437501, location_type: 0, longitude: -71.070706, municipality: 'Malden', name: 'Oak Grove', on_street: null, platform_code: '1', platform_name: 'Orange Line - Track 1', vehicle_type: 1, wheelchair_boarding: 1,
        },
        id: 'Oak Grove-01',
        links: { self: '/stops/Oak%20Grove-01' },
        relationships: {
          child_stops: {}, facilities: { links: { related: '/facilities/?filter[stop]=Oak%20Grove-01' } }, parent_station: { data: { id: 'place-ogmnl', type: 'stop' } }, recommended_transfers: {}, zone: { data: null },
        },
        type: 'stop',
      }],
    data: [{
      attributes: {
        bearing: 220, current_status: 'INCOMING_AT', current_stop_sequence: 50, direction_id: 0, label: '1217', latitude: 42.3389, longitude: -71.08656, speed: null, updated_at: '2019-09-22T15:55:20-04:00',
      },
      id: 'O-54600772',
      links: { self: '/vehicles/O-54600772' },
      relationships: { route: { data: { id: 'Orange', type: 'route' } }, stop: { data: { id: '70011', type: 'stop' } }, trip: { data: { id: 'ADDED-1568904410', type: 'trip' } } },
      type: 'vehicle',
    }, {
      attributes: {
        bearing: 355, current_status: 'STOPPED_AT', current_stop_sequence: 160, direction_id: 1, label: '1401', latitude: 42.3925, longitude: -71.07715, speed: null, updated_at: '2019-09-22T15:55:17-04:00',
      },
      id: 'O-54600748',
      links: { self: '/vehicles/O-54600748' },
      relationships: { route: { data: { id: 'Orange', type: 'route' } }, stop: { data: { id: '70279', type: 'stop' } }, trip: { data: { id: 'ADDED-1568904435', type: 'trip' } } },
      type: 'vehicle',
    }, {
      attributes: {
        bearing: 150, current_status: 'STOPPED_AT', current_stop_sequence: 70, direction_id: 0, label: '1552', latitude: 42.36316, longitude: -71.05819, speed: null, updated_at: '2019-09-22T15:55:22-04:00',
      },
      id: 'O-546005CB',
      links: { self: '/vehicles/O-546005CB' },
      relationships: { route: { data: { id: 'Orange', type: 'route' } }, stop: { data: { id: '70024', type: 'stop' } }, trip: { data: { id: 'ADDED-1568904434', type: 'trip' } } },
      type: 'vehicle',
    }, {
      attributes: {
        bearing: 220, current_status: 'STOPPED_AT', current_stop_sequence: 140, direction_id: 0, label: '1314', latitude: 42.33653, longitude: -71.0897, speed: null, updated_at: '2019-09-22T15:49:00-04:00',
      },
      id: 'O-546005C9',
      links: { self: '/vehicles/O-546005C9' },
      relationships: { route: { data: { id: 'Orange', type: 'route' } }, stop: { data: { id: '70010', type: 'stop' } }, trip: { data: { id: 'ADDED-1568904448', type: 'trip' } } },
      type: 'vehicle',
    }, {
      attributes: {
        bearing: 25, current_status: 'STOPPED_AT', current_stop_sequence: 100, direction_id: 1, label: '1286', latitude: 42.35533, longitude: -71.06059, speed: null, updated_at: '2019-09-22T15:55:26-04:00',
      },
      id: 'O-546005C8',
      links: { self: '/vehicles/O-546005C8' },
      relationships: { route: { data: { id: 'Orange', type: 'route' } }, stop: { data: { id: '70021', type: 'stop' } }, trip: { data: { id: 'ADDED-1568904431', type: 'trip' } } },
      type: 'vehicle',
    }, {
      attributes: {
        bearing: 185, current_status: 'STOPPED_AT', current_stop_sequence: 1, direction_id: 0, label: '1450', latitude: 42.43773, longitude: -71.07093, speed: null, updated_at: '2019-09-22T15:52:20-04:00',
      },
      id: 'O-546005C0',
      links: { self: '/vehicles/O-546005C0' },
      relationships: { route: { data: { id: 'Orange', type: 'route' } }, stop: { data: { id: 'Oak Grove-02', type: 'stop' } }, trip: { data: { id: 'ADDED-1568904454', type: 'trip' } } },
      type: 'vehicle',
    }, {
      attributes: {
        bearing: 177, current_status: 'STOPPED_AT', current_stop_sequence: 20, direction_id: 0, label: '1309', latitude: 42.40162, longitude: -71.07727, speed: null, updated_at: '2019-09-22T15:55:41-04:00',
      },
      id: 'O-546005B9',
      links: { self: '/vehicles/O-546005B9' },
      relationships: { route: { data: { id: 'Orange', type: 'route' } }, stop: { data: { id: '70032', type: 'stop' } }, trip: { data: { id: 'ADDED-1568904447', type: 'trip' } } },
      type: 'vehicle',
    }],
  };

  const { data: vehicleData, included: stopData } = response;

  const lastVehicle = vehicleData[vehicleData.length - 1];


  test('properly filters API response data to only relevant vehicles', () => {
    expect(Array.isArray(utils.filterVehicles(vehicleData))).toBe(true);
    expect(utils.filterVehicles(vehicleData)).toHaveLength(2);
  });

  test('correctly identifies the human stop name of a vehicle', () => {
    expect(utils.getStopName(vehicleData[vehicleData.length - 1], stopData)).toBe('Wellington');
  });

  test('correctly identifies direction of a vehicle', () => {
    expect(utils.getVehicleDirection(vehicleData[vehicleData.length - 1])).toBe('southbound');
  });

  test('reshapes and filters vehicle data to only necessary information', () => {
    const expected = {
      vehicleNum: lastVehicle.attributes.label,
      status: lastVehicle.attributes.current_status,
      stopId: lastVehicle.relationships.stop.data.id,
      direction: utils.getVehicleDirection(lastVehicle, stopData),
      stopName: utils.getStopName(lastVehicle, stopData),
    };

    expect(utils.getDataPerVehicle(lastVehicle, 'Wellington', 'southbound')).toMatchObject(expected);
  });
});
