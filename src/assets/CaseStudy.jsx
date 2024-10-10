import React from 'react';
import '../css/CaseStudy.css';
import { Link } from 'react-router-dom';

function CaseStudy({id}) {
  return (
    <section id={id}>
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
          <a href="https://my-cake-with-react-corrected-version.vercel.app/"><img src="/assets/images/React_cake.png" alt="" /></a>
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
          <a href="#"><img src="/assets/images/Nano_events.png" alt="" /></a>
        </div>
      </div>
    </div>
    </section>
  );
}

export default CaseStudy;
