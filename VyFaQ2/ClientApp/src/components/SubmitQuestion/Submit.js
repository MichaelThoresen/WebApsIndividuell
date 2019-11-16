import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'reactstrap';
import Questionbox from './Questionbox';
import Email from './Email';
import Name from './Name';
import axios from 'axios';

class Submit extends Component {

    state = {
        QuestionText: '',
        Email: '',
        Name: ''
    }

    submitHandler = (event) => {
        event.preventDefault();
        axios.post('/api/Submit', this.state)
            .then((response) => {
                if (response.data === true) {
                    window.location.href = "/UserQuestions"
                }
            });
    }

    inputChangeHandler = (event) => {
        console.log(this.state);
        console.log("I got here");
        this.setState({ [`${event.target.id}`]: event.target.value })
    }

    render() {
        return (
            <Form onSubmit={this.submitHandler}>
                <Row>
                    <Col>
                        <Questionbox change={this.inputChangeHandler} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Email change={this.inputChangeHandler}  />
                    </Col>
                    <Col>
                        <Name change={this.inputChangeHandler} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button color="info" type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}
export default Submit;