import React, { useState, useEffect, useContext } from 'react';
import { Segment, Header } from 'semantic-ui-react';
import { Store } from '../Store';

let object_template = { id: '', label: '', tooltip: '', helpbox: '', conditions: [] }

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

    const renderTools = () => {
        // Marked for efficiency improvement
        let newCanvasBody = []
        for (let i in props.canvasTools) {
            let compProps = { id: 'Tool' + i }
            addToStore(compProps); // add id to store
            compProps.key = i
            newCanvasBody.push(React.createElement(props.canvasTools[i], compProps)); // create component with id
        }
        setCanvasBody(newCanvasBody)
    }

    useEffect(
        // eslint-disable-next-line react-hooks/exhaustive-deps
        () => { renderTools() }, [props]
    )

    return (
        <Segment padded>
            <Header as="h2">Canvas</Header>
            {canvasBody}
        </Segment>
    )
}

export default Canvas;