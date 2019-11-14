import React, { Component } from 'react';
import { Col, Row, Button } from 'reactstrap';

class Rating extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <p>Var dette nyttig?</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button color="success">Ja!</Button>
                    </Col>
                    <Col>
                        <p>{this.props.Rating}</p>
                    </Col>
                    <Col>
                        <Button color="danger">Nei!</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Rating;
