import React, { Component } from 'react';
import Submit from './Submit';
import axios from 'axios';

class SubmitQuestion extends Component {

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
                //window.location.href = "/UserQuestions"
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
            <Submit change={this.inputChangeHandler} submit={this.submitHandler} />
            )
    }
}
export default SubmitQuestion
