import axios from 'axios'

const instance = axios.create(
    {
        baseURL: 'https://pacific-lake-87230.herokuapp.com/',
    }
);

export const mentorAPI = {
    mentorStart(tasksCount: number) {
        return instance.post('session', {taskCount: tasksCount})
    }
};