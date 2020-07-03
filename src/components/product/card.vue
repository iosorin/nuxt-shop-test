<template>
    <div class="product-card" :class="{ small: small }">
        <div class="product-card__inner">
            <div class="product-card__preview" :style="{ backgroundImage: `url(${ product.img })` }" />
            <div class="product-card__info">
                <div class="product-card__text">
                    <span class="product-card__title" :class="{ 'text-overflow': !small }">
                        {{ product.title }}
                    </span>
                    <span class="product-card__price">
                        {{ product.price }}
                    </span>
                </div>
                <div class="product-card__action">
                    <span @click="addProduct">
                        +
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product', 'small'],
    methods: {
        async addProduct(e) {
            e.preventDefault();

            const product = { ...this.product, productID: this.product.id };
            delete product.id;
            await this.$store.dispatch('cart/add', product);
        }
    }
};
</script>

<style src="@scss/components/product/card" lang="scss" scoped></style>
