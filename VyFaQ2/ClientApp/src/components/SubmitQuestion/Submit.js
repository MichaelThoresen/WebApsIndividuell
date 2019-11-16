import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'reactstrap';
import Questionbox from './Questionbox';
import Email from './Email';
import Name from './Name';

class Submit extends Component {

    render() {
        return (
            <Form onSubmit={this.props.submit}>
                <Row>
                    <Col>
                        <Questionbox change={this.props.changequestion} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Email change={this.props.changeemail}  />
                    </Col>
                    <Col>
                        <Name change={this.props.changename} />
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