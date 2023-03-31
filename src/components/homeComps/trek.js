import React from 'react';
import '../../App.css';
export default function Trek(props){
    
    console.log("====================\n",props.trek);
    const trek=props.trek;
    return (
        <div className="Trek">
            <h1>{trek.tripTitle}</h1>
            <h2>{trek.days}</h2>
            <h2>{trek.price}</h2>
            <p>{trek.viewDetails}</p>
        </div>
        
    )
} 