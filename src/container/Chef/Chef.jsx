import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">From a young age, I was captivated by the art of cooking—the alchemy of flavors, the precision of techniques, and the joy of bringing people together through food. My journey has taken me through renowned kitchens and across diverse culinary traditions, each experience adding layers to my expertise and fueling my relentless pursuit of culinary excellence.</p>
        </div>
        {/* <p className="p__opensans">My journey has taken me through renowned kitchens and across diverse culinary traditions, each experience adding layers to my expertise and fueling my relentless pursuit of culinary excellence.</p> */}
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;