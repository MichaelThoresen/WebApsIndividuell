import React, { Component } from 'react';
import { Col, Row, Button } from 'reactstrap';
import axios from 'axios';

class Rating extends Component {

    handleDownvote = (Id, Rating) => {

        var newRate = Rating - 1;

        axios.put('/api/FaQ/' + Id + '?rating=' + newRate) 
    }

    handleUpvote = (Id, Rating) => {

        var newRate = Rating + 1;

        axios.put('/api/FaQ/' + Id + '?rating=' + newRate)
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
                        <Button color="success" onClick={() => this.handleUpvote(this.props.Id, this.props.Rating)}>Ja!</Button>
                    </Col>
                    <Col>
                        <p>{this.props.Rating}</p>
                    </Col>
                    <Col>
                        <Button color="danger" onClick={() => this.handleDownvote(this.props.Id, this.props.Rating)}>Nei!</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Rating;
