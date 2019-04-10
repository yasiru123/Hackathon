import React, { Component } from "react";
import deep from "./deep.png";
import whale from "./whale.png";
import surf from "./surf.png";


export default class OutDoor extends Component {
render() {
    return(
        <div>
            <h1 align="center">Outdoor Activiies</h1>
            <table>
                <tr>
                    <td><img src = {deep}width="500px" height="500px"/></td>
                    <td>
                        <h3><b>Deep See fishing Bentota</b></h3>
                        <p> Meeting point – Bentota Harbour</p>
                        <p>Meeting time Morning – 7 a.m. (most preferred) Evening – 2:30 p.m.</p>
                        <p>Preferred starting time: 8 a.m. at the trail start point.</p>
                        <p>Duration of tour: Max. 4 hours</p>
                        <p>Maximum 6 pax per boat</p>
                        <p>Possible period November-April</p>
                    </td>
                </tr>
                <tr>
                    <td><img src = {whale}width="500px" height="500px"/></td>
                    <td>
                        <h3><b>Whale watching in Mirissa</b></h3>
                        <p>Whale watching is the practice of observing whales and dolphins (cetaceans) in their natural ..... </p>
                        <p>Blue whales and some types of dolphins can be seen in the sea of Mirissa in Sri Lanka. </p>
                        <p>Many sightings have been reported from November to April.</p>
                    </td>
                </tr>
                <tr>
                    <td><img src = {surf}width="500px" height="500px"/></td>
                    <td><h3><b>Surfing at Arugambe</b></h3>
                        <p>Discover one of the best surfing in the world at Arugam Bay</p>
                        <p>with sand bottom perfections and pristine walls of ocean waves during your stay at Hideaway, ...</p>
                    </td>
                </tr>
            </table>
        </div>
    )
}
}