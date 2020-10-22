import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './main.scss';

import Header from './components/Header';
import Main from './pages/main';
import Product from './pages/product';
import Footer from './components/Footer';


const App = () => (
  <div className="App">
    <Header title="Lista de vinhos" />
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
        <Footer text="Footer" />
  </div>
);

export default App;
