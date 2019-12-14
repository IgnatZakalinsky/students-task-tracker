import React, {useState} from 'react';
import MentorStart from "./MentorStart";

const MentorStartContainer: React.FC = () => {
    let [defaultValue, setDefaultValue] = useState(1);

    const startSession = () => {

    };
    return (
        <MentorStart defaultValue={defaultValue} setDefaultValue={setDefaultValue} startSession={startSession}/>
    );
};

export default MentorStartContainer;
