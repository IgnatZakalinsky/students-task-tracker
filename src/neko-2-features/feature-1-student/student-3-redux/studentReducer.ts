const STUDENT_LOGIN = 'studentReducer/STUDENT_LOGIN';
const CURRENT_NAME_CHANGE = 'studentReducer/CURRENT_NAME_CHANGE';

interface studentLoginAction {
    type: typeof STUDENT_LOGIN,
    name: string
}

interface currentNameAction {
    type: typeof CURRENT_NAME_CHANGE,
    name: string
}

type typeOfAction = studentLoginAction | currentNameAction

interface IState {
    students: IStudent[],
    currentStudentName: string
}

interface IStudent {
    name: string,
    studentToken: string
}

const initState: IState = {
    currentStudentName: '',
    students: [
        {name: 'Ivan Govnov', studentToken: '1488'}
    ]
};
export const studentReducer = (state = initState, action: typeOfAction) => {
    switch (action.type) {
        case STUDENT_LOGIN: {
            return {
                ...state,
                name: action.name
            }
        }
        case CURRENT_NAME_CHANGE: {
            return {
                ...state,
                currentStudentName: action.name
            }
        }
        default: {
            return state;
        }
    }
};

export const studentLoginAC = (name: string) => ({type: STUDENT_LOGIN, name});
export const currentNameChangeAC = (name: string) => ({type: CURRENT_NAME_CHANGE, name});
