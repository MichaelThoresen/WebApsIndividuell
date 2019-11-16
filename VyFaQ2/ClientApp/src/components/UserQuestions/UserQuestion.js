import React, { Component } from 'react';
import { Col, Row, Card, CardHeader, CardBody } from 'reactstrap';
import EmailDisplay from './EmailDisplay';
import NameDisplay from './NameDisplay';

class UserQuestion extends Component {

    state = {
        isOpen: false
    }

    handleClick = () => {
        console.log(this.state)
        this.setState({ isOpen: !this.state.isOpen })

    }

    render() {

        return (
            <Card>
                <CardHeader onClick={this.handleClick}>
                    <p>{props.QuestionText}</p>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col>
                            <p>Submitted by:</p>
                        </Col>
                        <Col>
                            <EmailDisplay Email={props.Email} />
                        </Col>
                        <Col>
                            <NameDisplay Name={props.Name} />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            )
    }
}
export default UserQuestion
