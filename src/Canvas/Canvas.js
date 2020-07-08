import React, { useState, useEffect } from 'react';
import { Segment, Header } from 'semantic-ui-react';

const Canvas = (props) => {

    const [canvasBody, setCanvasBody] = useState([])

    console.log(props.canvasTools)

    const renderTools = () => {
        // Marked for efficiency improvement
        let newCanvasBody = []
        for (let i in props.canvasTools) {
            newCanvasBody.push(React.createElement(props.canvasTools[i], { key: i }))
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