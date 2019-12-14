import {mentorAPI} from "../../../API/api";

const START_SESSION = 'mentorReducer/START_SESSION';
const SET_TOTAL_COUNT = 'mentorReducer/SET_TOTAL_COUNT';
const SET_ERROR = 'mentorReducer/SET_ERROR';

export interface IState{
    tasksCount: number,
    sessionToken: string,
    authorToken: string,
    errorName: string
}

let initState: IState = {
    tasksCount: 15,
    sessionToken: '',
    authorToken: '',
    errorName: ''
};

interface startSessionAction{
    type: typeof START_SESSION,
    sessionToken: string,
    authorToken: string
}
interface setTotalCountAction{
    type: typeof SET_TOTAL_COUNT,
    count: number
}
interface setErrorAction{
    type: typeof SET_ERROR,
    errorName: string
}
type actionTypes = startSessionAction | setTotalCountAction | setErrorAction
export const mentorReducer = (state = initState, action: actionTypes) => {
    switch (action.type) {
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                tasksCount: action.count
            }
        }
        case START_SESSION: {
            return {
                ...state,
                sessionToken: action.sessionToken,
                authorToken: action.authorToken
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                errorName: action.errorName
            }
        }
        default: {
            return state;
        }
    }
};

const startSessionAC = (sessionToken: string, authorToken: string) => ({type: START_SESSION, sessionToken, authorToken});
const setErrorAC = (errorName: string) => ({type: SET_ERROR, errorName});
export const setTasksCountAC = (count: number) => ({type: SET_TOTAL_COUNT, count});

export const startSessionThunkCreator = (tasksCount: number) => {
    return async (dispatch: Function) => {
        const response = await mentorAPI.mentorStart(tasksCount);
        if(!response.data.error) {
            dispatch(startSessionAC(response.data.sesionToken, response.data.authorToken))
        }
        else dispatch(setErrorAC(response.data.error))
    }
};
