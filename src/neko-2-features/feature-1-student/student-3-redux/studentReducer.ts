import {studentInitialState} from "./studentInitialState";
import {IStudentActions, STUDENT_SET_NAME, STUDENT_LOADING, STUDENT_SUCCESS, STUDENT_ERROR} from "./studentActions";

export const studentReducer = (state = studentInitialState, action: IStudentActions) => {
    switch (action.type) {
        case STUDENT_LOADING: {
            return {
                ...state,
                loading: action.loading,
                error: '',
                success: false,
            }
        }
        case STUDENT_SUCCESS: {
            return {
                ...state,
                loading: false,
                success: action.success,
                error: '',
            }
        }
        case STUDENT_ERROR: {
            return {
                ...state,
                loading: false,
                success: false,
                error: action.error,
            }
        }
        case STUDENT_SET_NAME: {
            return {
                ...state,
                name: action.name,
                loading: false,
                success: false,
                error: '',
            }
        }
        default: {
            return state;
        }
    }
};
