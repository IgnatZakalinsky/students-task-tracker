export const STUDENT_LOADING = 'STUDENT/LOADING';
export const STUDENT_SUCCESS = 'STUDENT/SUCCESS';
export const STUDENT_ERROR = 'STUDENT/ERROR';
export const STUDENT_SET_NAME = 'STUDENT/SET_NAME';

interface IStudentLoading {
    type: typeof STUDENT_LOADING;
    loading: boolean;
}
interface IStudentSuccess {
    type: typeof STUDENT_SUCCESS;
    success: boolean;
}
interface IStudentError {
    type: typeof STUDENT_ERROR;
    error: string;
}
interface IStudentSetName {
    type: typeof STUDENT_SET_NAME;
    name: string;
}

export type IStudentActions = IStudentLoading | IStudentSuccess | IStudentError | IStudentSetName;

export const studentLoading = (loading: boolean): IStudentLoading => ({
    type: STUDENT_LOADING,
    loading,
});
export const studentSuccess = (success: boolean): IStudentSuccess => ({
    type: STUDENT_SUCCESS,
    success,
});
export const studentError = (error: string): IStudentError => ({
    type: STUDENT_ERROR,
    error,
});
export const studentSetName = (name: string): IStudentSetName => ({
    type: STUDENT_SET_NAME,
    name,
});
