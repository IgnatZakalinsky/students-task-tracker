import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../neko-1-main/main-2-bll/store";
import {IMentorActions, mentorError, mentorLoading, mentorSuccess, mentorGetStudentsSuccess} from "./mentorActions";
import {MentorAPI} from "../mentor-5-dal/MentorAPI";
import {getCookie, setCookie} from "../../feature-4-helpers/cookies";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const startSession = (): ThunkAction<Return, IAppStore, ExtraArgument, IMentorActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IMentorActions>, getStore: IGetStore) => {
        const taskCount = getStore().session.taskCount;

        dispatch(mentorLoading(true));

        try {
            const response = await MentorAPI.startSession(taskCount);
            if (response.data.error) {

                dispatch(mentorError(response.data.error));
            } else {
                setCookie('sessionToken', response.data.sessionToken);
                setCookie('authorToken', response.data.authorToken);
                dispatch(mentorSuccess(response.data.sessionToken, response.data.authorToken));

                console.log('Mentor Start Success!', response)
            }
        } catch (e) {
            dispatch(mentorError(e.message));

            console.log('Mentor Start Error!', e)
        }
    };
export const getStudents = (): ThunkAction<Return, IAppStore, ExtraArgument, IMentorActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IMentorActions>, getStore: IGetStore) => {
        // const authorToken = getStore().session.authorToken;
        const authorToken = getCookie('authorToken');

        dispatch(mentorLoading(true));

        try {
            if (!authorToken) {
                // alert('authorToken: ' + authorToken);
                throw {message: 'no authorToken'};
            }

            const response = await MentorAPI.getStudents(authorToken);
            if (response.data.error) {
                if (response.data.error === 'bad authorToken' || response.data.error === 'session is finished') {
                    alert(response.data.error);
                    setCookie('authorToken', '', -1000);
                    setCookie('sessionToken', '', -1000);
                }

                dispatch(mentorError(response.data.error));
            } else {
                setCookie('sessionToken', response.data.sessionToken);
                dispatch(mentorGetStudentsSuccess(response.data.sessionToken, response.data.taskCount, response.data.students));

                console.log('Mentor Get students Success!', response)
            }
        } catch (e) {
            dispatch(mentorError(e.message));

            console.log('Mentor Get students Error!', e)
        }
    };
export const updateSession = (taskCount: number, finishSession: boolean): ThunkAction<Return, IAppStore, ExtraArgument, IMentorActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IMentorActions>, getStore: IGetStore) => {
        // const authorToken = getStore().session.authorToken;
        const authorToken = getCookie('authorToken');

        dispatch(mentorLoading(true));

        try {
            if (!authorToken) {
                // alert('authorToken: ' + authorToken);
                throw {message: 'no authorToken'};
            }

            const response = await MentorAPI.updateSession(authorToken, taskCount, finishSession);
            if (response.data.error) {
                if (response.data.error === 'bad authorToken' || response.data.error === 'session is finished') {
                    alert(response.data.error);
                    setCookie('authorToken', '', -1000);
                    setCookie('sessionToken', '', -1000);
                }

                dispatch(mentorError(response.data.error));
            } else {
                setCookie('sessionToken', response.data.sessionToken);
                dispatch(mentorGetStudentsSuccess(response.data.sessionToken, response.data.taskCount, response.data.students));

                console.log('Mentor Update session Success!', response)
            }
        } catch (e) {
            dispatch(mentorError(e.message));

            console.log('Mentor Update session Error!', e)
        }
    };
export const deleteStudent = (studentToken: string): ThunkAction<Return, IAppStore, ExtraArgument, IMentorActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IMentorActions>, getStore: IGetStore) => {
        // const authorToken = getStore().session.authorToken;
        const authorToken = getCookie('authorToken');

        dispatch(mentorLoading(true));

        try {
            if (!authorToken) {
                // alert('authorToken: ' + authorToken);
                throw {message: 'no authorToken'};
            }

            const response = await MentorAPI.deleteStudent(authorToken, studentToken);
            if (response.data.error) {
                if (response.data.error === 'bad authorToken' || response.data.error === 'session is finished') {
                    alert(response.data.error);
                    setCookie('authorToken', '', -1000);
                    setCookie('sessionToken', '', -1000);
                }

                dispatch(mentorError(response.data.error));
            } else {
                setCookie('sessionToken', response.data.sessionToken);
                dispatch(mentorGetStudentsSuccess(response.data.sessionToken, response.data.taskCount, response.data.students));

                console.log('Mentor Update session Success!', response)
            }
        } catch (e) {
            dispatch(mentorError(e.message));

            console.log('Mentor Update session Error!', e)
        }
    };
