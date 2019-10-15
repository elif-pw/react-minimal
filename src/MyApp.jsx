import React from 'react'
import AppTitle from "./AppTitle";

const generateArray = (n) => [...Array(n).keys()].map(x => ++x)

const MyApp = () => (
    <div>
        <h1>Minimal React ozdemire</h1>
        <p>Bundle size: 181 bytes, <br/> Load time of the bundle:  21 ms,
            <br/> Last commit SHA1: bc6178f3dacf5977dbefcce409dd3d3c67debe76 </p>

         <AppTitle/>

         <p>{generateArray(20).map(x => ' ' + x)}</p>

    </div>
)

export default MyApp