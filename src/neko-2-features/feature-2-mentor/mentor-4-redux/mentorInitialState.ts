export interface IStudent {
    studentToken: string;
    name: string;
    currentTaskNumber: number;
}

export interface IMentorState {
    taskCount: number;
    sessionToken: string;
    authorToken: string;
    loading: boolean;
    error: string;
    students: IStudent[];
}

export const mentorInitialState: IMentorState = {
    taskCount: 7,
    sessionToken: '',
    authorToken: '',
    loading: false,
    error: '',
    students: [],
};
