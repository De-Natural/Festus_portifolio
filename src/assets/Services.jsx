import React from 'react'
import '../css/Services.css';

function Services({id}) {
  return (
    <section id={id}>
    <div className='service'>
      <div className="hip">
      <h2>My Service</h2>
      <p>As a seasoned Developer and Digital Marketer, I offer range of services to help businesses thrive  </p>
      </div>
      <div className="two">
        <div className="card">
          <div className="point"><img src="/assets/images/web_images.webp" alt="" /></div>
          <span>Front-end Developer</span>
          <p>Building interactive and responsible interface with Html, CSS, JS and React</p>
          <a href="https://wa.me/2349014706988">let work together <i className="fa fa-arrow-right" aria-hidden="true" id='art'></i></a>
        </div>
        <div className="card">
          <div className="point"><img src="/assets/images/marketing_images.jpeg" alt="" /></div>
          <span>Digital Marketing</span>
          <p>Driving business growth through SEO, SEM, SMM, Email Marketing and Adverstiment</p>
          <a href="https://wa.me/2349014706988">let's work together <i className="fa fa-arrow-right" aria-hidden="true" id='art'></i></a>
        </div>
      
      </div>
      <div className="footer">
        <div className="box">
         <img src="/assets/images/Briefcase proj.png" alt=""/>
          <span>2 <sup>+</sup></span>
          <p>years experience</p>
        </div>
        <div className="box">
          <img src="/assets/images/Stack experi.png" alt="" />
          <span>3 <sup>+</sup></span>
          <p>Completed project</p>
        </div>
        <div className="box">
          <img src="/assets/images/SmileyWink simle.png" alt="" />
          <span>43 <sup>+</sup></span>
          <p>Happy Client</p>
        </div>
        <div className="box">
           <img src="/assets/images/Coffee work.png" alt="" />
          <span>302 <sup>+</sup></span>
          <p>Hours of work</p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Services