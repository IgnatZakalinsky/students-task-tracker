import React from 'react'
import {Button, InputNumber} from "antd";
import {flexColumnCenterCenter80, flexRowCenterCenter} from "../../feature-3-styles/styles";

interface IMentorStartProps {
    taskCount: number;
    error: string;
    loading: boolean;
    mentorSetTaskCountCallback: (taskCount: number) => void;
    startSessionCallback: () => void;
}

const MentorStart: React.FC<IMentorStartProps> =
    ({taskCount, error, loading, mentorSetTaskCountCallback, startSessionCallback}) => {

        return (
            <div style={flexColumnCenterCenter80}>
                {!!error && <div style={{color: 'red'}}>{error}</div>}
                {loading && <div style={{color: 'orange'}}>Loading...</div>}

                <div style={flexRowCenterCenter}>
                    <InputNumber
                        min={0}
                        value={taskCount}
                        onChange={e => mentorSetTaskCountCallback(e || 0)}
                        style={{margin: '20px'}}
                        disabled={loading}
                    />
                    <Button type={'primary'} onClick={startSessionCallback} disabled={loading}>
                        START
                    </Button>
                </div>
            </div>
        )
    };

export default MentorStart
