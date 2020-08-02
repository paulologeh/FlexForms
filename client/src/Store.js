import React, { useState, createContext } from 'react';

export const Store = createContext();

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

export function StoreProvider(props) {

    const [store, updateStore] = useState(initialStore);

    return (
        <Store.Provider value={[store, updateStore]}>
            {props.children}
        </Store.Provider>
    );
}