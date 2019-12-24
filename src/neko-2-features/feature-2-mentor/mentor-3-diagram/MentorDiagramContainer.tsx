import React, {useEffect} from 'react';
import MentorDiagram from "./MentorDiagram";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from '../../../neko-1-main/main-2-bll/store';
import {deleteStudent, getStudents} from "../mentor-4-redux/mentorThunks";

const MentorDiagramContainer: React.FC = () => {
    const mentorState = useSelector((store: IAppStore) => store.session);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStudents());
        const t = setInterval(() => {
            dispatch(getStudents());
        }, 30000);
        return () => clearInterval(t);
    }, []);

    const deleteStudentCallback = (studentToken: string) => {
        dispatch(deleteStudent(studentToken));
    };

    return (
        <MentorDiagram
            error={mentorState.error}
            loading={mentorState.loading}
            taskCount={mentorState.taskCount}
            students={mentorState.students.sort((a, b) => a.currentTaskNumber - b.currentTaskNumber)}
            deleteStudentCallback={deleteStudentCallback}
        />
    );
};

export default MentorDiagramContainer;
