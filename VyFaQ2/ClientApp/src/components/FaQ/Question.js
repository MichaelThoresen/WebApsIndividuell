import React, { Component } from 'react';
import { Card, CardHeader } from 'reactstrap';
import Answer from './Answer';

class Question extends Component {

    state = {
        isOpen: false
    }

    handleClick = () => {
        this.setState({ isOpen: !this.state.isOpen})

    }

    render() {

        return (
            <div>
                <Card>
                    <CardHeader onClick={this.handleClick}>
                        <p>{this.props.QuestionText}</p>
                    </CardHeader>
                    <Answer Id={this.props.Id} AnswerText={this.props.AnswerText} Rating={this.props.Rating} isOpen={this.state.isOpen} />
                </Card>
            </div >
        );
    }
}
export default Question
