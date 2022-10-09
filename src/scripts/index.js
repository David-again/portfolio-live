import _ from 'lodash';
import '../css/styles.css';
import 'lazysizes';
import MobileMenu from './modules/Mobile-Menu';
// import Modal from './modules/Modal';

// const myVillains = require('supervillains');
// myVillains.all;
// console.log(myVillains.random());

import React from 'react';
import ReactDOM from 'react-dom';
import Skills_Group_1 from './components/Skills_Group_1';
import Skills_Group_2 from './components/Skills_Group_2';
import SkillsTechCarousel from './components/SkillsTechCarousel';
import CurrentProjects from './components/CurrentProjects';
import FutureProjects from './components/FutureProjects';
import ContactForm from './modules/ContactForm';
import ConstructionPage from './components/ConstructionPage';

ReactDOM.render(<Skills_Group_1 />, document.querySelector("#skills-group-1"));
ReactDOM.render(<Skills_Group_2 />, document.querySelector("#skills-group-2"));
ReactDOM.render(<SkillsTechCarousel />, document.querySelector("#skills-tech-carousel"));

ReactDOM.render(<CurrentProjects />, document.querySelector("#current-projects"));
ReactDOM.render(<FutureProjects />, document.querySelector("#future-projects"));
ReactDOM.render(<ContactForm />, document.querySelector("#contact-form"));

// ReactDOM.render(<ConstructionPage />, document.querySelector("#under-construction-main"));
// ReactDOM.render(<ConstructionPage />, document.querySelector("#under-construction-aviation"));

// new Modal();
let mobileMenu = new MobileMenu();
let modal;

document.querySelectorAll(".under-construction").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault();
    if (typeof modal == "undefined") {
      import('./modules/Modal').then(x => {
        modal = new x.default();
        setTimeout(() => modal.openTheModal(), 20);
      }).catch(() => console.log("There was a problem."))
    } else {
      modal.openTheModal();
    }
  })
})

  if (module.hot) {
    module.hot.accept()
  }