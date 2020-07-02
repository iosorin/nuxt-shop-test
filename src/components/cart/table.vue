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
                        Time Passed
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
                <tr v-for="item in pageProducts" :key="item.id">
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
                        {{ $utils.getElapsedTime() }}
                    </td>
                    <td class="cart-table__total">
                        $110.00
                    </td>
                    <td class="cart-table__delete">
                        <span class="delete-icon icon-button" @click="removeItem" />
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="cart-table__pagination">
            <Pagination :total-pages="totalPages" :current-page="currentPage" @change="changePage" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        products: {
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
            pageProducts: []
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.products.length / this.perPage);
        }
    },
    mounted() {
        this.pageProducts = [...this.products].splice(0, this.perPage);
    },
    methods: {
        changePage(forward, page) {
            this.currentPage = page;
            this.pageProducts = [...this.products].slice((page - 1) * this.perPage, page * this.perPage);
        },
        removeItem(e) {
            console.log(e);
        }
    }
};
</script>

<style src="@scss/components/cart/table" lang="scss" scoped></style>
