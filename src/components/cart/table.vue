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
                <tr>
                    <td class="cart-table__item">
                        <nuxt-link to="details/:1">
                            <img src="img/1.jpg" alt="">
                            <h5>Vegetable’s Package</h5>
                        </nuxt-link>
                    </td>
                    <td class="cart-table__price">
                        $55.00
                    </td>
                    <td class="cart-table__quantity">
                        <div class="quantity">
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </div>
                    </td>
                    <td class="cart-table__date">
                        {{ date }}
                    </td>
                    <td class="cart-table__total">
                        $110.00
                    </td>
                    <td class="cart-table__delete">
                        <span class="delete-icon" />
                    </td>
                </tr>
                <tr>
                    <td class="cart-table__item">
                        <nuxt-link to="details/:2">
                            <img src="img/2.jpg" alt="">
                            <h5>Vegetable’s Package</h5>
                        </nuxt-link>
                    </td>
                    <td class="cart-table__price">
                        $55.00
                    </td>
                    <td class="cart-table__quantity">
                        <div class="quantity">
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </div>
                    </td>
                    <td class="cart-table__date">
                        {{ date }}
                    </td>
                    <td class="cart-table__total">
                        $110.00
                    </td>
                    <td class="cart-table__delete">
                        <span class="delete-icon" />
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="cart-table__pagination">
            <Pagination />
        </div>
    </div>
</template>

<script>
import Pagination from '@/components/ui/pagination';
export default {
    components: { Pagination },
    data () {
        return {
            date: '',
            priceUp: true,
            totalPriceUp: true,
            dateUp: true

        };
    },
    mounted () {
        this.date = this.getTime();
    },
    methods: {
        getTime () {
            const copyTms = 1593650184506;
            const currentTms = Date.now();

            if (copyTms) {
                const { hours, minutes, seconds } = this.$utils.calcDate(currentTms, copyTms);

                if (hours) {
                    return `${hours} h.`;
                }

                if (minutes) {
                    return `${minutes} m.`;
                }

                return `${seconds} s.`;
            }
        }
    }
};
</script>

<style src="@scss/components/cart/table" lang="scss" scoped></style>
