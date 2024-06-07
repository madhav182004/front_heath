import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Question from './Question';
import './question.css';


// const questions = ['How old are you?', 'What is your sex?', 'Are you allergic to any medication?']; // Add your questions
const questions = [
    { question: 'What is your sex?', questionType: 'options1', options: ['Male', 'Female', 'Other'] },
    { question: 'Do you meet the age requirement?', questionType: 'options2', options: ['I am older than 6 years old.', 'I am filling this out for a child younger than 6 years old.'] },
    { question: 'Your Date of Birth?', questionType: 'date' },
    { question: 'Do you have any allergies? If so, please write them down?', questionType: 'text' },
    { question: 'Your current medications?', questionType: 'text' },
    { question: 'Your past medications?', questionType: 'text' },
    { question: 'Your recent test details(Please upload a scanned pdf/image)?', questionType: 'file' }
];

const Form = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [submitLoading, setSubmitLoading] = useState(false);
    const { userId } = useParams();

    const style = {
        height: 50,
        width: 50,
    };

    const handleNextQuestion = (answer) => {
        setAnswers([...answers, answer]);
        setCurrentPage(currentPage + 1);
    };

    const handleSubmit = async () => {
        setSubmitLoading(true);

        const question = {
            gender: answers[0],
            age: answers[1] === questions[1].options[0] ? true : false,
            dob: answers[2],
            allergies: answers[3],
            currentmed: answers[4],
            pastmed: answers[5],
            report: answers[6],
        };
    }
    
    return (
        <div className="Form">
            {currentPage < questions.length ? (
                <Question
                    question={questions[currentPage].question}
                    questionType={questions[currentPage].questionType}
                    options={questions[currentPage].options}
                    onNextQuestion={handleNextQuestion}
                    answers={answers}
                    currentPage={currentPage}
                />

            ) : (
                <>
                
                <p>page</p>
                </>
            )}
        </div>
    );
}

export default Form;