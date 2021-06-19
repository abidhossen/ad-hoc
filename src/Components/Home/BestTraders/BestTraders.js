import React from 'react';
import './BestTraders.css';
import TextImg from './Images/Group 1215.svg';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {GoPrimitiveDot} from 'react-icons/go';
import star from './Images/Group 1292.svg';
import TradeImg from './Images/Group 1317.svg';
import Trade from './Images/Group 1318.png';


const TraderArr=[
    {
        id:1,
        traderHd: "Trade 1 Performance",
        performance: star,
        trade: Trade

    },

    {
        id:2,
        traderHd: "Trade 2 Performance",
        performance: star,
        trade: TradeImg

    },

    {
        id:3,
        traderHd: "Trade 3 Performance",
        performance: star,
        trade: TradeImg,

    },

    {
        id:4,
        traderHd: "Trade 4 Performance",
        performance: star,
        trade: TradeImg,

    }
]

function CreateCard(TraderArr){
    return <TraderPerformanceCard
            key= {TraderArr.id}
            Hd={TraderArr.traderHd}
            performaceImg={TraderArr.performance}
            TradeImage={TraderArr.trade}
            />

}
function TraderPerformanceCard(props){

    
    return(
        <div className="TraderCard">
            <div className="CardHd">{props.Hd}</div>
            <div className="TraderPerformance">
                <img src={props.performaceImg} alt="Star"/>
            </div>
            <div className="PerformanceImg">
                <img src={props.TradeImage} alt="Trade"/>
            </div>
            <div className="CardBtn">
                <button className="CardOpenactBtn">Open Account</button>
            </div>
        </div>
    )
}


const BestTraders = () => {
    return (
        <div className="BestTraderDiv">
        <div className="TraderTopSection">
            <div className="TraderSectionLeft">
            <div className="col Text">
             <img src={TextImg} alt="Img"></img>
             <div className="Hd TraderTxt">Choose Your</div>
             <div className="HdBold TraderTxt">Best Traders</div>
             
             <div className="BttnDiv">
                 <button className="LiveActBtn">For Investors </button>
                 <button className="ForTraderBtn">For Traders</button>
             </div>         

             </div>
            </div>
            <div className="TraderSectionRight">
            <div className="TradingListHd">
            Start trading like a pro today by copying the trades of successful traders.
            </div>
            <div className="TraderList row">
            <div className="col">
                <GoPrimitiveDot className="ListIco"/>
                Full control of your money
            </div>
            <div className="col">
                <GoPrimitiveDot className="ListIco"/>
                Protection of your funds
            </div>
                
            </div>
            <div className="TraderList row">
            <div className="col">
                <GoPrimitiveDot className="ListIco"/>
                Flexible platform
            </div>
            <div className="col">
                <GoPrimitiveDot className="ListIco"/>
                Fair and honest fees
            </div>
               
            </div>

            </div>
        </div>
        <div className="TraderBottomSection ">
        {TraderArr.map(CreateCard)}
        </div>
        </div>
    );
};

export default BestTraders;