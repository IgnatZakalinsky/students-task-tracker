const START_SESSION = 'mentorReducer/START_SESSION';
const SET_TOTAL_COUNT = 'mentorReducer/SET_TOTAL_COUNT';

export interface IState{
    tasksCount: number
}

let initState: IState = {
    tasksCount: 15
};

interface startSessionAction{
    type: typeof START_SESSION,
}
interface setTotalCountAction{
    type: typeof SET_TOTAL_COUNT,
    count: number
}
type actionTypes = startSessionAction | setTotalCountAction
export const mentorReducer = (state = initState, action: actionTypes) => {
    switch (action.type) {
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                tasksCount: action.count
            }
        }
        default: {
            return state;
        }
    }
};

const startSessionAC = () => ({type: START_SESSION});
export const setTasksCountAC = (count: number) => ({type: SET_TOTAL_COUNT, count});
