import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class Rating extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Row>
                    <p>Var dette nyttig?</p>
                </Row>
                <Row>
                    <Col>
                        <button>Ja!</button>
                    </Col>
                    <Col>
                        <p>{this.props.Rating}</p>
                    </Col>
                    <Col>
                        <button>Nei!</button>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Rating;
