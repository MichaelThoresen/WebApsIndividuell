import React, { Component } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

class Email extends Component {
    render() {
        return (
            <FormGroup >
                <Label>Email:</Label>
                <Input type="email" id="Email" onChange={this.props.changeemail} />
            </FormGroup>
            )
    }
}
export default Email
