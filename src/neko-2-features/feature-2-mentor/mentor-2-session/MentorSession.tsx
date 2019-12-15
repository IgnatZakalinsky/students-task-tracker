import React from 'react';
import {Button, InputNumber} from "antd";
import {flexColumnCenterCenter80, flexRowCenterSpaceAround} from "../../feature-3-styles/styles";

interface IMentorSessionProps {
    taskCount: number,
    link: string
}

const MentorSession: React.FC<IMentorSessionProps> = ({taskCount, link}) => {

    return (
        <div style={flexColumnCenterCenter80}>
            {link}

            <div style={{...flexRowCenterSpaceAround, width: '100vw'}}>
                <InputNumber min={0} value={taskCount} style={{margin: '20px'}}/>
                <Button type={'primary'}>FINISH SESSION</Button>
            </div>
        </div>
    );
};

export default MentorSession;
