import React from 'react';
import '../../App.css';
import Trek from './trek';
export default function Tours(props){
    console.log("=====\n",props.tour)
    const treksToRender=props.tour.trips.map((trek,index)=><Trek key={index} trek={trek}/>)
    return (
        <div className="Tour">
            <h1>{props.tour.toursType}</h1>
            <div className="flex-container">
            {treksToRender}
            </div>
        </div>
    )
} 