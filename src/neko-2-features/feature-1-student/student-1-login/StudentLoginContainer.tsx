import React, {useEffect} from 'react';
import StudentLogin from "./StudentLogin";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../neko-1-main/main-2-bll/store";
import {studentSetName, studentSetSessionToken} from "../student-3-redux/studentActions";
import {goToSession} from '../student-3-redux/studenttThunks';
import {Redirect} from "react-router";
import {STUDENT_SELECT_PATH} from "../../../neko-1-main/main-1-ui/Routes";

interface IStudentLoginContainerProps {
    sessionToken: string;
}

const StudentLoginContainer: React.FC<IStudentLoginContainerProps> = ({sessionToken}) => {
    const studentState = useSelector((store: IAppStore) => store.student);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('sessionToken:', sessionToken)
        if (sessionToken) dispatch(studentSetSessionToken(sessionToken));
    }, []);

    const studentSetNameCallback = (name: string) => {
        dispatch(studentSetName(name))
    };
    const goToSessionCallback = () => {
        dispatch(goToSession())
    };

    if (!!studentState.studentToken) {
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
