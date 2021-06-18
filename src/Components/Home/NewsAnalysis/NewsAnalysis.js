import React from 'react';
import './NewsAnalysis.css'
import analysisLogo from './images/Group 1242.png'
const NewsAnalysis = () => {
    return (
        <div className="news-container">
            <div className="news-header text-center">
                <img src={analysisLogo} alt="" />
                <h1>News <span className="extra-header">Analysis</span></h1>
                <p>Keep yourself updated with all daily trading updates</p>
                <button className="news-button">Read All Update</button>
            </div>
            <div className="newsCard-container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 ">
                        <div className="newsCard newsCard-active">
                        <div className="newsCard-time">
                                September, 15 2017
                            </div>
                            <div className="newsCard-header">
                                New trends in UI/UX Design World Integration
                            </div>
                            <div className="newsCard-content">
                                Specially for our VIP customers he LH Crypto team representatives Alexander mirnov and Antonis Lapos will conduct a number of personal meeting...
                            </div>
                            <button className="newsCardButton-active">
                                View Details
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="newsCard">
                        <div className="newsCard-time">
                                September, 15 2017
                            </div>
                            <div className="newsCard-header">
                                New trends in UI/UX Design World Integration
                            </div>
                            <div className="newsCard-content">
                                Specially for our VIP customers he LH Crypto team representatives Alexander mirnov and Antonis Lapos will conduct a number of personal meeting...
                            </div>
                            <button className="newsCard-button">
                                View Details
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="newsCard">
                            <div className="newsCard-time">
                                September, 15 2017
                            </div>
                            <div className="newsCard-header">
                                New trends in UI/UX Design World Integration
                            </div>
                            <div className="newsCard-content">
                                Specially for our VIP customers he LH Crypto team representatives Alexander mirnov and Antonis Lapos will conduct a number of personal meeting...
                            </div>
                            <button className="newsCard-button">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsAnalysis;