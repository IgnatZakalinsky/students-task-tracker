import axios from 'axios'
import {baseURL} from "../../../baseURL";

const instance = axios.create({
    baseURL,
});

export const StudentAPI = {
    goToSession (name: string, sessionToken: string) {
        return instance.post('/student', {name, sessionToken})
    }

};
