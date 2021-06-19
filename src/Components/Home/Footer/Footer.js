import React from 'react';
import './Footer.css';
import Payments from './Payments';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
   
    return (
       <div>
           <Payments></Payments>
            <footer className="footer-area ">
            <div className="footer-container">
            <div className="row pt-5">
                    <div className="col-md-2">
                        <h4 className="footer-title">About</h4>
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Regilation</a></li>
                            <li><a href="#">Documents</a></li>
                            <li><a href="#">Career</a></li>
                            <li><a href="#">Contacts</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 ">
                        <h4 className="footer-title">Trading</h4>
                        <ul>
                            <li><a href="#">Open an Account</a></li>
                            <li><a href="#">Accounts Overview</a></li>
                            <li><a href="#">Trading Instruments</a></li>
                            <li><a href="#">Deposit Funds</a></li>
                            <li><a href="#">Withdraw Funds</a></li>
                            <li><a href="#">Meta Trader 4</a></li>
                            <li><a href="#">Meta Trader 5</a></li>
                            <li><a href="#">Open RAMM Account</a></li>
                            <li><a href="#">KF Trading RAMMM for investors</a></li>
                            <li><a href="#">KF Trading RAMM for traders</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                       <h4 className="footer-title">For Clients</h4>
                       <ul> 
                            <li><a href="#">Analytics</a></li>
                            <li><a href="#">Forex news</a></li>
                            <li><a href="#">Expert Advisors</a></li>
                            <li><a href="#">Vps hosting</a></li>
                            <li><a href="#">AutoChartist</a></li>
                            <li><a href="#">Economic Calender</a></li>
                            <li><a href="#">Trader's Calculator</a></li>
                            <li><a href="#">Trading Hours</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Blog</a></li>
                            </ul>
                    </div>
                    <div className="col-md-2">
                        <h4 className="footer-title">For Partners</h4>
                        <ul> 
                            <li><a href="#">Become a partner</a></li>
                            <li><a href="#">Affiliate Programs</a></li>
                            <li><a href="#">Partner Community</a></li>
                            <li><a href="#">Vps hosting</a></li>
                            <li><a href="#">AutoChartist</a></li>
                            <li><a href="#">Economic Calender</a></li>
                            <li><a href="#">Trader's Calculator</a></li>
                            <li><a href="#">Trading Hours</a></li>
                            </ul>
                    </div>
                    <div className="col-md-3">
                        <h4 className="footer-title">Platform</h4>
                        <ul> 
                            <li><a href="#">Get cashback from KFMarkets</a></li>
                            <li><a href="#">0% commission</a></li>
                            <li><a href="#">Switch your broker bonus</a></li>
                            <li><a href="#">Double your trading deposit</a></li>
                            <li><a href="#">Trade demo, earn real cash</a></li>
                            <li><a href="#">Invite a friend and get some extra cash</a></li>
                            <li><a href="#">Transfer your account to KFMarkets</a></li>
                            <li><a href="#">VIP-status</a></li>
                            </ul>
                    </div>
                </div>
               
            </div>
            <div className="footer-hr">
                <hr />
            </div>
           <div className="footer-bottom">
               <div className="footer-links">
               <a href="" > Privacy Policy <span className="ml-3">|</span></a>
               <a href=""> AML Policy <span className="ml-3">|</span></a>
               <a href="">Processing of personal data <span className="ml-3">|</span></a>
               <a href="">Terms & Conditions</a>
               </div>
               <p className="mt-3">
               © 2007—2021 KF Markets Ltd., Suite 305, Griffith Corporate Centre, Kingstown, Saint Vincent and the Grenadines. All rights reserved.
               </p>
               <p>
               Registered by The Financial Services Authority (FSA) of Saint Vincent and the Grenadines, registration No. 22567 IBC 2015. KF Markets is a member of The Financial Commission, an independent external dispute resolution (EDR) organization. The interests of KF Markets' clients are protected by the Financial Commission's Compensation Fund for up to €20 000 per claim.
               </p>
           </div>
        </footer>
       </div>
        
    );
};

export default Footer;