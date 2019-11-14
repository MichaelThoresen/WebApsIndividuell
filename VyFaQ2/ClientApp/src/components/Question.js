import React, { Component } from 'react';
import { Card, CardHeader } from 'reactstrap';
import Answer from './Answer';
import Rating from './Rating';

class Question extends Component {

    state = {
        isOpen: false
    }

    handleClick = () => {
        console.log(this.state)
        this.setState({ isOpen: !this.state.isOpen})

    }

    render() {

        return (
            <div>
                <Card>
                    <CardHeader onClick={this.handleClick}>
                        <p>{this.props.QuestionText}</p>
                    </CardHeader>
                    <Answer AnswerText={this.props.AnswerText} Rating={this.props.Rating} isOpen={this.state.isOpen} />
                </Card>
            </div >
        );
    }
}
export default Question
