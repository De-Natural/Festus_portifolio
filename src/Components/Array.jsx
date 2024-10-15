import React, { useState } from 'react';

export default function Array() {
    // State to keep track of the current testimonial index
    const [currentIndex, setCurrentIndex] = useState(0);

    
    const update = [
        {
            pText: "Actually festus is an extremely unique in and perfected in frontend, and he can deliver.",
            pieImage: "/assets/images/1-intro-photo-final.jpg",
            name: "Harrison",
            founder: "CEO Nanocodes Programming",
            videoClip: "/assets/images/real_estate.jpg"
        },
        {
            pText: "Festus is one of the best digital marketer I have ever met in my life, and he is good at product branding.",
            pieImage: "/assets/images/Ruth.jpg",
            name: "Ruth ozioma",
            founder: "CEO Rubyfirm Marketing Agency",
            videoClip: "/assets/images/branding_images.webp"
        },
        {
            pText: "To me he is septacular in what he is doing and worth to be refer to!",
            pieImage: "/assets/images/Sky_babe.jpg",
            name: "Chizurumoke sky",
            founder: "CTO Nanocodes Development",
            videoClip: "/assets/images/React_cake.png"
        },
        {
            pText: "Am short of words but all I know is that festus is trustworthy to handle company projects.",
            pieImage: "/assets/images/Oma.jpg",
            name: "Dennis Martha",
            founder: "Nanocodes Cusomer care",
            videoClip: "/assets/images/Nano_events.png"
        },
        {
            pText: "He is someone that even if others fails, he is still there as a hope for great change. Bravo festus",
            pieImage: "/assets/images/De_inspire.jpg",
            name: "God'swill Izuchukwu",
            founder: "Founder of importations",
            videoClip: "/assets/images/global_pug.png"
        }
    ];

    // Function to handle the forward button click
    const handleForwardClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % update.length);
    };

    // Function to handle the backward button click
    const handleBackwardClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + update.length) % update.length);
    };

    return (
        <div className='projector'>
            <div className="writeUp">
                <h2>Client Testimonial</h2>
                <p>Real feedback from satisfied Clients</p>
                <div className="post">
                    <img src="/assets/images/Group_comma.png" alt="" />
                    <p>{update[currentIndex].pText}</p>
                </div>
                <img src="/assets/images/Icon_quote_icon.png" alt="" id='icon'/>
                <div className="lane">
                    <div className="pie">
                        <img src={update[currentIndex].pieImage} alt="Pie Chart" />
                    </div>
                    <div className="picture">
                        <p>{update[currentIndex].name}</p>
                        <span>{update[currentIndex].founder}</span>
                    </div>
                    <div className="birds">
                        <button onClick={handleBackwardClick}>
                            <i className="fa fa-long-arrow-left" aria-hidden="true" id='backward'></i>
                        </button>
                        <button onClick={handleForwardClick}>
                            <i className="fa fa-long-arrow-right" aria-hidden="true" id='forward'></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="videoClip">
                <img src={update[currentIndex].videoClip} alt="Video Clip" />
            </div>
        </div>
    );
}
