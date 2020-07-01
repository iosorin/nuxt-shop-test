<template>
    <div class="product-card">
        <div class="product-card__inner">
            <div class="product-card__preview" :style="{ backgroundImage: `url(${bg})` }" />
            <div class="product-card__info">
                <div class="product-card__text">
                    <span class="product-card__title">
                        Product Title
                    </span>
                    <span class="product-card__price">
                        $35.99
                    </span>
                </div>
                <div class="product-card__actions">
                    <span class="add-to-cart">
                        🖤
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            bg: 'img/2.jpg'
        };
    }
};
</script>

<style src="@scss/components/product/card" lang="scss" scoped></style>
