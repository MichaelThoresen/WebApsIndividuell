import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Submit from './components/SubmitQuestion/Submit';
import UserQuestions from './components/UserQuestions/UserQuestions'

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/submit' component={Submit} />
        <Route path='/userQuestions' component={UserQuestions} />
      </Layout>
    );
  }
}
