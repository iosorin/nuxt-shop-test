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
        GET(state, payload) {
            state.list = payload;
        }
    },

    actions: {
        async get({ commit }) {
            const value = await this.$products.once('value');
            const data = value.val();

            if (data) {
                const products = [];

                Object.keys(data).forEach((key) => {
                    const product = new Product(data[key]);
                    products.push(product);
                });

                commit('GET', products);
            }
        }
    },

    getters: {
        list: state => state.list
    }
};
