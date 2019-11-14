﻿import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import Question from './Question';
import Answer from './Answer';
import Rating from './Rating';
import axios from 'axios';

class Questionsandanswers extends Component {

    constructor() {
        super();

        this.state = {
            questions: [],
        };
    };
    componentDidMount() {
        //Fetch data here
        this.showQuestion();
    }

    async showQuestion() {
        axios.get('/api/FaQ')
            .then((response) => {
                console.log(response);
                this.setState({ questions: response.data});
            })
        console.log("I got here")
    }

    render() {
        return (
            <div>
                {this.state.questions.map(item => (
                    <div key={item.id}>
                        <Row>
                            <Question QuestionText={item.questionText} AnswerText={item.answerText} Rating={item.rating} Id={item.id}/>
                        </Row>
                    </div>
                ))}
            </div>
        )
    };
}

export default Questionsandanswers;