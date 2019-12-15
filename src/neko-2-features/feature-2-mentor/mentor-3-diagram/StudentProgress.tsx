import React from 'react';
import {flexRowCenterCenter} from "../../feature-3-styles/styles";
import {Progress} from "antd";

interface IStudentProgressProps {
    taskCount: number;
    name: string;
    currentTaskNumber: number;
    minCount: number;
}

const StudentProgress: React.FC<IStudentProgressProps> = ({taskCount, currentTaskNumber, minCount, name}) => {
    const progress = Math.floor(currentTaskNumber / taskCount * 100);
    const color = taskCount === currentTaskNumber ? 'lime'
        : currentTaskNumber === minCount ? 'red' : 'blue';

    return (
        <div style={{...flexRowCenterCenter, width: '80vw', justifyContent: 'space-between'}}>
            <span style={{margin: '10px'}}>{name}</span>

            <div style={{width: '50vw'}}>
                <Progress
                    strokeLinecap={'square'}
                    percent={progress}
                    format={(px = 0, p100 = 100) => {
                        return (<div>{currentTaskNumber}/{taskCount} ({progress}%)</div>)
                    }}
                    strokeColor={color}
                    strokeWidth={4}
                />
            </div>
        </div>
    );
};

export default StudentProgress;
