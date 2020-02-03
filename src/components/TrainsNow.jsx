import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from './Map'
import './TrainsNow.scss'

import {determineColor, stops } from "../utils";

function TrainsNow() {
  const [data, setData] = useState({ isFetching: false, trains: [] });

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        setData({ isFetching: true, trains: data.trains });
        const response = await axios.get("/api/orange");
        setData({ isFetching: false, trains: response.data });
      } catch (e) {
        console.log(e);
        setData({ isFetching: false, trains: data.trains });
      }
    };
    fetchTrains();
  }, []);

  function addStyles(stops, trains) {
    for (let t = 0; t < trains.length; t++) {
      for (let s = 0; s < stops.length; s++) {
        if (trains[t].stopName === stops[s].name) {
          stops[s].color = determineColor(stops[s], trains)
        }
      }
    }
    stops.map(elem => elem.color = elem.color || "#D6D6D6")
    return stops
  }

  const styledStops = addStyles(stops, data.trains)

  return (
    <div class="flex-body">
      <div />
      <div class="flex-map">
      {data.trains.length && <Map props={styledStops}/>}
      </div>
    </div>
  );
}

export default TrainsNow;
