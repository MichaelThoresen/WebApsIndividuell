import React, { Component } from 'react';
import UserQuestion from './UserQuestion';


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
                console.log(response);
                this.setState({ questions: response.data });
            })
        console.log("I got here")
    }

    render() {

        return (
            <div>
                {this.state.questions.map(item => (
                    <div key={item.Id}>
                        <Row>
                            <UserQuestion QuestionText={item.QuestionText} Email={item.Email} Name={item.Name} />
                        </Row>
                    </div>
                    ))}
            </div>
            )
    }
}
export default UserQuestions
