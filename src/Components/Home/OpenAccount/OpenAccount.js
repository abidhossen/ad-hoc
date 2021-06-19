import React from 'react';
import './OpenAccount.css';
import logo from './images/Group 1229.png'
import one from './images/one.png'
import two from './images/two.png'
import three from './images/three.png'
import arrow from './images/arrow.png'
import account from './images/Group 1233.png'
const OpenAccount = () => {
    return (
        <div className="openAccount-container">
            <div className="openAccount-header text-center">
                <img src={logo} alt="" />
                <div className="openHeader-title ">
                    Ready to Open <span className="openHeader-custom">Your Account with Us?</span>
                </div>
                <div className="openHeader-content">
                    It's free and easy to set up an account to trade with KF Markets
                </div>
                </div>
                <div className="openAccount-content">
                    <div className="section">
                        <div className="open-image">
                            <img src={one} alt="" />
                        </div>
                        <div className="open-text">
                            Fill in for online application form
                        </div>
                        <a href="">
                            SignUp
                        </a>
                    </div>
                    <div className="arrow">
                        <img src={arrow} alt="" />
                    </div>
                    <div className="section">
                        <div className="open-image">
                            <img src={two} alt="" />
                        </div>
                        <div className="open-text">
                            Provide your ID to verify
                        </div>
                        <a href="">
                            Apply
                        </a>
                    </div>
                    <div className="arrow">
                        <img src={arrow} alt="" />
                    </div>
                    <div className="section">
                        <div className="open-image">
                            <img src={three} alt="" />
                        </div>
                        <div className="open-text">
                            Fund to activate account
                        </div>
                        <a href="">
                            Fund
                        </a>
                    </div>
                    
                </div>
                <div className="account-button text-center mt-5 ">
                <img className="text-center" src={account} alt="" />
                </div>
            
        </div>
    );
};

export default OpenAccount;