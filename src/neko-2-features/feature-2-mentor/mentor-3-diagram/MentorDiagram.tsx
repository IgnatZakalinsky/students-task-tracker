import React from 'react';
import {flexColumnCenter} from "../../feature-3-styles/styles";
import StudentProgress from "./StudentProgress";

interface IMentorDiagramProps {
    // taskCount: number,
    // link: string
}

const MentorDiagram: React.FC<IMentorDiagramProps> = ({
                                                          // taskCount, link
                                                      }) => {
    const students = [
        {
            name: 'devTestStudentName1devTestStudentName1devTestStudentName1',
            currentTaskNumber: 3,
        },
        {
            name: 'StudentName2',
            currentTaskNumber: 1,
        },
        {
            name: 'Name3',
            currentTaskNumber: 7,
        },
        {
            name: 'TestStudentName4',
            currentTaskNumber: 6,
        },

    ];

    return (
        <div style={flexColumnCenter}>
            {students.map(s => (
                <StudentProgress
                    name={s.name}
                    taskCount={7}
                    currentTaskNumber={s.currentTaskNumber}
                    minCount={1}
                />
            ))}
        </div>
    );
};

export default MentorDiagram;
