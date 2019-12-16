import React from 'react';
import {Redirect, Route} from "react-router-dom";
import StudentLoginContainer from '../../neko-2-features/feature-1-student/student-1-login/StudentLoginContainer';
import StudentSelectContainer from '../../neko-2-features/feature-1-student/student-2-select/StudentSelectContainer';
import MentorStartContainer from '../../neko-2-features/feature-2-mentor/mentor-1-start/MentorStartContainer';
import MentorSessionContainer from '../../neko-2-features/feature-2-mentor/mentor-2-session/MentorSessionContainer';
import MentorDiagramContainer from "../../neko-2-features/feature-2-mentor/mentor-3-diagram/MentorDiagramContainer";
import {flexRowCenterCenter80} from "../../neko-2-features/feature-3-styles/styles";
import {setCookie} from "../../neko-2-features/feature-4-helpers/cookies";

export const STUDENT_LOGIN_PATH = '/student-login';
export const STUDENT_SELECT_PATH = '/student-select';

export const MENTOR_START_PATH = '/mentor-start';
export const MENTOR_SESSION_PATH = '/mentor-session';
export const MENTOR_GET_AUTHOR_TOKEN_PATH = '/mentor-get-author-token';

const Routes: React.FC = () => {
    return (
        <div>
            <Route exact path={'/'} render={() => <Redirect to={MENTOR_START_PATH}/>}/>

            <Route
                path={STUDENT_LOGIN_PATH + '/:sessionToken'}
                render={props => <StudentLoginContainer sessionToken={props.match.params.sessionToken}/>}
            />
            <Route
                path={STUDENT_LOGIN_PATH}
                exact={true}
                render={() => <div style={flexRowCenterCenter80}>You don't have sessionToken in URL, get a new
                    link!</div>}
            />
            <Route path={STUDENT_SELECT_PATH} render={() => <StudentSelectContainer/>}/>

            <Route path={MENTOR_START_PATH} render={() => <MentorStartContainer/>}/>
            <Route path={MENTOR_SESSION_PATH} render={() => <MentorSessionContainer/>}/>
            <Route
                path={MENTOR_GET_AUTHOR_TOKEN_PATH + '/:sessionToken/:authorToken'}
                render={props => {
                    setCookie('sessionToken', props.match.params.sessionToken);
                    setCookie('authorToken', props.match.params.authorToken);
                    return <Redirect to={MENTOR_SESSION_PATH}/>
                }}
            />

        </div>
    );
};

export default Routes;
