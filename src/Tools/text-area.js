import React, { useState } from 'react';
import { TextArea, Form } from 'semantic-ui-react';

const Textarea = (props) => {

    const initialState = props.initValue ? props.initValue : "";

    const [state, setState] = useState(initialState);

    const handleChange = (event, data) => { setState(data.value) }

    return (
        <Form>
            <TextArea onChange={handleChange} value={state} />
        </Form>
    )
}

export default Textarea;