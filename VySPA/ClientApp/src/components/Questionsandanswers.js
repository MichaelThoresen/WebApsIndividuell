import React, { Component } from 'react';
import { Col, Row, Accordion } from 'react-bootstrap';
import { Question } from './Question';
import { Answer } from './Answer';
import { Rating } from './Rating'

class Questionsandanswers extends Component {

    constructor() {
        super();
    //Fetch data here
    /*fetch('api/FaQ/Questions')
        .then((resp) => resp.json())
        .then(function (data) {
            let list = data.results;
            return list;
        });*/
    }
    render() {
        return (
            <div>
                {list.map(item => (
                    <div>
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