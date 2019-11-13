import React, { Component } from 'react';
import { Col, Row, Accordion } from 'react-bootstrap';
import Question from './Question';
import Answer from './Answer';
import Rating from './Rating'

class Questionsandanswers extends Component {

    constructor() {
        super();

        this.state = {
            questions: [],
        };
    };
    componentDidMount() {
        //Fetch data here
        fetch(window.location.href + '/api/FaQ/Questions')
            .then((resp) => resp.json())
            .then(data => this.setState({ questions: data.questions }));
    }

    render() {
        return (
            <div>
                {this.state.questions.map(item => (
                    <div key="item.Id">
                        <Accordion>
                            <Accordion.Toggle eventKey="0">
                                <Row>
                                    <Question QuestionText={item.QuestionText} />
                                </Row>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
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