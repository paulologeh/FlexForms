import React, { useState, useEffect } from 'react';
import { Header } from 'semantic-ui-react';

const FormViewer = ({ match }) => {

    const [state, setState] = useState(null);
    const id = match.params.id
    useEffect(
        () => {
            getFormData();
        }, [id]
    )

    const getFormData = async () => {
        console.log()
        const response = await fetch(`/api/forms/${match.params.id}`)
        const data = await response.json();
        console.log(data)
        setState(data.data.settings)
    }

    return (
        <>
            <Header as='h1'>Viewing Form</Header>
            <Header as='h2'>id: {id}</Header>
            <Header as='h5'>{JSON.stringify(state)}</Header>
        </>
    )
}

export default FormViewer;