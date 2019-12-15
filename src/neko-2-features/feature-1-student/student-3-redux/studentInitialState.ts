export interface IStudentState {
    name: string;
    sessionToken: string;
    studentToken: string;
    taskCount: number;
    currentTaskNumber: number;
    loading: boolean;
    error: string;
}

export const studentInitialState: IStudentState = {
    name: '',
    sessionToken: '',
    studentToken: '',
    taskCount: 0,
    currentTaskNumber: 0,
    loading: false,
    error: '',
};
