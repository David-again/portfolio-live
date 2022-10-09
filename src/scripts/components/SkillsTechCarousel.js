import React, { Component } from "react";
import Slider from "react-slick";

import logo001 from "../../images/logos/js-es6-logo.png";
import logo002 from "../../images/logos/reactJS-logo.png"; 
import logo003 from "../../images/logos/nodeJS-logo.png"; 
import logo004 from "../../images/logos/html-logo.png"; 
import logo005 from "../../images/logos/css-logo.png"; 
import logo006 from "../../images/logos/python-logo.png";
import logo007 from "../../images/logos/pandas-logo.png"; 
import logo008 from "../../images/logos/jquery-text-logo.png"; 
import logo009 from "../../images/logos/mongoDB-logo.png"; 
import logo010 from "../../images/logos/gcp-logo.png"; 
import logo011 from "../../images/logos/aws-logo.png"; 
import logo012 from "../../images/logos/adobe-photoshop-logo.png"; 
import logo013 from "../../images/logos/bootstrap-logo.png";


// export default class SimpleSlider extends Component {
export default class SkillsTechCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <div>
        <Slider {...settings}>
            <div><img src={logo001} className="main-doc-skills__carousel-image" alt="ECMA Script logo" /></div>
            <div><img src={logo002} className="main-doc-skills__carousel-image" alt="ReactJS logo" /></div>
            <div><img src={logo003} className="main-doc-skills__carousel-image" alt="NodeJS logo" /></div>
            <div><img src={logo004} className="main-doc-skills__carousel-image" alt="HTML logo" /></div>
            <div><img src={logo005} className="main-doc-skills__carousel-image" alt="CSS logo" /></div>
            <div><img src={logo006} className="main-doc-skills__carousel-image" alt="Python logo" /></div>
            <div><img src={logo007} className="main-doc-skills__carousel-image" alt="Pandas logo" /></div>
            <div><img src={logo008} className="main-doc-skills__carousel-image" alt="jQuery logo" /></div>
            <div><img src={logo009} className="main-doc-skills__carousel-image" alt="MongoDB logo" /></div>
            <div><img src={logo010} className="main-doc-skills__carousel-image" alt="GCP logo" /></div>
            <div><img src={logo011} className="main-doc-skills__carousel-image" alt="AWS logo" /></div>
            <div><img src={logo012} className="main-doc-skills__carousel-image" alt="Photoshop logo" /></div>
            <div><img src={logo013} className="main-doc-skills__carousel-image" alt="Bootstrap logo" /></div>
        </Slider>
      </div>
    );
  }
}
