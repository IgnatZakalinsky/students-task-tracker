import React from 'react';
import {flexColumnCenter} from "../../feature-3-styles/styles";
import StudentProgress from "./StudentProgress";
import {IStudent} from "../mentor-4-redux/mentorInitialState";

// const students = [
//     {
//         name: 'devTestStudentName1devTestStudentName1devTestStudentName1',
//         currentTaskNumber: 3,
//     },
//     {
//         name: 'StudentName2',
//         currentTaskNumber: 1,
//     },
//     {
//         name: 'Name3',
//         currentTaskNumber: 7,
//     },
//     {
//         name: 'TestStudentName4',
//         currentTaskNumber: 6,
//     },
//
// ];

interface IMentorDiagramProps {
    taskCount: number;
    students: IStudent[];
    error: string;
    loading: boolean;
}

const MentorDiagram: React.FC<IMentorDiagramProps> = ({error, loading, taskCount, students}) => {
    const minCount = students.reduce((acc, s) => s.currentTaskNumber < acc ? s.currentTaskNumber : acc, taskCount);

    return (
        <div style={flexColumnCenter}>
            {!!error && <div style={{color: 'red'}}>{error}</div>}
            {loading ? <div style={{color: 'orange'}}>Loading...</div> : <div>...</div>}

            {students.map(s => (
                <StudentProgress
                    name={s.name}
                    taskCount={taskCount}
                    currentTaskNumber={s.currentTaskNumber}
                    minCount={minCount}
                />
            ))}
        </div>
    );
};

export default MentorDiagram;
