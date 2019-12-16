import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../neko-1-main/main-2-bll/store";
import MentorSession from "./MentorSession";
import {
    MENTOR_GET_AUTHOR_TOKEN_PATH,
    MENTOR_START_PATH,
    STUDENT_LOGIN_PATH
} from "../../../neko-1-main/main-1-ui/Routes";
import {frontURL} from "../../../frontURL";
import {Redirect} from "react-router";
import {getCookie, setCookie} from "../../feature-4-helpers/cookies";
import {updateSession} from "../mentor-4-redux/mentorThunks";

const MentorSessionContainer: React.FC = () => {
    const mentorState = useSelector((store: IAppStore) => store.session);
    const dispatch = useDispatch();
    const [rerender, setRerender] = useState(false);

    const updateSessionCallback = (taskCount: number) => {
        dispatch(updateSession(taskCount, false));
    };
    const finishSession = () => {
        dispatch(updateSession(mentorState.taskCount, true));
        setCookie('authorToken', '', -1000);
        setCookie('sessionToken', '', -1000);
        setRerender(!rerender);
    };

    const authorToken = getCookie('authorToken');
    if (!authorToken) {
        return <Redirect to={MENTOR_START_PATH}/>
    }
    const sessionToken = getCookie('sessionToken');
    const link = frontURL + STUDENT_LOGIN_PATH + '/' + sessionToken;
    const mentorLink = frontURL + MENTOR_GET_AUTHOR_TOKEN_PATH + '/' + sessionToken + '/' + authorToken;

    return (
        <MentorSession
            taskCount={mentorState.taskCount}
            link={link}
            mentorLink={mentorLink}
            finishSession={finishSession}
            updateSessionCallback={updateSessionCallback}
        />
    );
};

export default MentorSessionContainer;
