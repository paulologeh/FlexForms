import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';

const Time = (props) => {

    const initialState = props.initValue;

    const [state, setState] = useState(initialState);

    const handleChange = (data, event) => {
        let newState = { ...state };
        newState.value = data.value;
        setState(newState);
    }

    return (
        <Input type="time" onChange={handleChange} />
    )
}

export default Time;