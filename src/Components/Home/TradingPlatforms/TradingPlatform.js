import React from 'react';
import tradeLogoSmall from './images/Group 1242.png';
import downloadArrow from './images/Path_131_1_-2.png'
import mt5 from './images/mt.png';
import globalTrade from './images/glt.png';
import investment from './images/investment.png';
import tradeImage from './images/Mask Group 10.png';
import windows from './images/Group 1261.png';
import apple from './images/Group 1262.png';
import android from './images/Group 1263.png'
import './TradingPlatform.css'
const TradingPlatform = () => {
    return (
        <div className="tradingPlatform-container">
            <div className="trading-details">
                <div className="trading-details1">
                    <img src={tradeLogoSmall} alt="" />
                    <div className="trade-header">
                        Choose Trading Platform <br />
                        <span className="tradeHeader-custom">
                            Suitable for you
                        </span>
                    </div>
                    <div className="trade-content">
                    At KF Market we understand that different clients have different needs. Therefore, we offer a wide selection of trusted, award-winning platforms and account types to choose from.
                    </div>
                    <div className="trade-button">
                        Download <img src={downloadArrow} alt="" />
                    </div>
                    <div className="trading-icons">
                        <img className="mr-5" src={mt5} alt="" />
                        <img className="mr-5" src={globalTrade} alt="" />
                        <img className="mr-5" src={investment} alt="" />
                    </div>
                </div>
                <div className="trading-details2">
                    <div className="trade-image text-center">
                        <img src={tradeImage} alt="" />
                    </div>
                    <div className="tradeImage-icons text-center">
                        <img className="ml-3 mr-3" src={windows} alt="" />
                        <img className="ml-3 mr-3" src={apple} alt="" />
                        <img className="ml-3 mr-3" src={android} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradingPlatform;