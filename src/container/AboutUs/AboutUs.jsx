import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Led by our renowned team of talented and innovative chefs, we curate a menu that showcases the finest ingredients sourced from around the world. Drawing inspiration from both classic and contemporary culinary traditions, each dish is an artful composition, harmonizing flavors, textures, and presentation. With every bite, you embark on a gastronomic journey that delights the senses and ignites the imagination.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Founded by visionary restaurateurs who shared an unwavering passion for gastronomy, Gericht was born out of a dream to create a haven where epicurean delights and refined hospitality intertwine seamlessly. Our team of accomplished chefs have crafted signature dishes that blend artistry, flavor, and precision. From our humble beginnings as a small bistro, we have evolved into a revered icon of culinary distinction.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;