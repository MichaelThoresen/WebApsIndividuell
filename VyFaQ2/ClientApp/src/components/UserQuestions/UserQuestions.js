import React, { Component } from 'react';
import UserQuestion from './UserQuestion';
import axios from 'axios';
import { Row, Col } from 'reactstrap';


class UserQuestions extends Component {

    constructor() {
        super();

        this.state = {
            questions: [],
        };
    };
    componentDidMount() {
        //Fetch data here
        this.showQuestion();
    }

    async showQuestion() {
        axios.get('/api/Submit')
            .then((response) => {
                this.setState({ questions: response.data });
            })
    }

    render() {

        return (
            <div>
                {this.state.questions.map(item => (
                    <div key={item.email}>
                        <Row>
                            <Col>
                                <UserQuestion QuestionText={item.questionText} Email={item.email} Name={item.name} />
                            </Col>
                        </Row>
                    </div>
                    ))}
            </div>
            )
    }
}
export default UserQuestions
