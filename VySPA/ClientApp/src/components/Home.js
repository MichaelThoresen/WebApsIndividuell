import React, { Component } from 'react';
import Questionsandanswers from './Questionsandanswers';

export class Home extends Component {
  displayName = Home.name

  render() {
      return (
          <div>
              <Questionsandanswers />
          </div>
    );
  }
}
