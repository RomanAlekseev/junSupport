import React, {Component} from 'react';

class KnowledgeTesting extends Component {

   state = {
       question: ["Сколько типов данных в JS", "Что такое контекст вызова?"],
       answerWasChosen: false,
       answer: [],
       answers: [],
       questionInWork: 0,
   }
    
    choseAnswer = ({target}) => {
        const value = target.value;
          this.setState({answerWasChosen: true, answer: [value]
        })
    }

    answerForQuestion = () => {
        this.setState(state => {
            return {answers: [...state.answers, state.answer], questionInWork: state.questionInWork + 1, answerWasChosen: false}
        })
    }

    render () {
        return (
            <div className="container testing">
                <p>{this.state.question[this.state.questionInWork]}</p>
                  <form onChange={this.choseAnswer} className="col-md-8 mx-auto text-center pb-4">
                    <hr/>
                    <label><input type="radio" name="question" value="1"/>5 (string,  number, boolean, null, undefined)</label><br/> 
                    <label><input type="radio" name="question" value="2"/>6 (string,  number, boolean, null, undefined)</label><br/>
                    <label><input type="radio" name="question" value="3"/>7 (string,  number, boolean, null, undefined)</label><br/> 
                    <label><input type="radio" name="question" value="4"/>8 (string,  number, boolean, null, undefined)</label><br/>
                  </form>
                <button className="col-md-3 mx-auto" onClick={this.answerForQuestion} hidden={this.state.answerWasChosen ? false : true}>Ответить</button>
            </div>
        )
    }
}

export default KnowledgeTesting;