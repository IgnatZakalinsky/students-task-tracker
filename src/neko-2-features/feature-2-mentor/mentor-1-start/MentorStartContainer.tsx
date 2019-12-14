import React from 'react';
import MentorStart from "./MentorStart";
import {connect, useDispatch, useSelector} from "react-redux";
import {IState, setTasksCountAC} from "../mentor-4-redux/mentorReducer";
import {IAppStore} from "../../../neko-1-main/main-2-bll/store";

const MentorStartContainer: React.FC = () => {
    const mentorState = useSelector((store: IAppStore) => store.session);
    const dispatch = useDispatch();
    const startSession = () => {
    };
    const setCount = (count: number) => {
        dispatch(setTasksCountAC(count))
    };
    return (
        <MentorStart tasksCount={mentorState.tasksCount} setCount={setCount}
                     startSession={startSession}/>
    );
};

export default MentorStartContainer
