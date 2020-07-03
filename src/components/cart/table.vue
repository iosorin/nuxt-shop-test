<template>
    <div class="cart-table">
        <table>
            <thead>
                <tr>
                    <th class="text-left">
                        Products
                    </th>
                    <th :class="[{ 'cart-table__filter': true }, priceUp ? 'up' : '']"
                        @click="sortTable('price', 'priceUp')"
                    >
                        Price
                    </th>
                    <th>Quantity</th>
                    <th :class="[{ 'cart-table__filter': true }, dateUp ? 'up' : '']"
                        @click="sortTable('date', 'dateUp')"
                    >
                        Created
                    </th>
                    <th :class="[{ 'cart-table__filter': true }, totalPriceUp ? 'up' : '']"
                        @click="sortTable('total', 'totalPriceUp')"
                    >
                        Total
                    </th>
                    <th />
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in products" :key="item.id">
                    <td class="cart-table__item">
                        <nuxt-link :to="'details/' + item.productID">
                            <img :src="item.img" :alt="item.title">
                            <h5>{{ item.title }}</h5>
                        </nuxt-link>
                    </td>
                    <td class="cart-table__price">
                        {{ item.price }}
                    </td>
                    <td class="cart-table__quantity">
                        <div class="quantity">
                            <span @click="updateQuantity(item.id, item.quantity - 1)">-</span>
                            <span>{{ item.quantity }}</span>
                            <span @click="updateQuantity(item.id, item.quantity + 1)">+</span>
                        </div>
                    </td>
                    <td class="cart-table__date">
                        {{ $utils.getElapsedTime(item.date) }} ago
                    </td>
                    <td class="cart-table__total">
                        ${{ item.total }}
                    </td>
                    <td class="cart-table__delete">
                        <span class="delete-icon icon-button" @click="removeProduct(item)" />
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="cart-table__footer">
            <span>Total: ${{ cartAmount }}</span>

            <Pagination
                v-if="needPagination"
                :total-pages="totalPages"
                :current-page="currentPage"
                @change="getCurrentPageList"
            />
        </div>

        <div class="button" :class="{ dark: showAll }" @click="togglePagination">
            {{ showAll ? 'Hide': 'Show All' }}
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: {
        list: {
            default: []
        },
        perPage: {
            default: 2
        }
    },
    data() {
        return {
            dateUp: true,
            priceUp: true,
            totalPriceUp: true,
            currentPage: 1,
            products: [],
            needPagination: false,
            showAll: false

        };
    },
    computed: {
        ...mapGetters({
            cartAmount: 'cart/amount'
        }),
        totalPages() {
            return Math.ceil(this.list.length / this.perPage);
        }
    },
    watch: {
        list(newValue, oldValue) {
            if (newValue.length !== oldValue.length) {
                this.updateProductList(newValue);
            }
        }
    },
    mounted() {
        this.products = [...this.list];
        this.updateProductList(this.products);
    },
    methods: {
        updateProductList(list) {
            this.needPagination = list.length > this.perPage;

            if (this.needPagination) {
                this.getCurrentPageList(this.currentPage);
            }
            else {
                this.products = this.list;
            }
        },

        getCurrentPageList(page) {
            this.currentPage = page;
            this.products = this.list.slice((page - 1) * this.perPage, page * this.perPage);
        },

        async removeProduct(item) {
            await this.$store.dispatch('cart/remove', item);

            if (this.currentPage > 1) {
                this.updateProductList(1);
            }
        },

        async updateQuantity(id, quantity = 1) {
            if (quantity < 1) {
                quantity = 1;
            }

            await this.$store.dispatch('cart/updateQuantity', { id, quantity });
        },

        togglePagination() {
            console.log('togglePagination');
            this.products = this.list;
            this.showAll = !this.showAll;
            this.needPagination = !this.showAll;

            if (this.needPagination) {
                this.getCurrentPageList(this.currentPage);
            }
        },

        sortTable(sortKey, stateKey) {
            this[stateKey] = !this[stateKey];

            this.products = this.products.sort((a, b) => {
                let prop1 = a[sortKey];
                let prop2 = b[sortKey];

                if (sortKey === 'price') {
                    prop1 = (prop1.split('$')[1]);
                    prop2 = (prop2.split('$')[1]);
                }

                if (this[stateKey]) {
                    return prop1 > prop2 ? 1 : -1;
                }

                return prop1 > prop2 ? -1 : 1;
            });
        }
    }
};
</script>

<style src="@scss/components/cart/table" lang="scss" scoped></style>
