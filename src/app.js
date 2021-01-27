import Header from './components/header';
import Footer from './components/footer';
import Shop from './components/shop';
import { Route, Switch } from 'react-router-dom';
import Cart from './components/cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Shop />
        </Route>
        <Route exact path="/products">
          <Shop />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
