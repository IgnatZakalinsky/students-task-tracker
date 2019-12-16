import React from 'react';
import {flexRowCenterCenter} from "../../feature-3-styles/styles";
import {Button, Progress} from "antd";

interface IStudentProgressProps {
    taskCount: number;
    name: string;
    currentTaskNumber: number;
    minCount: number;
    deleteStudentCallback: () => void;
}

const StudentProgress: React.FC<IStudentProgressProps> = ({taskCount, currentTaskNumber, minCount, name, deleteStudentCallback}) => {
    const progress = Math.floor(currentTaskNumber / taskCount * 100);
    const color = taskCount === currentTaskNumber ? 'lime'
        : currentTaskNumber === minCount ? 'red' : 'blue';

    return (
        <div style={{...flexRowCenterCenter, width: '95vw', justifyContent: 'space-between'}}>
            <span style={{margin: '10px', width: '20vw', wordWrap: 'break-word'}}>
                {name}
            </span>

            <div style={{minWidth: '30vw'}}>
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
            <Button
                onClick={deleteStudentCallback}
                style={{marginLeft: '20px', marginTop: '6px'}}
                type={'danger'}
            >
                X
            </Button>
        </div>
    );
};

export default StudentProgress;
