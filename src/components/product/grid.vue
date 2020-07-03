<template>
    <div class="product-grid">
        <div class="product-grid__content">
            <nuxt-link
                v-for="item in products"
                :key="item.id"
                :to="'details/' + item.id"
                class="product-grid__item"
                :class="[cols ? `cols-${cols}` : '', productInUse(item.id) ? 'disabled': '']"
            >
                <ProductCard :product="item" :small="cols > 4" />
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductCard from './card';

export default {
    components: { ProductCard },
    props: {
        products: {
            default: []
        },
        cols: {
            default: 3
        }
    },
    computed: {
        ...mapGetters({
            productInUse: 'products/productInUse'
        })
    }
};
</script>

<style src="@scss/components/product/grid" lang="scss" scoped></style>
