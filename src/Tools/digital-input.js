import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';

const DigitalInput = (props) => {

    const initialState = { increment: props.increment, value: props.initValue };

    const [state, setState] = useState(initialState);

    const handleChange = (event, data) => { setState(data.value); }

    return (
        <Input style={{ maxWidth: '100px' }} type="number" onChange={handleChange} value={state} />
    )
}

export default DigitalInput;