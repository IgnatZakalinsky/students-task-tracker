import React from 'react';
import StudentSelect from "./StudentSelect";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from '../../../neko-1-main/main-2-bll/store';
import {studentSetCurrentTaskNumber, studentSetName} from "../student-3-redux/studentActions";
import {flexRowCenterCenter80} from "../../feature-3-styles/styles";
import {updateStudent} from '../student-3-redux/studenttThunks';

const StudentSelectContainer: React.FC = () => {
    const studentState = useSelector((store: IAppStore) => store.student);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log('sessionToken:', sessionToken)
    //     if (sessionToken) dispatch(studentSetSessionToken(sessionToken));
    // }, []);

    const updateStudentCallback = () => {
        dispatch(updateStudent())
    };
    const studentSetNameCallback = (name: string) => {
        dispatch(studentSetName(name))
    };
    const studentSetCurrentTaskNumberCallback = (currentTaskNumber: number) => {
        dispatch(studentSetCurrentTaskNumber(currentTaskNumber));
        updateStudentCallback();
    };

    if (!studentState.studentToken) {
        return <div style={flexRowCenterCenter80}>You don't have studentToken!</div>
    }

    return (
        <StudentSelect
            name={studentState.name}
            taskCount={studentState.taskCount}
            currentTaskNumber={studentState.currentTaskNumber}
            error={studentState.error}
            loading={studentState.loading}
            studentSetNameCallback={studentSetNameCallback}
            studentSetCurrentTaskNumberCallback={studentSetCurrentTaskNumberCallback}
            updateStudentCallback={updateStudentCallback}
        />
    );
};

export default StudentSelectContainer;
