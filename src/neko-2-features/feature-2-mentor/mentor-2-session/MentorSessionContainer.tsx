import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../neko-1-main/main-2-bll/store";
import MentorSession from "./MentorSession";
import {setTasksCountAC} from "../mentor-4-redux/mentorReducer";
import {STUDENT_LOGIN_PATH} from "../../../neko-1-main/main-1-ui/Routes";

const MentorSessionContainer: React.FC = () => {
    const mentorState = useSelector((store: IAppStore) => store.session);
    const dispatch = useDispatch();

    const link = 'http://localhost:3000/'+ STUDENT_LOGIN_PATH + '/' + mentorState.sessionToken;
    const setCount = (count: number) => {
        dispatch(setTasksCountAC(count))
    };
    return (
        <div>
            <MentorSession tasksCount = {mentorState.tasksCount} setCount={setCount} link={link}/>
        </div>
    );
};

export default MentorSessionContainer;
