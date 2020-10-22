import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Main from './pages/main';
import Product from './pages/product';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <Header title="( Evino ) - Lista de Vinhos" />
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/detail/:id">
              <Product />
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer text="( Evino ) - Da vinícola para sua casa" />
  </div>
);

export default App;
