const START_SESSION = 'mentorReducer/START_SESSION';

interface startSessionAction{
    type: typeof START_SESSION,
}
interface IAction{

}
export const mentorReducer = (state = {}, action: any) => {
    switch (action.type) {

        default: {
            return state;
        }
    }
};

const startSessionAC = () => ({type: START_SESSION});
