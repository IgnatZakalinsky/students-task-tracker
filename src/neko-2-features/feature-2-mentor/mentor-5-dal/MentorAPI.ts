import axios from 'axios'
import {baseURL} from "../../../baseURL";

const instance = axios.create({
    baseURL,
});

export const MentorAPI = {
    startSession(taskCount: number) {
        return instance.post('/session', {taskCount})
    },
    getStudents(authorToken: string) {
        return instance.get('/session?authorToken=' + authorToken)
    },
    updateSession(authorToken: string, taskCount: number, finishSession: boolean) {
        return instance.put('/session',{authorToken, taskCount, finishSession})
    },
    deleteStudent(authorToken: string, studentToken: string) {
        return instance.delete('/student?authorToken=' + authorToken + '&studentToken=' + studentToken)
    },

};
