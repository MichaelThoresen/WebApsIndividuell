import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

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
                        <button>Thumbs up</button>
                    </Col>
                    <Col>
                        <p>{props.Rating}</p>
                    </Col>
                    <Col>
                        <button>Thumbs down</button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Rating;
