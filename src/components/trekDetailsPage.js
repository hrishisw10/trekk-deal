import React, { useEffect, useState } from 'react';
// import '../App.css';
import './component.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import waimg from './wa.png';

const TrekDetails = (props) => {
    const [details, setDetails] =useState({});
    const params = useParams();
    let trekId=params.trekId;
    const [images, setImages] = useState([]);
    // details => faqs, highlights, images, location, map, name, overview, policies
    useEffect(()=>{
        const fetchDetails= async() =>{
           await axios.get("/v1/view/detail/"+trekId)
        .then(res=>{
            console.log(res.data)
            console.log("-------------------"+res.data.images);
            // detail=res.data
            setDetails(res.data);
            setImages(res.data.images);
        });
        }
        fetchDetails();
    },[]);
    const getFaqs = faqs =>{
        return Object.entries(faqs).map(([key,value])=>{
            return (
                <p key={key}><b>{key}</b><br/>{value}</p>
            )
        })
    }
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 2500);
        
        return () => clearInterval(timer);
    });
    return(
        <div>
        <div className="trek-details">
            {
                Object.keys(details).length === 0 ?
            <h1>Loading...</h1>
            : <div className="trek-details-body">
                <div className="td-images slideshow">
                    <div className="slide w3-animate-right">
                    <img src={images[index]} alt={`Slide ${index}`} />
                    <div className="image-gradient"></div>
                    <div className="slide-content"><h1>{details.name}</h1></div>
                    </div>
                </div>
                <br/>
                <div className="td-name">
                    {/* <h1>{details.name}</h1> */}
                </div>
                <br/>
                <div className="td-location">
                    <b>Location</b> : <u>{details.location}</u>
                </div>
                <br/>
                <div className="td-highlights">
                    {details.highlights}
                </div>
                <br/>
                <div className="td-overView">
                    <hr/><hr/><h2>OVERVIEW</h2><hr/>
                    <div>
                        <h4>Actual Location</h4> {details.overView.activityLocation}<hr/>
                    </div>
                    <div>
                        {details.overView.trekRegion}
                    </div>
                    <div>
                        <h4>Starting Point</h4>{details.overView.startingPoint}<hr/>
                    </div>
                    <div>
                        <h4>Pickup Locations</h4>{details.overView.pickUpLocations}<hr/>
                    </div>
                    <div>
                        Total Duration : {details.overView.totalDuration}
                    </div>
                    <div>
                        Trek Duration : {details.overView.treckDuration}
                    </div>
                    <div>
                        Trek Distance : {details.overView.trekDistance}
                    </div>
                    <div>
                        Difficulty : {details.overView.trekDifficultyLevel}<hr/>
                    </div>
                    <div>
                        <h4>Main Attraction Points</h4>{details.overView.attractionsDuringTrek}<hr/>
                    </div>
                    <div>
                        <h4>Activities</h4>{details.overView.aboutActivity}<hr/>
                    </div>
                </div>
                <div className="faqs">
                    <hr/><h2>FAQS</h2><hr/>
                    {getFaqs(details.faqs)}
                </div>
                <br/>
            </div>}
            <br/>
        </div>
        {
            Object.keys(details).length === 0 ?
            <h2>WA</h2>
            :
            <a target ="#" href={""+params.whatsappConnURL} className='wa-link'><img className="wa-img" src={waimg} alt="WA"></img></a>
        }
        </div>
    )
}

export default TrekDetails;