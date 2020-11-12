/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Menu, Container, Form, Icon, Popup, Button } from 'semantic-ui-react';
import { getItemProps } from './getItemProps';
import { getTextWidth } from '../helpers';


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
            let item = React.createElement(object.element, object.props, object.props.children)

            if (array[i].label && array[i].tooltip && array[i].tool !== "Radio" && array[i].tool !== "Checkbox2" && array[i].tool !== "Label") {
                let textWidth = getTextWidth(array[i].label)
                let itemCondiments = <Popup
                    key={i + '_condiment'}
                    content={array[i].tooltip}
                    mouseEnterDelay={500}
                    mouseLeaveDelay={0}
                    on='hover'
                    trigger={<label style={{ padding: '1vmin', position: 'absolute', left: (array[i].pos.x - textWidth) + 'px', top: (array[i].pos.y) + 'px' }}>{array[i].label}</label>}
                />
                form_data.push(itemCondiments)
            }
            else if (array[i].label && array[i].tool !== "Radio" && array[i].tool !== "Checkbox2" && array[i].tool !== "Label") {
                let textWidth = getTextWidth(array[i].label)
                form_data.push(<label key={i + '_label'} style={{ padding: '1vmin', position: 'absolute', left: (array[i].pos.x - textWidth) + 'px', top: (array[i].pos.y) + 'px' }}>{array[i].label}</label>)
            }

            // TO BE COMPLETED
            // if (array[i].helpbox) {
            //     let itemCondiments = <Popup
            //         content={array[i].helpbox}
            //         mouseEnterDelay={500}
            //         mouseLeaveDelay={0}
            //         on='click'
            //         key={i + '_helpbox'}
            //         trigger={<Icon name='help circle' size='small' style={{ padding: '1vmin', position: 'absolute', left: (array[i].pos.x) + 'px', top: (array[i].pos.y - 20) + 'px' }} />}
            //     />
            //     form_data.push(itemCondiments)
            // }

            // TO BE FIXED
            // if (array[i].tool === 'Textarea') {
            //     form_data.push(<Form key={i + '_form'}>{item}</Form>)
            // }
            if (array[i].tool === "Radio" || array[i].tool === "Checkbox2" || array[i].tool === "Label") {
                if (!array[i].tooltip) {
                    form_data.push(item)
                }
                else {
                    let newItem = <Popup
                        key={i + '_condiment'}
                        content={array[i].tooltip}
                        mouseEnterDelay={500}
                        mouseLeaveDelay={0}
                        on='hover'
                        trigger={item}
                    />
                    form_data.push(newItem)
                }
            }
            else {
                form_data.push(item)
            }

        }
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
                        <Menu.Item><Button fluid>Submit</Button></Menu.Item>
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