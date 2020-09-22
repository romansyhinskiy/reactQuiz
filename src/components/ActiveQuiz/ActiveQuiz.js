import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswerList from './AnswersList/AnswersList'

const ActiveQuiz = props =>(
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>1.</strong>&nbsp;
                First question?
            </span>
            <small>4 / 12</small>
        </p>
       <AnswerList
        answers = {props.answers}
       />
    </div>
);
export default ActiveQuiz