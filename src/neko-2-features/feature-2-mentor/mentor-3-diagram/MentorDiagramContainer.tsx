import React, {useEffect, useState} from 'react';
import MentorDiagram from "./MentorDiagram";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from '../../../neko-1-main/main-2-bll/store';
import {getStudents} from "../mentor-4-redux/mentorThunks";

const MentorDiagramContainer: React.FC = () => {
    const mentorState = useSelector((store: IAppStore) => store.session);
    const dispatch = useDispatch();
    const [timer, setTimer] = useState();

    useEffect(() => {
        setTimer(setInterval(() => {
            dispatch(getStudents());
        }, 10000));
        return clearInterval(timer);
    }, []);

    return (
        <MentorDiagram
            error={mentorState.error}
            loading={mentorState.loading}
            taskCount={mentorState.taskCount}
            students={mentorState.students}
        />
    );
};

export default MentorDiagramContainer;
