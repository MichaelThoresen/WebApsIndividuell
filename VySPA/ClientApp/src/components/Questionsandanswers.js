import React from 'react';
import { Col, Row, Accordion } from 'react-bootstrap';
import Question from './Question';
import Answer from './Answer';
import Rating from './Rating'

const questionsandanswers = () => {

    //Fetch data here
    fetch('api/FaQ/Questions')
        .then(function () {

        })

    return (
        <div>
            {list.map(item => (
                <div>
                    <Row>
                        <Question QuestionText={item.QuestionText}  />
                    </Row>
                    <Row>
                        <Answer AnswerText={item.AnswerText} />
                    </Row>
                    <Row>
                    <Rating Rating={item.Rating} />
                    </Row>
                </div>
            ))}
        </div>
    )
}

return default questionsandanswers;