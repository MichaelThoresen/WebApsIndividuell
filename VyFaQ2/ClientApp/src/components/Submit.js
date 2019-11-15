import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'reactstrap';
import Questionbox from './Questionbox';
import Email from './Email';
import Name from './Name';

class Submit extends Component {

    render() {
        return (
            <Form onSubmit={props.submit}>
                <Row>
                    <Questionbox />
                </Row>
                <Row>
                    <Col>
                        <Email />
                    </Col>
                    <Col>
                        <Name />
                    </Col>
                </Row>
                <Row>
                    <Button color="info" type="submit">Submit</Button>
                </Row>
            </Form>
        )
    }
}
export default Submit;