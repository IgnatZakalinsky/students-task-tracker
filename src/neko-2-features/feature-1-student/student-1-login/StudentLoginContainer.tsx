import React, {useEffect, useState} from 'react';
import StudentLogin from "./StudentLogin";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../neko-1-main/main-2-bll/store";
import {studentSetName, studentSetSessionToken} from "../student-3-redux/studentActions";
import {goToSession} from '../student-3-redux/studentThunks';
import {Redirect} from "react-router";
import {STUDENT_SELECT_PATH} from "../../../neko-1-main/main-1-ui/Routes";
import {getCookie, setCookie} from "../../feature-4-helpers/cookies";

interface IStudentLoginContainerProps {
    sessionToken: string;
}

const StudentLoginContainer: React.FC<IStudentLoginContainerProps> = ({sessionToken}) => {
    const studentState = useSelector((store: IAppStore) => store.student);
    const dispatch = useDispatch();
    const [newStudent, setNewStudent] = useState(true);

    useEffect(() => {
        if (sessionToken) {
            setCookie('sessionToken', sessionToken, 60 * 60 * 24 * 7); // 7 days
            setCookie('studentToken', '', -1000); // 7 days
            dispatch(studentSetSessionToken(sessionToken));
        }
    }, []);

    const studentSetNameCallback = (name: string) => {
        dispatch(studentSetName(name));
    };
    const goToSessionCallback = () => {
        dispatch(goToSession());
        setNewStudent(false);
    };

    const studentToken = getCookie('studentToken');
    if (!!studentToken && !newStudent) {
        return <Redirect to={STUDENT_SELECT_PATH}/>
    }

    return (
        <StudentLogin
            name={studentState.name}
            error={studentState.error}
            loading={studentState.loading}
            studentSetNameCallback={studentSetNameCallback}
            goToSessionCallback={goToSessionCallback}
        />
    );
};

export default StudentLoginContainer;
