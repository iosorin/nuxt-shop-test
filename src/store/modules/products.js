/* eslint-disable no-console */
import { DB } from '@/service/firebase';

const PRODUCTS_DB = DB.ref('products');

export default {
    state: {
        products: []
    },

    mutations: {
    },

    actions: {
        async test () {
            try {
                const product = await PRODUCTS_DB.once('value');
                const products = product.val();
                console.log('products', products);
            }
            catch (error) {
                console.log(error);
            }
        }
    },

    getters: {
        products: state => state.products
    }
};
