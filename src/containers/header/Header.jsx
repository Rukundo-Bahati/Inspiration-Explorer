import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Discover the Power of Your Project</h1>
      <p>Unlock the potential of your project with innovative solutions and creativity.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button" style={{textWrap: 'nowrap'}}>Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>Join the growing community of creators and innovators.</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
