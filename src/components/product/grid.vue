<template>
    <div class="product-grid">
        <div class="product-grid__content">
            <nuxt-link class="product-grid__item" to="#">
                <ProductCard />
            </nuxt-link>
            <nuxt-link class="product-grid__item" to="#">
                <ProductCard />
            </nuxt-link>
            <nuxt-link class="product-grid__item" to="#">
                <ProductCard />
            </nuxt-link>
            <nuxt-link class="product-grid__item" to="#">
                <ProductCard />
            </nuxt-link>
            <nuxt-link class="product-grid__item" to="#">
                <ProductCard />
            </nuxt-link>
            <nuxt-link class="product-grid__item" to="#">
                <ProductCard />
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import ProductCard from './card';
export default {
    components: { ProductCard }
};
</script>

<style src="@scss/components/product/grid" lang="scss" scoped></style>
