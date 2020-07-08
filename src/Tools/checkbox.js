import React, { useState } from 'react';
import { Checkbox } from 'semantic-ui-react';

const Checkbox2 = (props) => {

    const initialState = props.initValue ? props.initValue : false;

    const [state, setState] = useState(initialState);

    const toggle = () => { setState(!state); }

    return (
        <Checkbox onClick={toggle} checked={state} />
    )
}

export default Checkbox2;