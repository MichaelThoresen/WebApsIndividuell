import React, { Component } from 'react';

class Answer extends Component {

    constructor(props) {
        super();
    }
    render() {
        return (
            <div>
                <p>{this.props.AnswerText}</p>
            </div>
        );
    }
}
export default Answer;
