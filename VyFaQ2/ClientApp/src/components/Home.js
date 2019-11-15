import React, { Component } from 'react';
import Questionsandanswers from './FaQ/Questionandanswers';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <Questionsandanswers />
      </div>
    );
  }
}
