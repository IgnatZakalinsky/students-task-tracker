import React from 'react';
import StudentLogin from "./StudentLogin";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../neko-1-main/main-2-bll/store";
import {studentSetName} from "../student-3-redux/studentActions";

const StudentLoginContainer: React.FC = () => {
    const studentState = useSelector((store: IAppStore) => store.student);
    const dispatch = useDispatch();

    const studentSetNameCallback = (name: string) => {
        dispatch(studentSetName(name))
    };
    const changeName = (e: any) => {
        // dispatch(currentNameChangeAC(e.currentTarget.value))
    };
    return (
        <StudentLogin name={studentState.name} studentSetNameCallback={studentSetNameCallback}/>
    );
};

export default StudentLoginContainer;
