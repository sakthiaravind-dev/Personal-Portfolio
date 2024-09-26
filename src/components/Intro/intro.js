import React from 'react';
import './intro.css';
import bg from '../../assets/profile.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Sakthi</span> <br />Website Developer.</span>
        <p className="introPara">Im a skilled web developer with experience in creating <br />visually appealing web designs.</p>
        <Link><button className="introBtn"><img src={btnImg} alt="Hire" className='btnImg'/>Hire me</button></Link>
      </div>
      <img src={bg} alt="Profile" className='bg' />
    </section>
   
  );
}

export default intro
