import React from 'react';

import logo1_portfolio from '../../images/projects/01-portfolio-5.jpg';
import logo7_travelsite from '../../images/projects/07-Travel-site.jpg';
import logo3_pawtastic from '../../images/projects/03-pawtastic.jpg';
import logo4_04b_statistics from '../../images/projects/04b-statistics.png';

function CurrentProjects() {
    return (
        <div>
            {/* Icon for My Portfolio source code on github.  */}
                <a href="https://github.com/David-again/portfolio-live" target="_blank">
                    <div className="main-doc-projects__project-icon">
                        
                        <img 
                            src={logo1_portfolio} 
                            className="main-doc-projects__project-icon--preview-image lazyload"  
                            alt="Portfolio Thumbnail" 
                        />
                        <i className="main-doc-projects__project-icon--popout-icon fas fa-external-link-alt"></i>
                        <div className="main-doc-projects__project-icon--overlay">
                            <div className="main-doc-projects__project-icon--text-content">
                                <h2>Web Developer Portfolio</h2>
                                <hr />
                                <p>View the Source Code for this portfolio on GitHub 
                                    <br /> 
                                    &lt; / &gt;
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
    
                {/* Icon for Update Rate Statistics Project  */}
                <a href="https://github.com/David-again/ATC-Update-Rate-Statistics" target="_blank">
                    <div className="main-doc-projects__project-icon">

                        <img 
                            src={logo4_04b_statistics} 
                            className="main-doc-projects__project-icon--preview-image lazyload" 
                            alt="Update Rate Statistics Thumbnail" 
                        />
                        <i className="main-doc-projects__project-icon--popout-icon fas fa-external-link-alt"></i>
                        
                        <div className="main-doc-projects__project-icon--overlay">
                            <div className="main-doc-projects__project-icon--text-content">
                                <h2>Aircraft Update Statistics</h2>
                                <hr />                                
                                <p> A python script developed to process aircraft statistcs (using Pandas); </p>
                                <p> Raw data in .csv format is processed and written to a .JSON file</p>
                            </div>
                        </div>
                    </div>
                </a>

            {/* Icon for Travel Site Project */}
                <a href="https://mystifying-noether-cd8657.netlify.app/" target="_blank">
                    <div className="main-doc-projects__project-icon">
                        <img 
                            src={logo7_travelsite} 
                            className="main-doc-projects__project-icon--preview-image lazyload" 
                            alt="PawTastic Thumbnail"
                        />
                        <i className="main-doc-projects__project-icon--popout-icon fas fa-external-link-alt"></i>
                        <div className="main-doc-projects__project-icon--overlay">
                            <div className="main-doc-projects__project-icon--text-content">
                                <h2>Clear View Escapes</h2>
                                <hr />
                                <p> Travel Agency Website. <br /> Developed with a mobile-first approach. Please view on your phones/small devices.</p>
                            </div>
                        </div>
                    </div>
                </a>

            {/* Icon for PawTastic Project */}
                <a href="https://david-again.github.io/pawtastic_pet-basics/" target="_blank">
                    <div className="main-doc-projects__project-icon">
                        <img 
                            src={logo3_pawtastic} 
                            className="main-doc-projects__project-icon--preview-image lazyload" 
                            alt="PawTastic Thumbnail"
                        />
                        <i className="main-doc-projects__project-icon--popout-icon fas fa-external-link-alt"></i>
                        <div className="main-doc-projects__project-icon--overlay">
                            <div className="main-doc-projects__project-icon--text-content">
                                <h2>PawTastic</h2>
                                <hr />
                                <p> Prototype registration page for a pet-grooming service; <br />Part of a larger website to be developed using ReactJS.</p>
                            </div>
                        </div>
                    </div>
                </a>

        </div>
    )
}

export default CurrentProjects;