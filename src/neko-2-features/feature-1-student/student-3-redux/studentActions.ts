export const STUDENT_LOADING = 'STUDENT/LOADING';
export const STUDENT_SUCCESS = 'STUDENT/SUCCESS';
export const STUDENT_ERROR = 'STUDENT/ERROR';
export const STUDENT_SET_NAME = 'STUDENT/SET_NAME';
export const STUDENT_SET_SESSION_TOKEN = 'STUDENT/SET_SESSION_TOKEN';

interface IStudentLoading {
    type: typeof STUDENT_LOADING;
    loading: boolean;
}
interface IStudentSuccess {
    type: typeof STUDENT_SUCCESS;
    studentToken: string;
    taskCount: number;
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

export type IStudentActions = IStudentLoading | IStudentSuccess | IStudentError | IStudentSetName | IStudentSetSessionToken;

export const studentLoading = (loading: boolean): IStudentLoading => ({
    type: STUDENT_LOADING,
    loading,
});
export const studentSuccess = (studentToken: string, taskCount: number): IStudentSuccess => ({
    type: STUDENT_SUCCESS,
    studentToken,
    taskCount,
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
