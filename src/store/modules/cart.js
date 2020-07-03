class CartProduct {
    constructor({ id, quantity, total, date }) {
        this.id = id;
        this.quantity = quantity;
        this.total = total;
        this.date = date;
    }
}

/* eslint-disable no-console */
export default {
    namespaced: true,

    state: {
        total: null,
        list: []
    },

    mutations: {
        GET(state, { total, products }) {
            state.total = total;
            state.list = products;
        }
    },

    actions: {
        async get({ commit }) {
            const value = await this.$cart.once('value');
            const data = value.val();

            if (data) {
                const { total, products: productsData } = data;
                const products = [];

                Object.keys(productsData).forEach((key) => {
                    const product = new CartProduct(productsData[key]);
                    products.push(product);
                });

                commit('GET', { total, products });
            }
        }
    },

    getters: {
        list: state => state.list,
        total: state => state.total
    }
};
