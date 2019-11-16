import React, { Component } from 'react';
import { Label, Input, FormGroup} from 'reactstrap';

class Questionbox extends Component {

    constructor() {
        super()
        this.handler = this.handler.bind(this);
    }

    handler(e) {
        this.props.changequestion(e)
    }

    render() {
        return (
            <FormGroup>
                <Label>Input Question Here!</Label>
                <Input type="textarea" id="QuestionText" onChange={this.handler} />
            </FormGroup>

            )
    }
}
export default Questionbox;