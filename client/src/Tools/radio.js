/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { Radio as Radio2, Popup, Icon } from 'semantic-ui-react';
import { Store } from '../Store';

const Radio = (props) => {

    const initialState = {
        label: "",
        helpbox: "",
        value: props.initValue ? props.initValue : false
    }

    const [state, setState] = useState(initialState);
    const [store, updateStore] = useContext(Store);

    useEffect(
        () => {
            setStateFromItemsPanel()
        }, [store]
    )

    const toggle = () => {
        let newState = { ...state };
        newState.value = !newState.value;
        setState(newState);
        props.onToolClick(props.id, store, updateStore);
    }

    const setStateFromItemsPanel = () => {
        let storeObject = props.getComponentPropsById(props.id, store);
        props.setComponentState(storeObject, state, setState);
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
            <Radio2 onClick={toggle} checked={state.value} />
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

export default Radio;