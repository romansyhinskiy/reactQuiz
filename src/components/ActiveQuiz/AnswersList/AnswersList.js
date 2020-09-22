import React from 'react'
import classes from './AnswersList.module.css'
import AnswerItem from './answerItem/AnswerItem'

const AnswerList = props => (
    <ul className={classes.AnswersList}>
        {props.answers.map((answer, index)=>{
            return (
                <AnswerItem
                    answer = {answer}
                    key = {index}
                />
            )
        })}
    </ul>
);
export default AnswerList