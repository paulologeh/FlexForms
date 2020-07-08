import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';

const Text = (props) => {

    const initialState = props.initValue;

    const [state, setState] = useState(initialState);

    const handleChange = (data, event) => {
        let newState = { ...state };
        newState.value = data.value;
        setState(newState);
    }

    return (
        <Input type="text" onChange={handleChange} />
    )
}

export default Text;