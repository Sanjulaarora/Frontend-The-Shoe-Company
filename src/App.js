import Header from './homePage/Header';
import HomePage from './pages/HomePage';
import Collections from './pages/Collections';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Footer from './homePage/Footer';
import {Switch, Route} from 'react-router-dom';

function App() {
  return(
    <div className="m-0 p-0 box-border scroll-smooth bg-black text-white">
      <Header />
      <Switch>
        <Route exact path="/the-shoe-company" component={HomePage} />
        <Route exact path="/collections" component={Collections} />
        <Route path="/cart" component={Cart} />
        <Route path="/payment" component={Payment} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;