import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../neko-1-main/main-2-bll/store";
import {IStudentActions, studentError, studentLoading, studentSuccess} from "./studentActions";
import {StudentAPI} from "../student-4-dal/StudentAPI";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const goToSession = (): ThunkAction<Return, IAppStore, ExtraArgument, IStudentActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IStudentActions>, getStore: IGetStore) => {
        const {name, sessionToken} = getStore().student;

        dispatch(studentLoading(true));

        try {
            const response = await StudentAPI.goToSession(name, sessionToken);
            if (response.data.error) {
                dispatch(studentError(response.data.error));
            } else {
                dispatch(studentSuccess(response.data.studentToken, response.data.taskCount));

                console.log('Student goToSession Success!', response)
            }
        } catch (e) {
            dispatch(studentError(e.message));

            console.log('Student goToSession Error!', e)
        }
    };
