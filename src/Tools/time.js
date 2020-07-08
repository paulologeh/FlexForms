import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';

const Time = (props) => {

    const initialState = props.initValue ? props.initValue : "";

    const [state, setState] = useState(initialState);

    const handleChange = (event, data) => { setState(data.value) }

    return (
        <Input type="time" onChange={handleChange} value={state} />
    )
}

export default Time;