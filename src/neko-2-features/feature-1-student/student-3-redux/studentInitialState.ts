export interface IStudentState {
    name: string;
    loading: boolean;
    success: boolean;
    error: string;
}

export const studentInitialState: IStudentState = {
    name: '',
    loading: false,
    success: false,
    error: '',
};
