<template>
    <div class="product-details">
        <div class="product-details__image" :style="{ backgroundImage: `url(${bg})` }" />
        <div class="product-details__info">
            <h3>Vetgetable’s Package</h3>

            <div class="product-details__price">
                $50.00
            </div>

            <div class="product-details__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorum repudiandae asperiores nesciunt, minima alias.
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
    data () {
        return {
            bg: '/img/2.jpg'
        };
    }
};
</script>

<style src="@scss/components/product/details" lang="scss" scoped></style>
