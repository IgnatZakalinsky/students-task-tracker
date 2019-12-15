import {mentorInitialState} from "./mentorInitialState";
import {
    IMentorActions,
    MENTOR_ERROR, MENTOR_GET_STUDENTS_SUCCESS,
    MENTOR_LOADING, MENTOR_SET_TASK_COUNT,
    MENTOR_SUCCESS
} from "./mentorActions";

export const mentorReducer = (state = mentorInitialState, action: IMentorActions) => {
    switch (action.type) {
        case MENTOR_SET_TASK_COUNT: {
            return {
                ...state,
                loading: false,
                error: '',
                taskCount: action.taskCount
            }
        }
        case MENTOR_LOADING: {
            return {
                ...state,
                loading: action.loading,
                error: '',
            }
        }
        case MENTOR_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: '',
                authorToken: action.authorToken,
                sessionToken: action.sessionToken,
            }
        }
        case MENTOR_GET_STUDENTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: '',
                sessionToken: action.sessionToken,
                taskCount: action.taskCount,
                students: action.students,
            }
        }
        case MENTOR_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
};
