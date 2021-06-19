import React from 'react';
import './MarketPartners.css'
import logo from './images/Group 1253.png'
import icon1 from './images/Group 1320.png'
import icon2 from './images/Group 1321.png'
import icon3 from './images/Group 1322.png'
import icon4 from './images/Group 1323.png'
import client from './images/Group 1335.png'
const MarketParners = () => {
    return (
        <div className="market-container">
            <div className="market-header text-center">
                <div className="headerLogo">
                    <img src={logo} alt="" />
                </div>
                <div className="marketHeader-title">
                    Ready to become
                    <span className="marketHeader-custom"> KF Markets Partners?</span>
                </div>
                <div className="marketHeader-text">
                    Give your clients access to global financial markets
                </div>
            </div>
            <div className="marketHeader-content">
                <div className="section-market">
                    <div className="section-container">
                        <div className='icon1 row'>
                            <div className="col-md-2"><img src={icon1} alt="" /></div>
                            <div className="col-md-10 "><span className="icon-text">
                                Share your partnership link with your Partner Trader
                            </span></div>

                        </div>
                        <div className="hr">
                            <hr />
                        </div>
                        <div className='icon1 row'>
                            <div className="col-md-2"><img src={icon2} alt="" /></div>
                            <div className="col-md-10"><span className="icon-text">
                                Share your partnership link with your Partner Trader
                            </span></div>

                        </div>
                        <div className="hr">
                            <hr />
                        </div>
                        <div className='icon1 row'>
                            <div className="col-md-2"><img src={icon3} alt="" /></div>
                            <div className="col-md-10" ><span className="icon-text">
                                Share your partnership link with your Partner Trader
                            </span></div>

                        </div>
                        <div className="hr">
                            <hr />
                        </div>
                        <div className='icon1 row'>
                            <div className="col-md-2"><img src={icon4} alt="" /></div>
                            <div className="col-md-10" ><span className="icon-text">
                                Share your partnership link with your Partner Trader
                            </span></div>

                        </div>
                    </div>
                </div>
                <div className="section-market">
                    <img src={client} alt="" />
                </div>
            </div>
        </div>
    );
};

export default MarketParners;