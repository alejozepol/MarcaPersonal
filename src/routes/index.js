import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../container/Layout';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Portfolio from '../pages/Portfolio';
import CV from '../pages/CV';
import '../styles/app.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path='/QuienSoy' component={AboutMe} />
          <Route exact path='/sobremi' component={AboutMe} />
          {/*
          <Route exact path='/CV' component={CV} />
          <Route exact path='/HV' component={CV} />
          <Route exact path='/Portafolio' component={Portfolio} /> */}
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
