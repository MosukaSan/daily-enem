import { useEffect, useState } from "react";
import { getDailyQuestions } from "../api/getDailyQuestion";
import type { QuestionObject } from "../types/questionType";

export function useGetDailyQuestions(): { question: QuestionObject, questionLoaded: boolean } {
    const [question, setQuestion] = useState<QuestionObject>(null);
    const [questionLoaded, toggleQuestionLoaded] = useState(false);

    useEffect(() => {
        const fetchQuestion = async () => {
            const questionObject = await getDailyQuestions();
            
            if (questionObject) {
                setQuestion(questionObject);
                toggleQuestionLoaded(true);
            } else {
                toggleQuestionLoaded(true);
            }
        };

        fetchQuestion();
    }, []); 

    return { question: question, questionLoaded: questionLoaded }
}
