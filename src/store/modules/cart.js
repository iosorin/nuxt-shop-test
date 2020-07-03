class CartProduct {
    constructor({ productID, price, quantity = 1, total = 0, date = Date.now() }) {
        this.productID = productID;
        this.price = price;
        this.quantity = quantity;
        this.total = total;
        this.date = date;
    }
}

/* eslint-disable no-console */
export default {
    namespaced: true,

    state: {
        products: [],
        amount: 0,
        count: 0
    },

    mutations: {
        GET(state, { products } = {}) {
            state.products = products;
        },

        ADD(state, { product } = {}) {
            state.products.push(product);
        },

        REMOVE(state, { id } = {}) {
            state.products = state.products.filter(p => p.id !== id);
        },

        SET_TOTAL(state, { amount, count } = {}) {
            state.amount = amount;
            state.count = count;
        }
    },

    actions: {
        async get({ commit }) {
            try {
                const value = await this.$cart.once('value');
                const data = value.val();

                if (data) {
                    const { products: productsData, amount = 0, count = 0 } = data;

                    const products = [];
                    Object.keys(productsData).forEach((key) => {
                        const product = new CartProduct(productsData[key]);
                        products.push(product);
                    });

                    commit('GET', { products });
                    commit('SET_TOTAL', { amount, count });
                }
            }
            catch (error) {
                console.log(error);
            }
        },

        async add({ state, commit }, payload) {
            try {
                const { productID, quantity = 1, price } = payload;
                const total = quantity * (price.split('$')[1]);
                const item = new CartProduct({ productID, price, quantity, total });

                for (let i = 0; i < quantity; i++) {
                    const data = await this.$cart.child('products').push(item);
                    const product = { ...item, id: data.key };
                    commit('ADD', { product });
                }

                // TODO: check if it is the same product
                const amount = state.amount + total;
                const count = state.count + quantity;

                await this.$cart.child('count').set(count);
                await this.$cart.child('amount').set(amount);

                commit('SET_TOTAL', { count, amount });
            }
            catch (error) {
                console.log(error);
            }
        },

        async remove({ state, commit }, payload) {
            try {
                await this.$cart.child('products').child(payload.id).remove();

                const price = payload.price.split('$')[1];
                const count = state.count - 1;
                const amount = state.amount - price;
                await this.$cart.child('count').set(count);
                await this.$cart.child('amount').set(amount);

                commit('REMOVE', { id: payload.id });
                commit('SET_TOTAL', { count, amount });
            }
            catch (error) {
                console.log(error);
            }
        }
    },

    getters: {
        count: state => state.count,
        amount: state => state.amount,
        list: state => state.products,
        merged(_, { list }, { products }) {
            return list.map((cartInstance) => {
                const productInstance = products.list.find((item) => {
                    return item.id === cartInstance.productID;
                });

                const instance = Object.assign({}, productInstance || {}, cartInstance);
                instance.id = cartInstance.id;

                return instance;
            });
        }
    }
};
