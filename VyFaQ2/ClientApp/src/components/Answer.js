import React, { Component } from 'react';
import { Card, CardBody, Collapse, Row } from 'reactstrap'
import Rating from './Rating';

class Answer extends Component {

        

    render() {
        return (
                <Collapse isOpen={this.state.isOpen}>
                    <CardBody>
                        <Row>
                            <p>{this.props.AnswerText}</p>
                        </Row>
                        <Row>
                            <Rating Rating={this.props.Rating} />
                        </Row>
                    </CardBody>
                </Collapse>
        );
    }
}
export default Answer;
