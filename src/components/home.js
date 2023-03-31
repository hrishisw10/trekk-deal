import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import Tours from './homeComps/tours';
export default function Home() {
    const [tours, setTours] =useState([]);
    useEffect(()=>{
        const fetchTours= async() =>{
           await axios.get("/v1/dashboard/treks")
        .then(res=>{
            setTours(res.data.tours);
        });
        }
        fetchTours();
    },[]);
    
     const toursToRender = tours.map((tour,index)=><Tours key={index} tour={tour}/>);
    // console.log("HEREEE....")
    console.log(tours);
    console.log("-----",toursToRender);
    return(
        <div>
        <div className="Home back-img"></div>
        <div className="Tours h1">
            {toursToRender}
        </div>
        {/* <h1 className="h1">Stay tuned! We're coming soon....</h1> */}
        
        </div>
    )
} 
