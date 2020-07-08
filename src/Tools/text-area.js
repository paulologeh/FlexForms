import React, { useState } from 'react';
import { TextArea, Form } from 'semantic-ui-react';

const Textarea = (props) => {

    const initialState = props.initValue;

    const [state, setState] = useState(initialState);

    const handleChange = (data, event) => {
        let newState = { ...state };
        newState.value = data.value;
        setState(newState);
    }

    return (
        <Form>
            <TextArea onChange={handleChange} />
        </Form>
    )
}

export default Textarea;