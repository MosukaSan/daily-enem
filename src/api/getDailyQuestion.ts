import axios from "axios";
import type { QuestionObject } from "../types/questionType";

export async function getDailyQuestions(): Promise<QuestionObject>  {
    try {
        const response = await axios.get(`/questions/getDailyQuestion`);
        const data: QuestionObject = await response.data;
        return data;
    } catch (err) {
        console.log('[Error] ', err)
        return null
    }
}