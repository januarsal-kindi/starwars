import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import { Route, Switch,withRouter } from 'react-router-dom';
import HomeContainer from './Container/Home/HomeContainer'
import FilmContainer from './Container/Film/FilmContainer'



class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/film/:id"  component={FilmContainer} />
          <Route path="/people/:id" component={HomeContainer} />
        </Switch>
      </Layout>
    );
  }
}

export default withRouter(App);
