import React from 'react';
import MentorStart from "./MentorStart";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../neko-1-main/main-2-bll/store";
import {mentorSetTaskCount} from "../mentor-4-redux/mentorActions";
import {startSession} from "../mentor-4-redux/mentorThunks";

const MentorStartContainer: React.FC = () => {
    const mentorState = useSelector((store: IAppStore) => store.session);
    const dispatch = useDispatch();

    const startSessionCallback = () => {
        dispatch(startSession());
    };
    const mentorSetTaskCountCallback = (taskCount: number) => {
        dispatch(mentorSetTaskCount(taskCount))
    };
    return (
        <MentorStart
            taskCount={mentorState.taskCount}
            mentorSetTaskCountCallback={mentorSetTaskCountCallback}
            startSessionCallback={startSessionCallback}
            sessionToken={mentorState.sessionToken}
            error={mentorState.error}
        />
    );
};

export default MentorStartContainer
