/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { Label as LabeL } from 'semantic-ui-react';
import { Store } from '../Store';

const initialState = { label: "label" }

const Label = (props) => {

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

    const onToolClick = () => {
        props.onToolClick(props.id, store, updateStore)
    }

    return <LabeL onClick={onToolClick}>{state.label}</LabeL>
}

export default Label;