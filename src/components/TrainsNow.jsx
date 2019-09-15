import React, { useState, useEffect } from "react";
import axios from "axios";
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

  return (
    <Stage
      width={window.outerWidth}
      height={window.outerHeight}
      scaleX={0.8}
      scaleY={0.8}
    >
      <Layer>
        <Text text="Here are the active new orange line trains now" />
        <Line
          points={points}
          stroke="orange"
          strokeWidth={30}
          lineCap="round"
          lineJoin="round"
          tension={0}
        />
        {stops.map(stop => {
          const color = determineColor(stop, data.trains);
          const direction = data.trains.find(t => t.stopName === stop.name)
            ? data.trains.find(t => t.stopName === stop.name).direction
            : null;
          const yOffset = direction && direction === "northbound" ? 5 : -5;
          return (
            <Group key={stop.name}>
              <Label x={stop.x + 20} y={stop.y - 4}>
                <Tag />
                <Text text={stop.name} />
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
                  radius={8}
                  stroke="black"
                />
              )}
            </Group>
          );
        })}
      </Layer>
    </Stage>
  );
}

export default TrainsNow;
