import axios from 'axios'
import {baseURL} from "../../../baseURL";

const instance = axios.create({
    baseURL,
});

export const MentorAPI = {
    startSession(taskCount: number) {
        return instance.post('/session', {taskCount})
    }
};
