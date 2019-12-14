import React from 'react';
import StudentLogin from "./StudentLogin";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../neko-1-main/main-2-bll/store";
import {currentNameChangeAC, studentLoginAC} from "../student-3-redux/studentReducer";

const StudentLoginContainer: React.FC = () => {
    const studentState = useSelector((store: IAppStore) => store.student);
    const dispatch = useDispatch();
    const loginStudent = (name: string) => {
        dispatch(studentLoginAC(name))
    };
    const changeName = (e: any) => {
        dispatch(currentNameChangeAC(e.currentTarget.value))
    };
    return (
        <StudentLogin loginStudent={loginStudent} name={studentState.currentStudentName} changeName={changeName}/>
    );
};

export default StudentLoginContainer;
