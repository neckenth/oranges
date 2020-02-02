import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from './Map'
import Konva from "konva";
import {
  Stage,
  Layer,
  Text,
  Line,
  Circle,
  Arrow,
  Group,
  Label,
  Tag
} from "react-konva";
import { collectStops, collectPoints, determineColor } from "../utils";

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

  const stops = collectStops();
  const points = collectPoints(stops);

  const isMobile = window.screen.width < 500
  const scaleX = isMobile ? .73 : .73
  const strokeWidth = isMobile ? 80 : 30
  const radius = isMobile ? 20 : 8
  const xSpace = isMobile ? 50 : 20
  const ySpace = isMobile ? 8 : 4
  const fontSize = isMobile ? 24 : 12


  return (
    <div>
      <Map />
    {/* <Stage
      width={window.innerWidth * .8}
      height={window.innerHeight}
      scaleX={scaleX}
      scaleY={0.73}
      offsetX={window.innerWidth / -.5}
    >
      <Layer>
        <Text text="Here are the active new orange line trains now" />
        <Line
          points={points}
          stroke="orange"
          strokeWidth={strokeWidth}
          lineCap="round"
          lineJoin="round"
          tension={0}
        />
        {stops.map(stop => {
          const color = determineColor(stop, data.trains);
          const direction = data.trains.find(t => t.stopName === stop.name)
            ? data.trains.find(t => t.stopName === stop.name).direction
            : null;
          const yOffset = direction && direction === "northbound" ? -5 : 5;
          return (
            <Group key={stop.name}>
              <Label x={stop.x + xSpace} y={stop.y - ySpace}>
                <Tag />
                <Text text={stop.name} fontSize={fontSize} fontStyle="bold" />
              </Label>
              {direction ? (
                <Arrow
                  points={[stop.x, stop.y, stop.x, stop.y + yOffset]}
                  fill={color}
                  stroke="black"
                />
              ) : (
                <Circle
                  name={stop.name}
                  x={stop.x}
                  y={stop.y}
                  fill={color}
                  radius={radius}
                  stroke="black"
                />
              )}
            </Group>
          );
        })}
      </Layer>
    </Stage> */}
    </div>
  );
}

export default TrainsNow;
