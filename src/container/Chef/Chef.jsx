import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef1} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans"></p>
        </div>
        <p className="p__opensans">  we believe in providing exceptional experiences. Our passion drives us to craft delectable dishes with care and dedication. We value kindness and strive to create a welcoming environment for all. With every meal, we aim to make memories that warm your heart. Welcome to our culinary haven, where you inspires our culinary journey, and you are the heart of it all. </p>
      </div>

      <div className="app__chef-sign">
        <p>Houssem Sellami</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.Signature} alt="sign_image" style={{ width: '600px', height: 'auto' }} />
      </div>
    </div>
  </div>
);

export default Chef;