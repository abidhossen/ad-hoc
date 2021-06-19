import React from 'react';
import './AccountType.css';
import TextImg from './Images/Group 1215.svg';


const AccountType = () => {
    return (
        <div className="AccountTypeSection">
        <div className="AccountTopSection">
        <img src={TextImg} alt="Img"></img>
             <div className="Hd AccountTxt">Choose your <span className="HdBold AccountTxt">Account Type</span></div>
             <div className="HdSub">Our pricing strategy constantly aims at striking a balance in between the expectations of our clients and execution partners.</div>
        </div>
        <div className="AccountBottomSection">
            <div className="AccountTypeCard">
                <div className="AccountCardHd Fixed">Fixed</div>
                <div>
                <div className="AccountCardSubHd FixedBg">Market Execution/ Instant Execution</div>
                </div>
                <table className="AccountTable">
                    
                    <tr>
                        <td className="TableLeftSec">Initial deposit</td>
                        <td className="TableRightSec">$100 / €100</td>
                    </tr>
                    <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                    </tr>
                    <tr>
                        <td className="TableLeftSec">Leverage</td>
                        <td className="TableRightSec">Up to 1:1000</td>
                    </tr>
                    <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                    </tr>
                    <tr>
                        <td className="TableLeftSec">Order volume</td>
                        <td className="TableRightSec">From 0.01 with step 0.01</td>
                    </tr>
                    <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                    </tr>
                    <tr>
                        <td className="TableLeftSec">Spread</td>
                        <td className="TableRightSec">Fixed from 3 pips</td>
                    </tr>
                    <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                    </tr>
                    <tr>
                        <td className="TableLeftSec">Commission</td>
                        <td className="TableRightSec">No</td>
                    </tr>
                    <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                    </tr>
                    <tr>
                        <td className="TableLeftSec">Stop Out level</td>
                        <td className="TableRightSec">20%</td>
                    </tr>
                    <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                    </tr>
                    <tr>
                        <td className="TableLeftSec">Account Currency</td>
                        <td className="TableRightSec">USD, EUR</td>
                    </tr>
                </table>
                <button className="AccountCardBtn FixedBtn">Open Account</button>
            </div>

            <div className="AccountTypeCard">
                <div className="AccountCardHd Standard">Standard</div>
                <div>
                <div className="AccountCardSubHd StandardBg">Market Execution/ Instant Execution</div>
                </div>
                <table className="AccountTable">
                    
                    <tr>
                        <td className="TableLeftSec">Initial deposit</td>
                        <td className="TableRightSec">$100 / €100</td>
                    </tr>
                    <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                    </tr>
                    <tr>
                        <td className="TableLeftSec">Leverage</td>
                        <td className="TableRightSec">Up to 1:1000</td>
                    </tr>
                    <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                    </tr>
                    <tr>
                        <td className="TableLeftSec">Order volume</td>
                        <td className="TableRightSec">From 0.01 with step 0.01</td>
                    </tr>
                    <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                    </tr>
                    <tr>
                        <td className="TableLeftSec">Spread</td>
                        <td className="TableRightSec">Fixed from 3 pips</td>
                    </tr>
                    <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                    </tr>
                    <tr>
                        <td className="TableLeftSec">Commission</td>
                        <td className="TableRightSec">No</td>
                    </tr>
                    <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                    </tr>
                    <tr>
                        <td className="TableLeftSec">Stop Out level</td>
                        <td className="TableRightSec">20%</td>
                    </tr>
                    <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                    </tr>
                    <tr>
                        <td className="TableLeftSec">Account Currency</td>
                        <td className="TableRightSec">USD, EUR</td>
                    </tr>
                </table>
                <button className="AccountCardBtn StandardBtn">Open Account</button>
            </div>

            <div className="AccountTypeCard">
                <div className="AccountCardHd ECN">ECN</div>
                <div>
                <div className="AccountCardSubHd ECNBg">Market Execution</div>
                </div>
                <table className="AccountTable">
                    
                    <tr>
                        <td className="TableLeftSec">Initial deposit</td>
                        <td className="TableRightSec">$100 / €100</td>
                    </tr>
                    <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                    </tr>
                    <tr>
                        <td className="TableLeftSec">Leverage</td>
                        <td className="TableRightSec">Up to 1:1000</td>
                    </tr>
                    <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                    </tr>
                    <tr>
                        <td className="TableLeftSec">Order volume</td>
                        <td className="TableRightSec">From 0.01 with step 0.01</td>
                    </tr>
                    <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                    </tr>
                    <tr>
                        <td className="TableLeftSec">Spread</td>
                        <td className="TableRightSec">Fixed from 3 pips</td>
                    </tr>
                    <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                    </tr>
                    <tr>
                        <td className="TableLeftSec">Commission</td>
                        <td className="TableRightSec">No</td>
                    </tr>
                    <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                    </tr>
                    <tr>
                        <td className="TableLeftSec">Stop Out level</td>
                        <td className="TableRightSec">20%</td>
                    </tr>
                    <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                    </tr>
                    <tr>
                        <td className="TableLeftSec">Account Currency</td>
                        <td className="TableRightSec">USD, EUR</td>
                    </tr>
                </table>
                <button className="AccountCardBtn ECNBtn">Open Account</button>
            </div>

        </div>
       </div>
    );
};

export default AccountType;