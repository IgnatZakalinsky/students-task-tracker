import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../neko-1-main/main-2-bll/store";
import {IMentorActions, mentorError, mentorLoading, mentorSuccess} from "./mentorActions";
import {MentorAPI} from "../mentor-5-dal/MentorAPI";

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
                dispatch(mentorSuccess(response.data.sessionToken, response.data.autorToken));

                console.log('Mentor Start Success!', response)
            }
        } catch (e) {
            dispatch(mentorError(e.message));

            console.log('Mentor Start Error!', e)
        }
    };
