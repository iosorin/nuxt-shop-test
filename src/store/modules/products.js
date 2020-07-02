class Product {
    constructor({ id, img, title, price, description, rating }) {
        this.id = id;
        this.img = img;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.description = description;
    }
}

/* eslint-disable no-console */
export default {
    namespaced: true,

    state: {
        list: []
    },

    mutations: {
        LOAD(state, payload) {
            state.list = payload;
        }
    },

    actions: {
        async load({ commit }) {
            const value = await this.$products.once('value');
            const products = value.val();

            if (products) {
                const productsArray = [];

                Object.keys(products).forEach((key) => {
                    const product = new Product(products[key]);
                    productsArray.push(product);
                });

                commit('LOAD', productsArray);
            }
        }
    },

    getters: {
        list: state => state.list
    }
};
