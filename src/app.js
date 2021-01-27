import Header from './components/header';
import Footer from './components/footer';
import Shop from './components/shop';
import { Route, Switch } from 'react-router-dom';
import Cart from './components/cart';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
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
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
