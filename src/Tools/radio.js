import React, { useState } from 'react';
import { Radio as Radio2 } from 'semantic-ui-react';

const Radio = (props) => {

    const initialState = props.initValue;

    const [state, setState] = useState(initialState);

    const toggle = () => {
        let oldState = state;
        setState(!oldState);
    }

    return (
        <Radio2 onClick={toggle} />
    )
}

export default Radio;