export interface IMentorState {
    taskCount: number;
    sessionToken: string;
    authorToken: string;
    loading: boolean;
    error: string;
}

export const mentorInitialState: IMentorState = {
    taskCount: 7,
    sessionToken: '',
    authorToken: '',
    loading: false,
    error: '',
};
