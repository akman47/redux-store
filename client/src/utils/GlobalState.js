import React, { createContext, useContext } from 'react';
import { useProductReducer } from './reducers';

// create container to hold global state data and functionality
const StoreContext = createContext();
const { Provider } = StoreContext; // make state data passed as prop available to all components

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