import React, { useState } from 'react';
import { Radio as Radio2 } from 'semantic-ui-react';

const Radio = (props) => {

    const initialState = props.initValue ? false : props.initValue;

    const [state, setState] = useState(initialState);

    const toggle = () => { setState(!state); }

    return (
        <Radio2 onClick={toggle} checked={state} />
    )
}

export default Radio;