import React from 'react';
import MentorStart from "./MentorStart";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../neko-1-main/main-2-bll/store";
import {mentorSetTaskCount} from "../mentor-4-redux/mentorActions";
import {startSession} from "../mentor-4-redux/mentorThunks";
import {Redirect} from "react-router";
import {MENTOR_SESSION_PATH} from "../../../neko-1-main/main-1-ui/Routes";

const MentorStartContainer: React.FC = () => {
    const mentorState = useSelector((store: IAppStore) => store.session);
    const dispatch = useDispatch();

    const startSessionCallback = () => {
        dispatch(startSession());
    };
    const mentorSetTaskCountCallback = (taskCount: number) => {
        dispatch(mentorSetTaskCount(taskCount))
    };

    if (!!mentorState.authorToken) {
        return <Redirect to={MENTOR_SESSION_PATH}/>
    }

    return (
        <MentorStart
            taskCount={mentorState.taskCount}
            mentorSetTaskCountCallback={mentorSetTaskCountCallback}
            startSessionCallback={startSessionCallback}
            error={mentorState.error}
            loading={mentorState.loading}
        />
    );
};

export default MentorStartContainer
