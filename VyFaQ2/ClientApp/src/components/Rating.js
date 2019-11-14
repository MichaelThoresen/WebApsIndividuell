import React, { Component } from 'react';
import { Col, Row, Button, Alert } from 'reactstrap';
import axios from 'axios';

class Rating extends Component {

    constructor() {
        super();
        this.state = {
            clicked: false
        };
    }

    handleDownvote = (Id, Rating) => {

        var newRate = Rating - 1;
        this.setState ={
            clicked: true
        };
        console.log(this.state)

        axios.put('/api/FaQ/' + Id + '?rating=' + newRate) 
    }

    handleUpvote = (Id, Rating) => {

        var newRate = Rating + 1;
        this.setState({clicked: !this.state.clicked})
        console.log(this.state)

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
                    {this.state.clicked == false ? (
                        <>
                            <Col>
                                <Button color="success" onClick={() => this.handleUpvote(this.props.Id, this.props.Rating)}>Ja!</Button>
                            </Col>
                            <Col>
                                <p>{this.props.Rating}</p>
                            </Col>
                            <Col>
                                <Button color="danger" onClick={() => this.handleDownvote(this.props.Id, this.props.Rating)}>Nei!</Button>
                            </Col>
                        </>
                        ) : (
                            <Col><Alert color="success">Takk for tilbakemeldingen</Alert></Col>
                        )}
                </Row>
            </div>
        );
    }
}
export default Rating;
