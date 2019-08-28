import React from 'react'
import Konva from 'konva'
import { Stage, Layer, Text, Line, Circle, Group, Label, Tag } from 'react-konva'
import { northStops, southStops, computeNorthStopCoords, computeSouthStopCoords, collectStops, collectPoints } from '../utils'

class TrainsNow extends React.Component {

    constructor() {
        super()
        this.stopsToPoints = this.stopsToPoints.bind(this)
    }

    componentDidMount() {
        console.log('MOUNTED!')
        console.log('NORTH', computeNorthStopCoords(northStops, 500, 60, 40))
        console.log('SOUTH', computeSouthStopCoords(southStops, 500, 60, 40, 28))

    }

    stopsToPoints(stopsList) {
        return stopsList.reduce((acc, stop) => acc.concat([stop.x, stop.y]), [])
    }

    render() {
        const stops = collectStops()
        const points = collectPoints(stops)

       return (
           <Stage width={window.outerWidth} height={window.outerHeight}>
               <Layer>
                   <Text text="Here are the active new orange line trains now" />
                    <Line
                        points={points}
                        stroke='orange'
                        strokeWidth={30}
                        lineCap='round'
                        lineJoin='round'
                        tension={0}
                    />
                    {stops.map(stop => {
                        return (
                        <Group key={stop.name}>
                            <Label x={stop.x + 20} y={stop.y - 3}>
                                <Tag />
                                <Text text={stop.name} />
                            </Label>
                            <Circle name={stop.name} x={stop.x} y={stop.y} fill='white' radius={8} stroke='black' />
                        </Group>
                        )
                    })}
               </Layer>
           </Stage>
       )
    }
}

export default TrainsNow;