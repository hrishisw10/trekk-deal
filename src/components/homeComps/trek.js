import React from 'react';
import '../../App.css';
export default function Trek(props){
    
    console.log("====================\n",props.trek);
    const trek=props.trek;
    return (
        <div className="Trek">
            <h2>{trek.tripTitle}</h2>
            <img src={trek.viewDetails}></img>
            <h4>{trek.days}</h4>
            <h4>${trek.price}</h4>
              <button>Explore more..!</button>
        </div>
        
    )
} 