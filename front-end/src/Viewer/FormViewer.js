/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Menu, Container, Input } from 'semantic-ui-react';
import { getItemProps } from './getItemProps';

const FormViewer = ({ match }) => {

    const [state, setState] = useState(null);
    const id = match.params.id

    useEffect(
        () => {
            getFormData();
        }, [id]
    )

    const getFormData = async () => {
        const response = await fetch(`/api/forms/${match.params.id}`)
        const data = await response.json();
        let form = data.data.settings
        if (form !== undefined) {
            console.log(form)
            let temp = parseData(form.array)
            setState(temp)
            console.log('Processed form')
        }
    }

    const parseData = (array) => {
        let form_data = []
        for (let i in array) {
            let object = getItemProps(array[i])
            object.props.key = i
            let temp = React.createElement(object.element, object.props, object.props.children)
            form_data.push(temp)
        }
        console.log(form_data)
        return form_data
    }

    return (
        <>
            <div className="menu-header">
                <Menu fixed='top' color='green' inverted>
                    <Container>
                        <Menu.Item as='a' header color='green'>FlexForms</Menu.Item>
                        <Menu.Item>Form Viewer</Menu.Item>
                        <Menu.Item>Form ID: {id}</Menu.Item>
                    </Container>
                </Menu>
            </div>
            <div className="App">
                <Container>
                    {state}
                </Container>
            </div>
        </>
    )
}

export default FormViewer;