<template>
    <div class="cart-table">
        <table>
            <thead>
                <tr>
                    <th class="text-left">
                        Products
                    </th>
                    <th :class="[{ 'cart-table__filter': true }, priceUp ? 'up' : '']"
                        @click="priceUp = !priceUp"
                    >
                        Price
                    </th>
                    <th>Quantity</th>
                    <th :class="[{ 'cart-table__filter': true }, dateUp ? 'up' : '']"
                        @click="dateUp = !dateUp"
                    >
                        Was Added
                    </th>
                    <th :class="[{ 'cart-table__filter': true }, totalPriceUp ? 'up' : '']"
                        @click="totalPriceUp = !totalPriceUp"
                    >
                        Total
                    </th>
                    <th />
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in products" :key="item.id">
                    <td class="cart-table__item">
                        <nuxt-link :to="'details/' + item.id">
                            <img :src="item.img" :alt="item.title">
                            <h5>{{ item.title }}</h5>
                        </nuxt-link>
                    </td>
                    <td class="cart-table__price">
                        {{ item.price }}
                    </td>
                    <td class="cart-table__quantity">
                        <div class="quantity">
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </div>
                    </td>
                    <td class="cart-table__date">
                        {{ $utils.getElapsedTime(item.date) }}
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
            needPagination: false

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
            this.updateProductList(newValue);
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
        }
    }
};
</script>

<style src="@scss/components/cart/table" lang="scss" scoped></style>
