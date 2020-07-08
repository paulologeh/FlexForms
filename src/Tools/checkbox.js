import React, { useState } from 'react';
import { Checkbox } from 'semantic-ui-react';

const CheckboxComponent = (props) => {

    const initialState = props.initValue;

    const [state, setState] = useState(initialState);

    const toggle = () => {
        let oldState = state;
        setState(!oldState);
    }

    return (
        <Checkbox onClick={toggle} />
    )
}

export default CheckboxComponent;