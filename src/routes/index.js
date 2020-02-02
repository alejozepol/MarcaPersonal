import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../container/Layout';
import Home from '../pages';
import QuienSoy from '../pages/QuienSoy';
import Portafolio from '../pages/Portafolio';
import CV from '../pages/CV';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path='/QuienSoy' component={QuienSoy} />
          <Route exact path='/CV' component={CV} />
          <Route exact path='/HV' component={CV} />
          <Route exact path='/Portafolio' component={Portafolio} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
