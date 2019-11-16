import React, { Component } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

class Name extends Component {
    render() {
        return (
            <FormGroup>
                <Label>Name:</Label>
                <Input id="Name" onChange={(event) => this.props.changename(event)} />
            </FormGroup>
            )
    }
}
export default Name;
