import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import Question from './Question';
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
                this.setState({ questions: response.data});
            })
    }

    render() {
        return (
            <div>
                {this.state.questions.map(item => (
                    <div key={item.id}>
                        <Row>
                            <Col>
                                <Question QuestionText={item.questionText} AnswerText={item.answerText} Rating={item.rating} Id={item.id} />
                            </Col>
                        </Row>
                    </div>
                ))}
            </div>
        )
    };
}

export default Questionsandanswers;