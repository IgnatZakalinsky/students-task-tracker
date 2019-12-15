import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {
    MENTOR_DIAGRAM_PATH,
    MENTOR_SESSION_PATH,
    MENTOR_START_PATH,
    STUDENT_LOGIN_PATH,
    STUDENT_SELECT_PATH
} from './Routes';
import {Button} from "antd";
import {flexRowCenterSpaceAround} from "../../neko-2-features/feature-3-styles/styles";

const Header: React.FC = () => {
    const [show, setShow] = useState(false);

    return (
        <div
            style={{
                ...flexRowCenterSpaceAround,
                height: '10vh',
                backgroundColor: '#cccccc'
            }}
        >
            <Button onClick={() => setShow(!show)}>{show ? 'hide dev header' : 'show dev header'}</Button>
            {show && <NavLink to={STUDENT_LOGIN_PATH}>studentLogin</NavLink>}
            {show && <NavLink to={STUDENT_SELECT_PATH}>studentSelect</NavLink>}

            {show && <NavLink to={MENTOR_START_PATH}>mentorStart</NavLink>}
            {show && <NavLink to={MENTOR_SESSION_PATH}>mentorSession</NavLink>}
            {show && <NavLink to={MENTOR_DIAGRAM_PATH}>mentorDiagram</NavLink>}
        </div>
    );
};

export default Header;
