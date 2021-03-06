/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { Input, Popup, Icon } from 'semantic-ui-react';
import { Store } from '../Store';

const DigitalInput = (props) => {

    const initialState = {
        label: "",
        helpbox: "",
        value: props.initValue ? props.initValue : ""
    }

    const [state, setState] = useState(initialState);
    const [store, updateStore] = useContext(Store);

    useEffect(
        () => {
            setStateFromItemsPanel()
        }, [store]
    )

    const setStateFromItemsPanel = () => {
        let storeObject = props.getComponentPropsById(props.id, store);
        props.setComponentState(storeObject, state, setState);
    }

    const handleChange = (event, data) => {
        let newState = { ...state };
        newState.value = data.value;
        setState(newState);
    }

    const onToolClick = () => {
        props.onToolClick(props.id, store, updateStore)
    }

    return (
        <>
            <Popup
                content={state.tooltip}
                mouseEnterDelay={500}
                mouseLeaveDelay={0}
                on='hover'
                trigger={<label style={{ padding: '1vmin' }}>{state.label}</label>}
            />
            <Input style={{ maxWidth: '100px' }} type="number" onChange={handleChange} onClick={onToolClick} value={state.value} />
            {state.helpbox !== "" ?
                <Popup
                    content={state.helpbox}
                    mouseEnterDelay={500}
                    mouseLeaveDelay={0}
                    on='click'
                    trigger={<Icon name='help circle' size='small' />}
                /> : null}
        </>
    )
}

export default DigitalInput;