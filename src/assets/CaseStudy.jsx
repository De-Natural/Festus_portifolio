import React from 'react';
import '../css/caseStudy.css';
import { Link } from 'react-router-dom';
// import { DoughnutChat } from 'co'
// import CircularProgressBar from '../Components/DoughnutChat';
import image1 from '/assets/images/html.png'
import image2 from "/assets/images/css-3.png" 
import image3 from "/assets/images/javascript.png" 
import image4 from "/assets/images/atomic-symbol.png" 
import image5 from "/assets/images/email2.png.png" 

function CaseStudy({id}) {
  let imageArr = [
    {
      pic: image1,
      course: "Html"
    },
    {
      pic: image2,
      course: "CSS"
    },
    {
      pic: image3,
      course: "Javascripts"
    },
    {
      pic: image4,
      course: "React"
    },
    {
      pic: image5,
      course: "Marketing"
    },
  ]
  // const  imageArr = [
  //   image1,
  //   image2,
  //   image3,
  //   image4,
  //   image5
  // ]
  return (
    <section id={id} className='section_box'>
    <div className='CaseStudy'>
      <div className="heading">
        <h2>Latest Case Study</h2>
        <p>Discover my most recent projects and case studies,<br />
           showing how I honored my ability in bringing ideas to life.
        </p>
        <div className="navigation">
          <button><i className="fa fa-long-arrow-left" aria-hidden="true" id='ink'></i></button>
          <button><i className="fa fa-long-arrow-right" aria-hidden="true" id='ink'></i></button>
        </div>
      </div>
      <div className='project'>
        <div className="video">
          <a href="https://my-cake-website.vercel.app/"><img src="/assets/images/cake website.jpg" alt="" /></a>
        </div>
        <div className="video">
          <img src="/assets/images/Image Admin_bg.png" alt="" />
          <div className="cop">
            <span>Html + CSS + Javascript + React</span>
            <p>Relik - Admin Dashboard</p>
            <Link to="/display">View case study <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
          </div>
          <div className="mop"></div>
        </div>
        <div className="video">
          <a href="https://nanoeventhoster.com/"><img src="/assets/images/upcoming event.jpg" alt="" /></a>
        </div>
      </div>
      <div className='chart'>
        <p className='chart-p'>what am good at</p>
        {imageArr?.map((data,index) => (
          <div className='miniChart'>
            
            {/* <CircularProgressBar
              color={data?.color}
              percentage={data?.percent}
            /> */}
            <img src={data?.pic} alt="" />
            <p className='courseTitle'>{data?.course}</p>
          </div>
        ))}
        
      </div>
    </div>
    </section>
  );
}

export default CaseStudy;
