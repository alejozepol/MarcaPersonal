import React from 'react';
import dotenv from 'dotenv';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../container/Layout';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Portfolio from '../pages/Portfolio';
import CV from '../pages/CV';
import '../styles/app.scss';

// eslint-disable-next-line no-unused-vars
const config = dotenv.config();

const { baseURL } = process.env;

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path={`${baseURL}/`} component={Home} />
          <Route exact path={`${baseURL}/QuienSoy`} component={AboutMe} />
          <Route exact path={`${baseURL}/sobremi`} component={AboutMe} />
          <Route exact path={`${baseURL}/sobreMi`} component={AboutMe} />
          <Route exact path={`${baseURL}/CV`} component={CV} />
          <Route exact path={`${baseURL}/cv`} component={CV} />
          <Route exact path={`${baseURL}/HV`} component={CV} />
          <Route exact path={`${baseURL}/hv`} component={CV} />
          <Route exact path={`${baseURL}/Portafolio`} component={Portfolio} />
          <Route exact path={`${baseURL}/portafolio`} component={Portfolio} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
