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
    console.log(`updated store from component ${localId}`)
    // console.log(localStore)
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

    const addToolToCanvas = () => {
        if (isObjInvalid(props.canvasTool)) {
            return;
        }
        let newCanvasBody = [...canvasBody] // make copy of state
        let tempId = 'Tool' + (++counter);
        let compProps = { id: tempId, key: counter, onToolClick: handleToolClick }
        addToStore(compProps)
        let newTool = React.createElement(props.canvasTool.tool, compProps, null)
        newCanvasBody.push(newTool)
        setCanvasBody(newCanvasBody)
    }

    useEffect(
        () => {
            addToolToCanvas();
        }, [props]
    )

    return (
        <Segment padded>
            <Header as="h2">Canvas</Header>
            {canvasBody}
        </Segment>
    )
}

export default Canvas;