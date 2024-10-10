import React, { useState } from 'react';

export default function Array() {
    // State to keep track of the current testimonial index
    const [currentIndex, setCurrentIndex] = useState(0);

    
    const update = [
        {
            pText: "Hello, how are we doing? Please subscribe to my YouTube channel.",
            pieImage: "/assets/images/night_class.jpg",
            name: "Harrison",
            founder: "CEO Nanocodes Programming",
            videoClip: "/assets/images/Image Admin_bg.png"
        },
        {
            pText: "Don't forget to like and share our latest videos!",
            pieImage: "/assets/images/glass.png",
            name: "Jane Doe",
            founder: "COO Nanocodes Media",
            videoClip: "/assets/images/marketing_images.jpeg"
        },
        {
            pText: "We are growing, thanks for your support!",
            pieImage: "/assets/images/potriat.png",
            name: "John Smith",
            founder: "CTO Nanocodes Development",
            videoClip: "/assets/images/nano.png"
        },
        {
            pText: "Stay tuned for more amazing content.",
            pieImage: "/assets/images/pic.bg.jpg",
            name: "Alice Johnson",
            founder: "CFO Nanocodes Finance",
            videoClip: "/assets/images/landing_bg.jpg"
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
