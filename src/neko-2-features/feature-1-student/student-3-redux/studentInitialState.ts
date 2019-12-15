export interface IStudentState {
    name: string;
    sessionToken: string;
    studentToken: string;
    taskCount: number;
    loading: boolean;
    error: string;
}

export const studentInitialState: IStudentState = {
    name: '',
    sessionToken: '',
    studentToken: '',
    taskCount: 0,
    loading: false,
    error: '',
};
