import React from 'react';
import { Col, Row, Accordion } from 'react-bootstrap';
import Question from './Question';
import Answer from './Answer';
import Rating from './Rating'

const questionsandanswers = () => {

    //Fetch data here

    return (
        <div>
            {list.map(item => (
                <Row>
                    <Question QuestionText={item.QuestionText}  />
                </Row>
                <Row>
                    <Answer AnswerText={item.AnswerText} />
                </Row>
                <Row>
                    <Rating Rating={item.Rating} />
                </Row>
            ))}
        </div>
    )
}

return default questionsandanswers;