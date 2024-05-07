import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatgpt.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What Makes Our Project Unique" text="Discover what sets our project apart and how it can benefit you." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Unlock Limitless Possibilities</h1>
      <p>Explore Endless Opportunities</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Custom Solutions" text="Tailored solutions to meet your specific needs and goals." />
      <Feature title="Innovative Technologies" text="Leveraging cutting-edge technologies for groundbreaking results." />
      <Feature title="Expert Support" text="Dedicated support from our team of experts throughout your journey." />
    </div>
  </div>
);

export default WhatGPT3;
