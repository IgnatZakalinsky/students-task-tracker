import React from 'react';
import {Redirect, Route} from "react-router-dom";
import StudentLoginContainer from '../../neko-2-features/feature-1-student/student-1-login/StudentLoginContainer';
import StudentSelectContainer from '../../neko-2-features/feature-1-student/student-2-select/StudentSelectContainer';
import MentorStartContainer from '../../neko-2-features/feature-2-mentor/mentor-1-start/MentorStartContainer';
import MentorSessionContainer from '../../neko-2-features/feature-2-mentor/mentor-2-session/MentorSessionContainer';
import MentorDiagramContainer from "../../neko-2-features/feature-2-mentor/mentor-3-diagram/MentorDiagramContainer";

export const STUDENT_LOGIN_PATH = '/test-student-login-container';
export const STUDENT_SELECT_PATH = '/test-student-select-container';

export const MENTOR_START_PATH = '/test-mentor-start-container';
export const MENTOR_SESSION_PATH = '/test-mentor-session-container';
export const MENTOR_DIAGRAM_PATH = '/test-mentor-diagram-container';

const Routes: React.FC = () => {
    return (
        <div>
            {/*dev*/}<Route exact path={'/'} render={() => <Redirect to={MENTOR_START_PATH}/>}/>

            {/*dev*/}<Route path={STUDENT_LOGIN_PATH} render={() => <StudentLoginContainer/>}/>
            {/*dev*/}<Route path={STUDENT_SELECT_PATH} render={() => <StudentSelectContainer/>}/>

            {/*dev*/}<Route path={MENTOR_START_PATH} render={() => <MentorStartContainer/>}/>
            {/*dev*/}<Route path={MENTOR_SESSION_PATH} render={() => <MentorSessionContainer/>}/>
            {/*dev*/}<Route path={MENTOR_DIAGRAM_PATH} render={() => <MentorDiagramContainer/>}/>

        </div>
    );
};

export default Routes;
