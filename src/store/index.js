import Vuex from 'vuex';

import products from './modules/products';

let store;

const initStore = () => {
    return store || (store = new Vuex.Store({
        modules: {
            products
        }
    }));
};

export default initStore;
