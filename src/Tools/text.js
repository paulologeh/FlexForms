import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';

const Text = (props) => {

    const initialState = props.initValue ? props.initValue : "";

    const [state, setState] = useState(initialState);

    const handleChange = (event, data) => { setState(data.value); }

    return (
        <Input style={{ maxWidth: '100px' }} type="text" onChange={handleChange} value={state} />
    )
}

export default Text;