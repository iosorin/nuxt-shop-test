import Vuex from 'vuex';

import cart from './modules/cart';
import products from './modules/products';

const store = () => {
    return new Vuex.Store({
        modules: {
            cart,
            products
        },
        actions: {
            async nuxtServerInit({ dispatch }) {
                await dispatch('cart/get');
                await dispatch('products/get');
            }
        }
    });
};

export default store;
