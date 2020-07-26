import React, { Component } from 'react';
import quizQuestions from "./quizQuestions";
import QuestionBox from "./components/QuestionBox";

class nz_questionaire extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0
  };

  getQuestions = () => {
    quizQuestions().then(question => {
      this.setState({
        questionBank: question
      });
    });
  };

  componentDidMount() {
    this.getQuestions();
  }
  
  render(){
    return(
      <div className="container">   
        {this.state.questionBank.map(
            ({question, answers, questionId}) => (
              <QuestionBox
                question={question}
                options={answers}
                key={questionId}
                />
            )  
          )}
      </div>
    )
  }
}

export default nz_questionaire;
