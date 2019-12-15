import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../neko-1-main/main-2-bll/store";
import MentorSession from "./MentorSession";
import {MENTOR_START_PATH, STUDENT_LOGIN_PATH} from "../../../neko-1-main/main-1-ui/Routes";
import {frontURL} from "../../../frontURL";
import {Redirect} from "react-router";
import {getCookie} from "../../feature-4-helpers/cookies";

const MentorSessionContainer: React.FC = () => {
    const mentorState = useSelector((store: IAppStore) => store.session);
    const dispatch = useDispatch();

    const setCount = (count: number) => {
        alert('no endpoint!')
    };

    const authorToken = getCookie('authorToken');
    if (!authorToken) {
        return <Redirect to={MENTOR_START_PATH}/>
    }
    const sessionToken = getCookie('sessionToken');
    const link = frontURL + STUDENT_LOGIN_PATH + '/' + sessionToken;

    return (
        <MentorSession taskCount={mentorState.taskCount} link={link}/>
    );
};

export default MentorSessionContainer;
