import { Input, Checkbox, Radio, Button, TextArea, Label } from 'semantic-ui-react';
import React from 'react'

export function getItemProps(item) {
    console.log(item)
    // props -> helpbox, tooltip, id, label, tool
    let x = getElement(item.tool)
    let y = getProps(item)
    return { element: x, props: y }
}

function getElement(tool) {
    switch (tool) {
        case 'DateTime':
        case 'Time':
        case 'DigitalInput':
        case 'Text':
            return Input
        case 'Checkbox2':
            return Checkbox
        case 'Radio':
            return Radio
        case 'Textarea':
            return TextArea
        case 'Label':
            return Label
        case 'Submit':
            return Button
        default:
            return 'p'
    }
}

function getProps(item) {
    let tool = item.tool
    let props = {}
    if (tool === 'Time') {
        props.type = 'time'
    }
    else if (tool === 'DateTime') {
        props.type = 'datetime-local'
    }
    else if (tool === 'DigitalInput') {
        props.type = 'number'
    }
    else if (tool === 'Text') {
        props.type = 'text'
    }
    else {
        props.children = <p>Example</p>
    }
    if (item.label) {
        props.label = item.label
    }

    return props;
}