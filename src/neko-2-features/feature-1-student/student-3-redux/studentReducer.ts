const STUDENT_LOGIN = 'studentReducer/STUDENT_LOGIN';

interface studentLoginAction{
    type: typeof STUDENT_LOGIN,
    name: string
}

type typeOfAction = studentLoginAction

interface IState {
    students: IStudent[]
}

interface IStudent{
    name: string,
    studentToken: string
}

const initState: IState = {
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
        default: {
            return state;
        }
    }
};

export const studentLoginAC = (name: string) => ({type: STUDENT_LOGIN, name});

