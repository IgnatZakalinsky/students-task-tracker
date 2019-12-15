import {studentInitialState} from "./studentInitialState";
import {
    IStudentActions,
    STUDENT_SET_NAME,
    STUDENT_LOADING,
    STUDENT_SUCCESS,
    STUDENT_ERROR,
    STUDENT_SET_SESSION_TOKEN, STUDENT_SET_CURRENT_TASK_NUMBER
} from "./studentActions";

export const studentReducer = (state = studentInitialState, action: IStudentActions) => {
    switch (action.type) {
        case STUDENT_LOADING: {
            return {
                ...state,
                loading: action.loading,
                error: '',
            }
        }
        case STUDENT_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: '',
                studentToken: action.studentToken,
                taskCount: action.taskCount,
            }
        }
        case STUDENT_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        }
        case STUDENT_SET_NAME: {
            return {
                ...state,
                name: action.name,
                loading: false,
                error: '',
            }
        }
        case STUDENT_SET_CURRENT_TASK_NUMBER: {
            return {
                ...state,
                currentTaskNumber: action.currentTaskNumber,
                loading: false,
                error: '',
            }
        }
        case STUDENT_SET_SESSION_TOKEN: {
            return {
                ...state,
                sessionToken: action.sessionToken,
                loading: false,
                error: '',
            }
        }

        default: {
            return state;
        }
    }
};
