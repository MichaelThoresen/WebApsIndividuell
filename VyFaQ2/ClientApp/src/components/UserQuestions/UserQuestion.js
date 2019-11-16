import React, { Component } from 'react';
import { Col, Row, Card, CardHeader, CardBody, Collapse } from 'reactstrap';
import EmailDisplay from './EmailDisplay';
import NameDisplay from './NameDisplay';

class UserQuestion extends Component {

    state = {
        isOpen: false
    }

    handleClick = () => {
        this.setState({ isOpen: !this.state.isOpen })

    }

    render() {

        return (
            <Card>
                <CardHeader onClick={this.handleClick}>
                    <p>{this.props.QuestionText}</p>
                </CardHeader>
                <Collapse isOpen={this.state.isOpen}>
                    <CardBody>
                        <Row>
                            <Col>
                                <p>Submitted by:</p>
                            </Col>
                            <Col>
                                <EmailDisplay Email={this.props.Email} />
                            </Col>
                            <Col>
                                <NameDisplay Name={this.props.Name} />
                            </Col>
                        </Row>
                    </CardBody>
                </Collapse>
            </Card>
            )
    }
}
export default UserQuestion
