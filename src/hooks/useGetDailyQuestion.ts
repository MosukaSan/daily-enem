import { useEffect, useState } from "react";
import { getDailyQuestions } from "../api/getDailyQuestion";
import type { QuestionObject } from "../types/questionType";

export function useGetDailyQuestions(subject: string): { question: QuestionObject, questionLoaded: boolean } {
    const [question, setQuestion] = useState<QuestionObject>(null);
    const [questionLoaded, toggleQuestionLoaded] = useState(false);

    useEffect(() => {
        const fetchQuestion = async () => {
            const questionObject = await getDailyQuestions(subject);
            
            if (questionObject) {
                setQuestion(questionObject);
                toggleQuestionLoaded(true);
            } else {
                toggleQuestionLoaded(true);
            }
        };

        fetchQuestion();
    }, [subject]); 

    return { question: question, questionLoaded: questionLoaded }
}
