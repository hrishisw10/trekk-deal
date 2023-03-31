import React from 'react';
import '../../App.css';
import Trek from './trek';
export default function Tours(props){
    console.log("=====\n",props.tour)
    const treksToRender=props.tour.trip.map((trek,index)=><Trek key={index} trek={trek}/>)
    return (
        <div className="flex-container Tour">
            {treksToRender}
        </div>
    )
} 