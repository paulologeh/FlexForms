import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';

const DateTime = (props) => {

    const initialState = props.initValue ? props.initValue : "";

    const [state, setState] = useState(initialState);

    const handleChange = (event, data) => { setState(data.value); }

    return (
        <Input type="datetime-local" onChange={handleChange} value={state} />
    )
}

export default DateTime;