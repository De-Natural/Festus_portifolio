import React from 'react';
import '../css/caseStudy.css';
import { Link } from 'react-router-dom';
// import { DoughnutChat } from 'co'
import CircularProgressBar from '../Components/DoughnutChat';

function CaseStudy({id}) {
  let chart = [
    {
      course: 'html and css',
      color: '#ff5722',
      percent: 80
    },
    {
      course: 'javascript',
      color: '#F7DF1E',
      percent: 75
    },
    {
      course: 'React',
      color: '#61dafb',
      percent: 60
    },
    {
      course: 'marketing',
      color: 'green',
      percent: 50
    },
  ]
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
          <a href="https://my-cake-with-react-corrected-version.vercel.app/"><img src="/assets/images/cake website.jpg" alt="" /></a>
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
        <p>what am good at</p>
        {chart?.map((data,indx) => (
          <div className='miniChart'>
            
            <CircularProgressBar
              color={data?.color}
              percentage={data?.percent}
            />
            <p className='courseTitle'>{data?.course}</p>
          </div>
        ))}
        
      </div>
    </div>
    </section>
  );
}

export default CaseStudy;
