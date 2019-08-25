import React from 'react'

class TrainsNow extends React.Component {

    constructor() {
        super()
    }

    componentDidMount() {
        console.log('MOUNTED!')
    }

    render() {
       return (
       <h1>These are the active new orange line trains now</h1>
       )
    }
}

export default TrainsNow;