/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { Segment, Header, Input, Container, TextArea, Form, Button } from 'semantic-ui-react';
import { Store } from '../Store';
import { isObjInvalid } from '../helpers';
/*
Customisable view based on tool selected 
*/

const initialState = {
    id: '',
    label: '',
    tooltip: '',
    helpbox: '',
    conditions: ['', '']
}

const ItemsPanel = (props) => {

    const [store, updateStore] = useContext(Store);
    const [state, setState] = useState(initialState);

    useEffect(
        () => {
            setSelectedProps();
            // console.log(store)
        }, [store]
    )

    const setSelectedProps = () => {
        for (let i in store.array) {
            if (isObjInvalid(store.array[i].id)) {
                continue;
            }
            if (store.array[i].id === store.selectedTool) {
                setState(store.array[i]);
                break;
            }
        }
    }

    const updateStoreValue = (property, newValue) => {
        if (isObjInvalid(state.id)) {
            return;
        }
        let newStore = JSON.parse(JSON.stringify(store));
        for (let i in newStore.array) {
            if (isObjInvalid(newStore.array[i].id)) {
                continue;
            }
            if (newStore.array[i].id === state.id) {
                newStore.array[i][property] = newValue;
                updateStore(newStore);
                break;
            }
        }
    }

    const updateState = (property, newValue) => {
        let newState = { ...state };
        newState[property] = newValue;
        setState(newState);
        updateStoreValue(property, newValue);
    }

    const onToolPropChange = {
        label: function (event, data) {
            updateState('label', data.value);
        },
        tooltip: function (event, data) {
            updateState('tooltip', data.value);
        },
        helpbox: function (event, data) {
            updateState('helpbox', data.value);
        },
        conditions: function () {
            /* conditions panel */
        }
    }

    const deleteTool = () => {
        props.callbackToolToDelete(state.id)
    }



    return (
        <Segment secondary padded >
            <Container>
                <Header as="h5">Items Panel</Header>
                <p>ID: {state.id}</p>
                <label>Label</label>
                <Input fluid type="text" size="small" value={state.label} onChange={onToolPropChange.label} />
                <label>Tooltip</label>
                <Input fluid type="text" size="small" value={state.tooltip} onChange={onToolPropChange.tooltip} />
                <label>Help Box</label>
                <Form> <TextArea value={state.helpbox} onChange={onToolPropChange.helpbox} /> </Form>
                <label>Conditions</label>
                <Segment>
                    <p><i>Example: Enable if ID1 == true</i></p>
                    {JSON.stringify(state.conditions)}
                    <p><i>Not yet implemented</i></p>
                </Segment>
                <Button onClick={deleteTool} negative size='tiny'>Delete Tool</Button>
            </Container>
        </Segment>
    )
}

export default ItemsPanel;