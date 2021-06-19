import React from 'react';
import mastercard from './images/mastercard.png';
import topChange from './images/topchange.png';
import neteller from './images/neteller.png';
import perfectMoney from './images/perfect-money.png';
import skrill from './images/skrill.png';
import swift from './images/swift.png';
import visa from './images/visa.png';
import webMoney from './images/webmoney.png';
import './Footer.css'
const Payments = () => {
    return (
        <div  className="payment-container">
            <div className='payments'>
            <div className="payment-icons">
                        <img src={topChange} alt="this"/>
                        </div>
                   
                        <div className="payment-icons">
                        <img src={mastercard} alt="this"/>
                       </div>
                   
                        <div className="payment-icons">
                        <img src={neteller} alt="this"/>
                        </div>
                    
                        <div className="payment-icons">
                        <img src={perfectMoney} alt="this"/>
                        </div>
                    
                        <div className="payment-icons">
                        <img src={skrill} alt="this"/>
                        </div>
                   
                        <div className="payment-icons">
                        <img src={swift} alt="this"/>
                        </div>
                   
                        <div className="payment-icons">
                        <img src={visa} alt="this"/>
                        </div>
                   
                        <div className="payment-icons">
                        <img src={webMoney} alt="this"/>
                        </div>
            </div>
        </div>
    );
};

export default Payments;