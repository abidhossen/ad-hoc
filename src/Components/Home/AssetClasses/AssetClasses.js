import React from 'react';
import './AssetClasses.css';
import TextImg from './Images/Group 1215.svg';
import AssetBg from './Images/g12.svg';
import Currencies from './Images/15981174051535797986 (1).svg';
import Shares from './Images/13468214171579156648 (1).svg';
import Indices from './Images/Group 1269 (1).svg';
import Commodities from './Images/Group 1255 (1).svg';
import Up from './Images/Polygon 1.svg';
import Down from './Images/Polygon 3.svg';

const AssetClasses = () => {
    return (
        <div className="AssetSection">
        <div className="AssetTopSection">
        <img src={TextImg} alt="Img"></img>
             <div className="Hd AccountTxt">Asset <span className="HdBold AccountTxt">Classes</span></div>
             <div className="HdSub">Let us create a solution tailored for your needs.</div>
        </div>
        <div className="AssetBottomSection">
            <div className="AssetLeftSection">
                <table className="AssetTableLeft">
                    <tr>
                        <td><img src={Currencies} alt="Currencies " className="LeftAssetImg"></img></td>
                        <td>
                            <h4 className="AssetTableHd">Currencies</h4>
                            <div className="AssetTableCnt">Over 60 currency pairs, USD, GBP, EUR, CHF, JPY, AUD, NZD</div>
                        </td>
                    </tr>
                    <br/>
                    <tr>
                        <td><img src={Shares} alt="Currencies" className="LeftAssetImg"></img></td>
                        <td>
                            <h4 className="AssetTableHd">Shares</h4>
                            <div className="AssetTableCnt">Trade 300+ of the world’s most successful companies including Apple, Amazon, Facebook, Google and many more</div>
                        </td>
                    </tr>
                    <br/>
                    <tr>
                        <td><img src={Indices} alt="Currencies" className="LeftAssetImg"></img></td>
                        <td>
                            <h4 className="AssetTableHd">Indices</h4>
                            <div className="AssetTableCnt">Global indices covering UK, US as well as all the main European and Asian indices</div>
                        </td>
                    </tr>
                    <br/>
                    <tr>
                        <td><img src={Commodities} alt="Currencies" className="LeftAssetImg"></img></td>
                        <td>
                            <h4 className="AssetTableHd">Commodities</h4>
                            <div className="AssetTableCnt">Oil, gold, silver, platinum and other exotic metals as well as coffee, cotton and other commodities</div>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="AssetRightSection">
                <table className="AssetTableRight">
                <tr>
                    <td/>
                    <td className="AssetRightTableHd">Rate</td>
                    <td className="AssetRightTableHd AssetRightRight">Change</td>
                </tr>
                <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                </tr>
                <tr>
                    <td className="AssetRightTableHd">Currencies</td>
                    <td/>
                    <td/>
                </tr>
                <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                </tr>
                <tr>
                    <td className="AssetRightTableCnt">GBPUSD</td>
                    <td className="AssetRightTableCnt">1.41143</td>
                    <td className="AssetRightTableCnt AssetRightRight">
                        <img src={Up} alt="State"/>
                    </td>
                </tr>
                <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                </tr>
                <tr>
                    <td className="AssetRightTableCnt">EURUSD</td>
                    <td className="AssetRightTableCnt">1.21766</td>
                    <td className="AssetRightTableCnt AssetRightRight">
                        <img src={Up} alt="State"/>
                    </td>
                </tr>
                <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                </tr>
                <tr>
                    <td className="AssetRightTableCnt">EURGBP</td>
                    <td className="AssetRightTableCnt">0.86270</td>
                    <td className="AssetRightTableCnt AssetRightRight">
                        <img src={Down} alt="State"/>
                    </td>
                </tr>
                <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                </tr>
                <tr>
                    <td className="AssetRightTableCnt">USDJPY</td>
                    <td className="AssetRightTableCnt">109.640</td>
                    <td className="AssetRightTableCnt AssetRightRight">
                        <img src={Up} alt="State"/>
                    </td>
                </tr>
                <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                </tr>
                <tr>
                    <td className="AssetRightTableHd">Metals</td>
                    <td/>
                    <td/>
                </tr>
                <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                </tr>
                <tr>
                    <td className="AssetRightTableCnt">XAUUSD</td>
                    <td className="AssetRightTableCnt">1891.16</td>
                    <td className="AssetRightTableCnt AssetRightRight">
                        <img src={Up} alt="State"/>
                    </td>
                </tr>
                <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                </tr>         

                <tr>
                    <td className="AssetRightTableCnt">XAGUSD</td>
                    <td className="AssetRightTableCnt">27.838</td>
                    <td className="AssetRightTableCnt AssetRightRight">
                        <img src={Down} alt="State"/>
                    </td>
                </tr>
                <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                </tr>
                <tr>
                    <td className="AssetRightTableHd">Commodities</td>
                    <td/>
                    <td/>
                </tr>
                <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                </tr>
                <tr>
                    <td className="AssetRightTableCnt">US Oil</td>
                    <td className="AssetRightTableCnt">69.58</td>
                    <td className="AssetRightTableCnt AssetRightRight">
                        <img src={Down} alt="State"/>
                    </td>
                </tr>
                <tr>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                        <td><hr className="TableMargin"/></td>
                </tr>
                <tr>
                    <td className="AssetRightTableCnt">Brent</td>
                    <td className="AssetRightTableCnt">71.80</td>
                    <td className="AssetRightTableCnt AssetRightRight">
                        <img src={Up} alt="State"/>
                    </td>
                </tr>

                </table>
            </div>
        </div>

        </div>
    );
};

export default AssetClasses;