import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png'; 
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';


const Skills = () => {
  return (
    <section id='skills'>
     <span className="skillTitle">What I do</span>
     <span className="skillDesc">I'm a skilled and passionate web designer who can create visually appealing designs.</span>
     <div className="skillBars">
      <div className="skillBar">
        <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
        <div className="skillBarText">
          <h2>UI/UX Design</h2>
          <p>I'm a skilled UI/UX Designer who can design posters and designs using tools like Figma and AdobeXD.</p>
        </div>
      </div>

      <div className="skillBar">
        <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
        <div className="skillBarText">
          <h2>Website Design</h2>
          <p>I'm passionate about developing creative web pages.</p>
        </div>
      </div>

      <div className="skillBar">
        <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
        <div className="skillBarText">
          <h2>Application Design</h2>
          <p>I equipped with skills dealing with designing application interface.</p>
        </div>
      </div>

     </div>
    </section>
  );
}

export default Skills;
