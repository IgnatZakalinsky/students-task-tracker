import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../neko-1-main/main-2-bll/store";
import {IStudentActions, studentError, studentLoading, studentSuccess} from "./studentActions";
import {StudentAPI} from "../student-4-dal/StudentAPI";
import {getCookie, setCookie} from "../../feature-4-helpers/cookies";

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
                console.log('studentToken:', response.data.studentToken);
                setCookie('studentToken', response.data.studentToken, 60 * 60 * 24 * 7); // 7 days
                dispatch(studentSuccess(
                    response.data.studentToken,
                    response.data.name,
                    response.data.taskCount,
                    response.data.currentTaskNumber,
                ));

                console.log('Student goToSession Success!', response)
            }
        } catch (e) {
            dispatch(studentError(e.message));

            console.log('Student goToSession Error!', e)
        }
    };
export const updateStudent = (): ThunkAction<Return, IAppStore, ExtraArgument, IStudentActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IStudentActions>, getStore: IGetStore) => {
        // const {name, sessionToken, studentToken, currentTaskNumber} = getStore().student;
        const {name, currentTaskNumber} = getStore().student;
        const sessionToken = getCookie('sessionToken');
        const studentToken = getCookie('studentToken');

        dispatch(studentLoading(true));

        try {
            if (!sessionToken) {
                alert('sessionToken: ' + sessionToken)
                throw {message: 'no sessionToken'};
            }
            if (!studentToken) {
                alert('studentToken: ' + studentToken)
                throw {message: 'no studentToken'};
            }

            const response = await StudentAPI.updateStudent(studentToken, sessionToken, name, currentTaskNumber);
            if (response.data.error) {
                if (response.data.taskCount) dispatch(studentSuccess(studentToken, name, response.data.taskCount, currentTaskNumber));

                dispatch(studentError(response.data.error));
            } else {
                dispatch(studentSuccess(studentToken, response.data.name, response.data.taskCount, response.data.currentTaskNumber));

                console.log('Student updateStudent Success!', response)
            }
        } catch (e) {
            dispatch(studentError(e.message));

            console.log('Student updateStudent Error!', e)
        }
    };
