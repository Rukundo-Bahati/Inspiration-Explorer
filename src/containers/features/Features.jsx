import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Empowering creativity and innovation',
    text: 'Unlock your creative potential and innovate with groundbreaking solutions.',
  },
  {
    title: 'Join the community of visionaries',
    text: 'Connect with like-minded individuals and become part of a visionary community.',
  },
  {
    title: 'Explore limitless possibilities',
    text: 'Discover a world of limitless possibilities and turn your ideas into reality.',
  },
  {
    title: 'Shape the future with your ideas',
    text: 'Be a pioneer in shaping the future with your innovative ideas and projects.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Unlock Your Potential and Shape the Future</h1>
      <p>Join Us Today to Start Your Journey</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
