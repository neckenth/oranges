import React from 'react'
import Konva from 'konva'
import { Stage, Layer, Text, Line, Circle } from 'react-konva'

class TrainsNow extends React.Component {

    constructor() {
        super()
        this.stopsToPoints = this.stopsToPoints.bind(this)
    }

    componentDidMount() {
        console.log('MOUNTED!')
    }

    stopsToPoints(stopsList) {
        return stopsList.reduce((acc, stop) => acc.concat([stop.x, stop.y]), [])
    }

    render() {
        const vertStops = [
            {
                "name": "Oak Grove",
                "x": 300,
                "y": 60
            },
            {
                "name": "Malden Center",
                "x": 300,
                "y": 100
            },
            {
                "name": "Wellington",
                "x": 300,
                "y": 140
            },
            {
                "name": "Assembly",
                "x": 300,
                "y": 180
            },
            {
                "name": "Sullivan Square",
                "x": 300,
                "y": 220
            },
            {
                "name": "Community College",
                "x": 300,
                "y": 260
            },
            {
                "name": "North Station",
                "x": 300,
                "y": 300
            },
            {
                "name": "Haymarket",
                "x": 300,
                "y": 340
            },
            {
                "name": "State",
                "x": 300,
                "y": 380
            },
        ]


       return (
           <Stage width={window.innerWidth} height={window.innerHeight}>
               <Layer>
                   <Text text="Here are the active new orange line trains now" />
                    <Line
                        points={this.stopsToPoints(vertStops)}
                        stroke='orange'
                        strokeWidth={30}
                        lineCap='round'
                        lineJoin='round'
                        tension={1}
                    />
                    {vertStops.map(stop => {
                        return <Circle key={stop.name} x={stop.x} y={stop.y} fill='white' radius={8} stroke='black' />
                    })}
               </Layer>
           </Stage>
       )
    }
}

export default TrainsNow;