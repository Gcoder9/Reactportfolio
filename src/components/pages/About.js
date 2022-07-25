import React, { Component } from 'react';
export default class About extends Component {
  render() {

return (
    <section id="about">
       <div className="row">

          <div className="three columns">

             <img className="profile-pic"  src="linkPic.jpg" alt="" />

          </div>

          <div className="nine columns main-col">

             <h2>About Me</h2>
             <p>
             Attended UNCC full-stack coding Bootcamp. Developed a strong foundation in software engineering and coding principles across multiple platforms. Able to quickly Learn and master new technologies; successful working in both team and self-directed settings.
             </p>

             <div className="row">

                <div className="columns contact-details">

                <h2>Contact Details</h2>
                
                             
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}
}