import { lazy, Suspense } from 'react';
import Header from './homePage/Header';
import Footer from './homePage/Footer';
import {Switch, Route} from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const Collections = lazy(() => import('./pages/Collections'));
const Cart = lazy(() => import('./pages/Cart'));

function App() {
  return(
    <div className="m-0 p-0 box-border scroll-smooth bg-black text-white">
      <Header />
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/the-shoe-company" component={HomePage} />
          <Route exact path="/collections" component={Collections} />
          <Route path="/cart" component={Cart} />
        </Suspense>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;