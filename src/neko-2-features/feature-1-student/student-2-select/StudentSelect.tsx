import React from 'react';
import {Input, InputNumber} from "antd";
import {flexColumnCenterCenter80} from "../../feature-3-styles/styles";

interface IStudentSelectProps {
    name: string;
    taskCount: number;
    currentTaskNumber: number;
    error: string;
    loading: boolean;
    studentSetNameCallback: (name: string) => void;
    studentSetCurrentTaskNumberCallback: (currentTaskNumber: number) => void;
    updateStudentCallback: () => void;
}

const StudentSelect: React.FC<IStudentSelectProps> =
    ({
         name,
         taskCount,
         currentTaskNumber,
         error,
         loading,
         studentSetNameCallback,
         studentSetCurrentTaskNumberCallback,
         updateStudentCallback,
    }) => {

        return (
            <div style={flexColumnCenterCenter80}>
                {!!error && <div style={{color: 'red'}}>{error}</div>}
                {loading && <div style={{color: 'orange'}}>Loading...</div>}

                <Input
                    placeholder={'Name Surname'}
                    value={name}
                    onChange={e => studentSetNameCallback(e.currentTarget.value)}
                    onBlur={updateStudentCallback}
                    style={{width: '250px', margin: '20px'}}
                    disabled={loading}
                />
                <InputNumber
                    min={0}
                    max={taskCount}
                    value={currentTaskNumber}
                    onChange={e => studentSetCurrentTaskNumberCallback(e || 0)}
                    disabled={loading}
                />
            </div>
        );
    };

export default StudentSelect;
