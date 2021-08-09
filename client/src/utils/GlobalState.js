import React, { createContext, useContext } from 'react';
import { useProductReducer, reducer } from './reducers';

// create container to hold global state data and functionality
const StoreContext = createContext();
const { Provider } = StoreContext; // make state data passed as prop available to all components

// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// create redux store to hold state
// export const store = createStore(useProductReducer({
//     products: [],
//     cart: [],
//     cartOpen: false,
//     categories: [],
//     currentCategory: ''
//     })
// );

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: ''
    });

    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
}

export { StoreProvider, useStoreContext };