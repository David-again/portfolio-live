import React from 'react';
import logo5_boarding from '../../images/projects/05-boarding-pass-3.jpg'
import logo6_atc from '../../images/projects/06-ATC.jpg';

function FutureProjects() {
    return (
        <div>
            {/* <!-- Air Traffic Control Simulator Project  --> */}
                    <a href="https://github.com/David-again/ATCSim_Legacy#air-traffic-control-simulation-application" target="_blank">
                        <div className="main-doc-projects__project-icon">
                            <img src={logo6_atc} className="main-doc-projects__project-icon--preview-image lazyload" alt="ATC Sim Thumbnail" />
                            <i className="main-doc-projects__project-icon--popout-icon fas fa-external-link-alt"></i>
                            <div className="main-doc-projects__project-icon--overlay">
                                <div className="main-doc-projects__project-icon--text-content">
                                    <h2>ATC Sim [v2.0]</h2>
                                    <hr />
                                    <p> Web-based version of my "Legacy" ATCSim originially developed in MS VB6</p>
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* <!-- Boarding Pass Project  --> */}
                    <a href="#" className="under-construction">
                        <div className="main-doc-projects__project-icon">
                            <img src={logo5_boarding} className="main-doc-projects__project-icon--preview-image lazyload" alt="All Aboard Thumbnail" />
                            <i className="main-doc-projects__project-icon--popout-icon fas fa-external-link-alt"></i>
                            <div className="main-doc-projects__project-icon--overlay">
                                <div className="main-doc-projects__project-icon--text-content">
                                    <h2>All-Aboard</h2>
                                    <hr />
                                    <p> Web-based passenger check-in app for CRUD operations with MongoDB</p>
                                </div>
                            </div>
                        </div>
                    </a>
        </div>
    )
}

export default FutureProjects;