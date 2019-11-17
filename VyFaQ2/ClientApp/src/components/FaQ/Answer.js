import React, { Component } from 'react';
import { CardBody, Collapse, Row } from 'reactstrap'
import Rating from './Rating';

class Answer extends Component {

        

    render() {
        return (
                <Collapse isOpen={this.props.isOpen}>
                    <CardBody>
                        <Row>
                            <p>{this.props.AnswerText}</p>
                        </Row>
                        <Row>
                            <Rating Rating={this.props.Rating} Id={this.props.Id} />
                        </Row>
                    </CardBody>
                </Collapse>
        );
    }
}
export default Answer;
