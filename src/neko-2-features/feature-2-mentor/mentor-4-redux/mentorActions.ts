import {IStudent} from "./mentorInitialState";

export const MENTOR_LOADING = 'MENTOR/LOADING';
export const MENTOR_SUCCESS = 'MENTOR/SUCCESS';
export const MENTOR_GET_STUDENTS_SUCCESS = 'MENTOR/GET_STUDENTS_SUCCESS';
export const MENTOR_ERROR = 'MENTOR/ERROR';
export const MENTOR_SET_TASK_COUNT = 'MENTOR/SET_TOTAL_COUNT';

interface IMentorLoading {
    type: typeof MENTOR_LOADING;
    loading: boolean;
}

interface IMentorSuccess {
    type: typeof MENTOR_SUCCESS;
    sessionToken: string;
    authorToken: string;
}

interface IMentorGetStudentsSuccess {
    type: typeof MENTOR_GET_STUDENTS_SUCCESS;
    sessionToken: string;
    taskCount: number;
    students: IStudent[];
}

interface IMentorError {
    type: typeof MENTOR_ERROR;
    error: string;
}

interface IMentorSetTaskCount {
    type: typeof MENTOR_SET_TASK_COUNT;
    taskCount: number;
}

export type IMentorActions =
    IMentorLoading |
    IMentorSuccess |
    IMentorError |
    IMentorSetTaskCount |
    IMentorGetStudentsSuccess;

export const mentorLoading = (loading: boolean): IMentorLoading => ({
    type: MENTOR_LOADING,
    loading,
});
export const mentorSuccess = (sessionToken: string, authorToken: string): IMentorSuccess => ({
    type: MENTOR_SUCCESS,
    sessionToken,
    authorToken,
});
export const mentorGetStudentsSuccess =
    (sessionToken: string, taskCount: number, students: IStudent[]): IMentorGetStudentsSuccess => ({
        type: MENTOR_GET_STUDENTS_SUCCESS,
        sessionToken,
        taskCount,
        students,
    });
export const mentorError = (error: string): IMentorError => ({
    type: MENTOR_ERROR,
    error,
});
export const mentorSetTaskCount = (taskCount: number): IMentorSetTaskCount => ({
    type: MENTOR_SET_TASK_COUNT,
    taskCount,
});
