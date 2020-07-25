/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import { Segment, Header } from 'semantic-ui-react';
import { Store } from '../Store';
import { isObjInvalid } from '../helpers';

let object_template = { id: '', label: '', tooltip: '', helpbox: '', conditions: [] }

var counter = 0;

const handleToolClick = (localId, localStore, localUpdateStore) => {
    let tempStore = JSON.parse(JSON.stringify(localStore)); // deep copy
    tempStore.selectedTool = localId;
    localUpdateStore(tempStore)
}

const handleToolProps = (localId, localStore) => {
    for (let i in localStore.array) {
        if (isObjInvalid(localStore.array[i].id)) {
            continue;
        }
        if (localId === localStore.array[i].id) {
            return localStore.array[i];
        }
    }
    return null;
}

const handleComponentState = (storeObject, localState, localSetState) => {
    let newState = { ...localState };
    let keys = Object.keys(storeObject);
    for (let i in keys) {
        if (keys[i] === 'id' || keys[i] === 'conditions') {
            continue;
        }
        newState[keys[i]] = storeObject[keys[i]];
    }
    localSetState(newState);
}

const initialStore = {
    selectedTool: '',
    array: [{
        id: 'test',
        label: 'test_label',
        tooltip: 'test_tooltip',
        helpbox: 'test_helpbox',
        conditions: [
            {
                state: { disable: true, value: false, hide: false },
                id: 'test2',
                operator: 'equals',
                to: 'false'
            },
            {
                state: { disable: false, value: false, hide: true },
                id: 'test3',
                operator: 'equals',
                to: 'true'
            }
        ]
    }]
}

const Canvas = (props) => {

    const [canvasBody, setCanvasBody] = useState([])
    const [store, updateStore] = useContext(Store)

    const addToStore = (compProps) => {
        let newObj = { ...object_template }
        newObj.id = compProps.id
        let newStore = { ...store }
        newStore.array.push(newObj)
        updateStore(newStore)
    }

    useEffect(
        () => {
            addToolToCanvas();
        }, [props.canvasTool]
    )

    const addToolToCanvas = () => {
        if (isObjInvalid(props.canvasTool)) {
            return;
        }
        let newCanvasBody = [...canvasBody] // make copy of state
        let tempId = 'Tool' + (++counter);
        let compProps = {
            id: tempId,
            key: counter,
            onToolClick: handleToolClick,
            getComponentPropsById: handleToolProps,
            setComponentState: handleComponentState
        }
        addToStore(compProps)
        let newTool = React.createElement(props.canvasTool.tool, compProps, null)
        newCanvasBody.push(newTool)
        setCanvasBody(newCanvasBody)
    }

    useEffect(
        () => {
            handleClear();
        }, [props.clear]
    )

    const handleClear = () => {
        if (props.clear) {
            setCanvasBody([]);
            resetStore(false);
            props.callbackCleared(true);
            counter = 0;
        }
    }

    const resetStore = (specific, id) => {
        if (specific) {
            let newStore = JSON.parse(JSON.stringify(store));
            newStore.array = newStore.array.filter(obj => obj.id !== id);
            updateStore(newStore);
        }
        else {
            updateStore(initialStore);
        }
    }

    useEffect(
        () => {
            handleDelete();
        }, [props.toolToDelete]
    )

    const handleDelete = () => {
        if (isObjInvalid(props.toolToDelete)) {
            return;
        }
        setCanvasBody(canvasBody.filter(tool => tool.props.id !== props.toolToDelete));
        resetStore(true, props.toolToDelete)
        props.callbackDeleted(true);
    }

    console.log(store)

    return (
        <Segment padded>
            <Header as="h2">Canvas</Header>
            {canvasBody}
        </Segment>
    )
}

export default Canvas;