import React, { Component } from 'react';
import { Col, Row, Accordion } from 'react-bootstrap';
import Question from './Question';
import Answer from './Answer';
import Rating from './Rating';
import axios from 'axios';
import Axios from 'axios';

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
        axios.get('api/FaQ')
            .then(function (response){
                var data = response.json();
                this.setState({ question: data, isFetched: true });
                console.log(this.state)
            })
            .catch(function (error) {
                console.log(error);
            })
        console.log("I got here")
    }

    render() {
        return (
            <div>
                {this.state.questions.map(item => (
                    <div key="item.Id">
                        <Accordion>
                            <Accordion.Toggle eventKey="{item.id}">
                                <Row>
                                    <Question QuestionText={item.QuestionText} />
                                </Row>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="{item.id}">
                                <Row>
                                    <Answer AnswerText={item.AnswerText} />
                                </Row>
                                <Row>
                                    <Rating Rating={item.Rating} />
                                </Row>
                            </Accordion.Collapse>
                        </Accordion>
                    </div>
                ))}
            </div>
        )
    };
}

export default Questionsandanswers;