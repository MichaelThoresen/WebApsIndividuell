import React, { Component } from 'react';
import { Label, Input, FormGroup} from 'reactstrap';

class Questionbox extends Component {

    render() {
        return (
                <FormGroup>
                    <Label>Input Question Here!</Label>
                    <Input type="textarea" />
                </FormGroup>
            )
    }
}
export default Questionbox;