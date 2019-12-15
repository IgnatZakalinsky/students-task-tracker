import React from 'react';
import {Redirect, Route} from "react-router-dom";
import StudentLoginContainer from '../../neko-2-features/feature-1-student/student-1-login/StudentLoginContainer';
import StudentSelectContainer from '../../neko-2-features/feature-1-student/student-2-select/StudentSelectContainer';
import MentorStartContainer from '../../neko-2-features/feature-2-mentor/mentor-1-start/MentorStartContainer';
import MentorSessionContainer from '../../neko-2-features/feature-2-mentor/mentor-2-session/MentorSessionContainer';
import MentorDiagramContainer from "../../neko-2-features/feature-2-mentor/mentor-3-diagram/MentorDiagramContainer";
import {flexRowCenterCenter80} from "../../neko-2-features/feature-3-styles/styles";

export const STUDENT_LOGIN_PATH = '/student-login';
export const STUDENT_SELECT_PATH = '/student-select';

export const MENTOR_START_PATH = '/mentor-start';
export const MENTOR_SESSION_PATH = '/mentor-session';
export const MENTOR_DIAGRAM_PATH = '/test-mentor-diagram-container';

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
                render={() => <div style={flexRowCenterCenter80}>You don't have sessionToken in URL!</div>}
            />
            <Route path={STUDENT_SELECT_PATH} render={() => <StudentSelectContainer/>}/>

            <Route path={MENTOR_START_PATH} render={() => <MentorStartContainer/>}/>
            <Route path={MENTOR_SESSION_PATH} render={() => <MentorSessionContainer/>}/>
            {/*dev*/}<Route path={MENTOR_DIAGRAM_PATH} render={() => <MentorDiagramContainer/>}/>

        </div>
    );
};

export default Routes;
