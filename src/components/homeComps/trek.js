import React from 'react';
import '../../App.css';
import '../component.css';
import {Link} from 'react-router-dom';
export default function Trek(props){
    
    console.log("====================\n",props.trek);
    const trek=props.trek;
    return (
        <div className="trek">
            <div className="trek_img">
                <img src={trek.imagesURLs} alt="Not Found"></img>
            </div>
            <div className="trek_info">
                <h2 className="trek_title">{trek.trekTitle}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.</p>
                <h4><strong>{trek.days}</strong></h4>
                <h4><strong>₹{trek.price} onwards..</strong></h4>
                <Link to={"/trekdetails/"+trek.trekId} className="trek_cta"><b>Explore More</b></Link>
            </div>
        </div>
        
    )
} 