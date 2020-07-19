import React, { useState, useContext } from 'react';
import { Checkbox } from 'semantic-ui-react';
import { Store } from '../Store';

const Checkbox2 = (props) => {

    const initialState = props.initValue ? props.initValue : false;

    const [state, setState] = useState(initialState);
    const [store, updateStore] = useContext(Store);

    const toggle = () => {
        setState(!state);
        props.onToolClick(props.id, store, updateStore);
    }

    return (
        <Checkbox onClick={toggle} checked={state} />
    )
}

export default Checkbox2;