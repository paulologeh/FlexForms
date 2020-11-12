/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import { Segment, Header } from 'semantic-ui-react';
import { Store } from '../Store';
import { isObjInvalid, getHeight, getWidth } from '../helpers';
import Draggable from './Draggable';

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
    if (isObjInvalid(storeObject)) {
        return;
    }
    let keys = Object.keys(storeObject);
    for (let i in keys) {
        // Update values except id and condition
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
        newObj.tool = compProps.tool
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
            tool: props.canvasTool.tool.name,
            onToolClick: handleToolClick,
            getComponentPropsById: handleToolProps,
            setComponentState: handleComponentState,
        }
        addToStore(compProps)
        let newTool = React.createElement(props.canvasTool.tool, compProps, null)
        newCanvasBody.push(<Draggable initialPos={{ x: getWidth() * 0.38, y: getHeight() * 0.3 }} key={counter} targetId={tempId} >{newTool}</Draggable>)
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
        setCanvasBody(canvasBody.filter(tool => tool.props.children.props.id !== props.toolToDelete));
        resetStore(true, props.toolToDelete)
        props.callbackDeleted(true);
    }

    useEffect(
        () => {
            const fetchData = async () => {
                handlePublish()
            };
            fetchData()
        }, [props.publish]
    )

    const handlePublish = async () => {
        if (isObjInvalid(props.publish) || props.publish === false) {
            return
        }

        let store_copy = { ...store };
        store_copy.array = store_copy.array.filter(obj => obj.id !== 'test');
        delete store_copy.selectedTool;

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(store_copy)
        };
        const response = await fetch('/api/publishForm', options)
        const data = await response.json();
        console.log(data)
    }

    // console.log(store)

    return (
        <Segment padded >
            <Header as="h2">Canvas</Header>
            <div id='current-canvas'>
                {canvasBody}
            </div>
        </Segment>
    )
}

export default Canvas;