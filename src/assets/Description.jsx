import React from 'react'

function Description ({id}) {
  return (
    <section id={id} className='section_box'>
    <div className='first-page'>
      <div className="cover"></div>
      <div className="nav">
        <div className="profile">
          <div className="pic"></div>
          <p>Ugwueke festus</p>
        </div>
        <a href="tel:+234 7063721635">Contact me</a>
      </div>
      <div className="board">
        <div className="hey">
          <span>Hey, I'm festus ugwueke</span><br />
          <span>Frontend Developer</span><br />
          <p>Frontend Developer and Digital Marketer Based in Nigeria. 
            I specialize in Bug Fixing, Responsive Web Design, 
            and Visual Development.
          </p>
          <a href="mailto:festuschidubem376@gmail.com">Hire Me</a>
        </div>
        <div className="personnal"><img src="/assets/images/glass.png" alt="" /></div>
      </div>
      <div className="content">
        <div id="speech">
          <span>I have work for over 40 <sup>+</sup><br /> happy Clients all over the world</span>
          <p>Suspendisse eget ultricies felis,<br /> 
            in lacinia lectus. Morbi accumsan dapibus tortor,<br />
            in fermentum odio malesuada in aliquam sed ipsum tristique.
          </p>
        </div>
        <div className="companies">
          <div className="log">
          <div className="img"><img src="/assets/images/Company Logo amazon.png" alt="" /></div>
          <div className="img"><img src="/assets/images/Company Logo google.png" alt="" /></div>
          </div>
          <div className="log">
            <div className="img"><img src="/assets/images/Company Logo linked in.png" alt="" /></div>
            <div className="img"><img src="/assets/images/Company Logo microsoft.png" alt="" /></div>
          </div>
          <div className="log">
            <div className="img"><img src="/assets/images/Company Logo spotify.png" alt="" /></div>
            <div className="img"> <img src="/assets/images/nanocodes_logo.jpg" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Description