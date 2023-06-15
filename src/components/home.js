import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import Tours from './homeComps/tours';
// import 'https://www.w3schools.com/w3css/4/w3.css';
export default function Home() {
    const [tours, setTours] =useState([]);
    const [slides, setSlides] =useState([]);
    useEffect(()=>{
        const fetchTours= async() =>{
            await axios.get("/v1/dashboard/treks")
            .then(res=>{
                setTours(res.data);
            });
        }
        const fetchBannerSlides=async()=>{
            await axios.get("/v1/dashboard/banner")
            .then(res=>{
                setSlides(res.data.banners);
            });
        } 
        fetchTours();
        fetchBannerSlides();
    },[]);
    
    const toursToRender = tours.map((tour,index)=><Tours key={index} tour={tour}/>);
    // console.log(tours);
    // console.log("-----",toursToRender);
    
    // const images=[
    //     {
    //         imageSrc: "https://i.ytimg.com/vi/0q7c3Jac56A/maxresdefault.jpg",
    //         caption : "PARADISE"
    //     },
    //     {
    //         imageSrc: "https://vl-prod-static.b-cdn.net/system/images/000/524/390/4cd0ae0b2dee495eec196edaac9eb3bc/original/scuba-diving-tarkarl-Malvan.jpg?1681201992",
    //         caption : "HEAVEN"
    //     },
    //     {
    //         imageSrc: "https://vl-prod-static.b-cdn.net/system/images/000/638/612/3eed318aba33230e22af7df9a51d1187/960gt/godwin-bephin-m1JadpiYUaA-unsplash.jpg?1666961112",
    //         caption : "EGYPT"
    //     }
    // ]
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % slides.length);
        }, 2500);
        
        return () => clearInterval(timer);
    });
    return(
        <div>
            { Object.keys(slides).length==0 ? <h4>Loading..</h4>:
            <div className="slideshow">
                <div className="slide w3-animate-right">
                <img src={slides[index].imageUrl} alt={`Slide ${index}`} />
                <div className="image-gradient"></div>
                <div className="slide-content"><h1>{slides[index].bannerTitle}</h1></div>
                </div>
            </div>
            }
            <div className="Tours">
                {toursToRender}
            </div>
            {
            Object.keys(tours).length === 0 ?
            <h2>WA</h2>
            :
            <a target="#" href={tours[0].whatsappConnURL} className='wa-link'>WA</a>
        }
        {/* <h1 className="h1">Stay tuned! We're coming soon....</h1> */}
        
        </div>
    )
} 