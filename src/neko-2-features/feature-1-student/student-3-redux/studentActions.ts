export const STUDENT_LOADING = 'STUDENT/LOADING';
export const STUDENT_SUCCESS = 'STUDENT/SUCCESS';
export const STUDENT_ERROR = 'STUDENT/ERROR';
export const STUDENT_SET_NAME = 'STUDENT/SET_NAME';
export const STUDENT_SET_SESSION_TOKEN = 'STUDENT/SET_SESSION_TOKEN';
export const STUDENT_SET_CURRENT_TASK_NUMBER = 'STUDENT/SET_CURRENT_TASK_NUMBER';

interface IStudentLoading {
    type: typeof STUDENT_LOADING;
    loading: boolean;
}
interface IStudentSuccess {
    type: typeof STUDENT_SUCCESS;
    studentToken: string;
    taskCount: number;
    name: string;
    currentTaskNumber: number;
}
interface IStudentSetCurrentTaskNumber {
    type: typeof STUDENT_SET_CURRENT_TASK_NUMBER;
    currentTaskNumber: number;
}
interface IStudentError {
    type: typeof STUDENT_ERROR;
    error: string;
}
interface IStudentSetName {
    type: typeof STUDENT_SET_NAME;
    name: string;
}
interface IStudentSetSessionToken {
    type: typeof STUDENT_SET_SESSION_TOKEN;
    sessionToken: string;
}

export type IStudentActions =
    IStudentLoading |
    IStudentSuccess |
    IStudentError |
    IStudentSetName |
    IStudentSetSessionToken |
    IStudentSetCurrentTaskNumber;

export const studentLoading = (loading: boolean): IStudentLoading => ({
    type: STUDENT_LOADING,
    loading,
});
export const studentSuccess = (studentToken: string, name: string, taskCount: number, currentTaskNumber: number): IStudentSuccess => ({
    type: STUDENT_SUCCESS,
    studentToken,
    taskCount,
    name,
    currentTaskNumber
});
export const studentSetCurrentTaskNumber = (currentTaskNumber: number): IStudentSetCurrentTaskNumber => ({
    type: STUDENT_SET_CURRENT_TASK_NUMBER,
    currentTaskNumber,
});
export const studentError = (error: string): IStudentError => ({
    type: STUDENT_ERROR,
    error,
});
export const studentSetName = (name: string): IStudentSetName => ({
    type: STUDENT_SET_NAME,
    name,
});
export const studentSetSessionToken = (sessionToken: string): IStudentSetSessionToken => ({
    type: STUDENT_SET_SESSION_TOKEN,
    sessionToken,
});
