<template>
    <div class="product-details">
        <div class="product-details__image" :style="{ backgroundImage: `url(${ product.img })` }" />
        <div class="product-details__info">
            <h3>{{ product.name }}</h3>

            <div class="product-details__price">
                PRICE: {{ product.price }}
            </div>

            <div class="product-details__description">
                {{ product.description }}
            </div>

            <div class="product-details__quantity">
                <div class="quantity">
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                </div>
            </div>

            <span class="button dark inline add-to-cart">ADD TO CARD</span>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    props: ['product']
};
</script>

<style src="@scss/components/product/details" lang="scss" scoped></style>
