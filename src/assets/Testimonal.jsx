import React from 'react'
import '../css/Testimonal.css';
import Array from '../Components/Array';

function Testimonal() {
  return (
    <div className='testimonal'>
      <Array />

      <div className="idea">
        <div className="left">
          <h2>Have a project idea,<br />let's work together!</h2>
          <p>Do you fancy saying hi to me or do you want to get started with your project and you need my help? Feel free to contact me.</p>
          <a href="https://wa.me/2349014706988"> <input type="button" value="let's work together" /></a>
        </div>
        <div className="right">
          <a href="mailto:festuschidubem376@gmail.com">
            <div className="email">
            <i className="fa fa-envelope-o" aria-hidden="true" id='mess'></i>
              <span>Send a Email</span>
              <p>festuschidube376@gmail.com</p>
            </div> 
          </a>
          <a href="tel:+234 7063721635">
            <div className="email">
            <i className="fa fa-volume-control-phone" aria-hidden="true" id='messa'></i>
              <span>Call Me</span>
              <p>+234-4901-4706-988</p>
            </div>
          </a>
        </div>
      </div>

      <footer>
        <div className="join">
          <div className="connect">
            <div className="pic"></div>
            <span>Ugwueke festus</span>
            <p>Nigeria</p>
          </div>

          <div className="stage">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="https://drive.google.com/file/d/1JJC7gnNUZlJPbrNiB7d8fmRJVtcKKjMV/view?usp=drive_link">Resume</a>
            <a href="https://github.com/De-Natural">GitHub</a>
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://www.instagram.com/breez.e77/">Instagram</a>
          </div>

        </div>
        <div className="content">
          <p>All content © 2024-Ugwueke Festus and respective copyright holders.</p>
        </div>
      </footer>
    </div>
  )
}

export default Testimonal