import React, { Component } from 'react';

class Question extends Component{
    constructor(props) {
        super();
    }
    render() {

        return (
            <div>
                <p>{this.props.QuestionText}</p>
            </div >
        );
    }
}
export default Question
