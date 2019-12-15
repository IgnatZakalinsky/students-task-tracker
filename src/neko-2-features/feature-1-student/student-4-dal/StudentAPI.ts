import axios from 'axios'
import {baseURL} from "../../../baseURL";

const instance = axios.create({
    baseURL,
});

export const StudentAPI = {
    goToSession (name: string, sessionToken: string) {
        return instance.post('/student', {name, sessionToken})
    },
    updateStudent(studentToken: string, sessionToken: string, name: string, currentTaskNumber: number) {
        return instance.put('/student', {name, sessionToken, studentToken, currentTaskNumber})
    },

};
