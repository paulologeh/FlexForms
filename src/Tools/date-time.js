import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';

const DateTime = (props) => {

    const initialState = props.initValue ? props.initValue : "";

    const [state, setState] = useState(initialState);

    const handleChange = (event, data) => { setState(data.value); }

    return (
        <span>
            <label></label>
            <Input style={{ width: 'inherit', maxWidth: '120px' }} type="datetime-local" onChange={handleChange} onClick={props.onClick} value={state} />
        </span>
    )
}

export default DateTime;