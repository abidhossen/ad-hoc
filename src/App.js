import AccountType from './Components/Home/AccountType/AccountType';
import AssetClasses from './Components/Home/AssetClasses/AssetClasses';
import BestTraders from './Components/Home/BestTraders/BestTraders';
import Footer from './Components/Home/Footer/Footer';
import Header from './Components/Home/Header/Header';
import MarketParners from './Components/Home/MarketPartners/MarketParners';
import NewsAnalysis from './Components/Home/NewsAnalysis/NewsAnalysis';
import OpenAccount from './Components/Home/OpenAccount/OpenAccount';
import TradingPlatform from './Components/Home/TradingPlatforms/TradingPlatform';

function App() {
  return (
    <div>
      <Header></Header>
      <BestTraders></BestTraders>
      <AccountType></AccountType>
      <AssetClasses></AssetClasses>
      <OpenAccount></OpenAccount>
      <MarketParners></MarketParners>
      <TradingPlatform></TradingPlatform>
      <NewsAnalysis></NewsAnalysis>
      <Footer></Footer>
    </div>
  );
}

export default App;
