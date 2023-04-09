import React from 'react';
import '../../App.css';
export default function Trek(props){
    
    console.log("====================\n",props.trek);
    const trek=props.trek;
    return (
        <div className="Trek">
            <h2>{trek.tripTitle}</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Konkan_%26_Goa_Trip_015.jpg"/*{trek.viewDetails}*/></img>
            <h4>{trek.days}</h4>
            <h4>${trek.price}</h4>
              <button>Explore more..!</button>
        </div>
        
    )
} 