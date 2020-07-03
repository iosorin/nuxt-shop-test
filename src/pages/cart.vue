<template>
    <section class="section cart-page">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <CartTable v-if="cartList.length" :list="cartList" per-page="2" />

                    <h2 v-else class="text-center">
                        Your shopping cart is empty
                    </h2>
                </div>
            </div>
            <div v-if="cartList.length" class="row">
                <div class="col-12">
                    <h4> Related: </h4>
                    <ProductGrid :cols="5" :products="topRated" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import CartTable from '@/components/cart/table';

export default {
    components: { CartTable },
    computed: {
        ...mapGetters({
            cartList: 'cart/merged',
            products: 'products/list'
        }),

        topRated() {
            const list = [...this.products].sort((a, b) => a.rating > b.rating);
            return list.slice(0, 5);
        }
    }
};
</script>
