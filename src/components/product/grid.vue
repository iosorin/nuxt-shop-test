<template>
    <div class="product-grid" :class="size ? `size-${size}` : ''">
        <div v-if="suggestions" class="product-grid__header">
            <h3 v-if="suggestions">
                Products you may like:
            </h3>
            <span class="button">🔄</span>
        </div>

        <div class="product-grid__content">
            <nuxt-link
                v-for="i in size"
                :key="i"
                class="product-grid__item"
                to="#"
            >
                <ProductCard />
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import ProductCard from './card';
export default {
    components: { ProductCard },
    props: {
        size: {
            type: Number,
            default: 3
        },
        suggestions: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style src="@scss/components/product/grid" lang="scss" scoped></style>
