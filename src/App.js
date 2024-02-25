import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: [
        {
          questionText: 'What is the capital of France?',
          answerOptions: [
            { answerText: 'New York', isCorrect: false },
            { answerText: 'London', isCorrect: false },
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Berlin', isCorrect: false }
          ]
        },
        {
          questionText: 'What is CEO of Tesla?',
          answerOptions: [
            { answerText: 'Jef Bezos', isCorrect: false },
            { answerText: 'Elon Musk', isCorrect: true },
            { answerText: 'Bill Gates', isCorrect: false },
            { answerText: 'Tony Stark', isCorrect: false }
          ]
        },
        {
          questionText: 'The iphone was created by which compony?',
          answerOptions: [
            { answerText: 'Apple', isCorrect: true },
            { answerText: 'intel', isCorrect: false },
            { answerText: 'Amazon', isCorrect: false },
            { answerText: 'Microsoft', isCorrect: false }
          ]
        },
        {
          questionText: 'How many Harry Potter books are there?',
          answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '4', isCorrect: false },
            { answerText: '6', isCorrect: false },
            { answerText: '7', isCorrect: true },
          ]
        },
      ],
      currentQuestion: 0,
      showScore: false,
      score: 0
    };

    // this.clickHandler = this.clickHandler.bind(this);

  }

  clickHandler(isCorrect) {
    // alert('Moji');
    // console.log(isCorrect);
    if (isCorrect) {
      this.setState(prevState => { return  {score: prevState.score +1}  })
    }



    if (this.state.currentQuestion === this.state.questions.length-1) {
      this.setState({ showScore: true })
    } else {
      this.setState(prevState => { return { currentQuestion: prevState.currentQuestion + 1 } })
    }
  }



  render() {
    return (
      <div className="app">
        <div className="wrapper">

          {this.state.showScore ?
            (<div className="score-section">
              You scored {this.state.score} out of {this.state.questions.length}
            </div>) :
            (<>
              <div className="question-section">
                <div className="question-count">
                  <span>Question {this.state.currentQuestion + 1}</span>/{this.state.questions.length}
                </div>

                <div className="question-text">
                  {this.state.questions[this.state.currentQuestion].questionText}
                </div>
              </div>

              <div className="answer-section">
                <div className="buttons">
                  {this.state.questions[this.state.currentQuestion].answerOptions.map(x =>
                    <button key={x.answerText} onClick={this.clickHandler.bind(this, x.isCorrect)}>{x.answerText}</button>
                  )}
                  {/* <button>Tehran</button> */}
                </div>
              </div>
            </>)
          }
         
        </div>

      </div>

    )
  }
}

export default App;

