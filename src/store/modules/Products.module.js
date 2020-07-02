/* eslint-disable no-console */
export default {
    namespaced: true,

    state: {
        products: []
    },

    mutations: {
    },

    actions: {
        async init () {
            console.log('products init');
            const product = await this.$products.once('value');
            const products = product.val();
            console.log('products', products);
        }
    },

    getters: {
        products: state => state.products
    }
};
