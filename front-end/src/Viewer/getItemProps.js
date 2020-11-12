import { Input, Checkbox, Radio, TextArea, Label } from 'semantic-ui-react';
import React from 'react'

export function getItemProps(item) {
    console.log(item)
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
        default:
            return 'p'
    }
}


function getProps(item) {
    let tool = item.tool
    let props = {}

    if (tool === 'Time') {
        props.type = 'time';
        props.style = { maxWidth: '100px' };
    }
    else if (tool === 'DateTime') {
        props.type = 'datetime-local'
        props.style = { maxWidth: '160px' };
    }
    else if (tool === 'DigitalInput') {
        props.type = 'number'
        props.style = { maxWidth: '100px' };
    }
    else if (tool === 'Text') {
        props.type = 'text'
    }
    else if (tool === 'Textarea') {
        props.style = { maxWidth: '200px' };
    }
    else if (tool === 'Radio' || tool === 'Checkbox2') {
        props.label = item.label;
    }
    else if (tool === 'Label') {
        props.children = [<p>{item.label}</p>]
    }

    if (!('style' in props)) {
        props.style = {}
    }
    props.style['position'] = 'absolute';
    props.style['left'] = item.pos.x + 'px';
    props.style['top'] = item.pos.y + 'px';

    return props;
}