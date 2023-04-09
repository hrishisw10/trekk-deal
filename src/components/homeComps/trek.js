import React from 'react';
import '../../App.css';
import '../component.css';
export default function Trek(props){
    
    console.log("====================\n",props.trek);
    const trek=props.trek;
    return (
        <div className="trek">
            <div className="trek_img">
                <img src="https://vl-prod-static.b-cdn.net/system/images/000/522/929/a5571330b9ad87679f48c6c78151c588/520gt/93989567_2131658993647517_8502081248040074239_n.jpg?1642005714"/*{trek.viewDetails}*/ alt="Not Found"></img>
            </div>
            <div className="trek_info">
                <h2 className="trek_title">{trek.tripTitle}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h4>{trek.days}</h4>
                <h4>${trek.price} onwards..</h4>
                <a href="#" className="trek_cta"><b>Explore More</b></a>
            </div>
        </div>
        
    )
} 