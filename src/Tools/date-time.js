import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';

const DateTime = (props) => {

    const initialState = props.initValue;

    const [state, setState] = useState(initialState);

    const handleChange = (data, event) => {
        let newState = { ...state };
        newState.value = data.value;
        setState(newState);
    }

    return (
        <Input type="datetime-local" onChange={handleChange} />
    )
}

export default DateTime;