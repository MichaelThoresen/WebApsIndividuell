import React, { Component } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

class Name extends Component {
    render() {
        return (
            <FormGroup>
                <Label>Name:</Label>
                <Input id="Name" onChange={this.props.change} />
            </FormGroup>
            )
    }
}
export default Name;
