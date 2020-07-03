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

            <div v-if="!productInUse(product.id)" class="product-details__quantity">
                <div class="quantity">
                    <span @click="quantity--">-</span>
                    <span>{{ quantity }}</span>
                    <span @click="quantity++">+</span>
                </div>
            </div>

            <span v-if="!productInUse(product.id)" class="button dark inline add-to-cart" @click="addProduct">ADD TO CARD</span>
        </div>
    </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    props: ['product'],
    data() {
        return {
            quantity: 1
        };
    },
    computed: {
        ...mapGetters({
            productInUse: 'products/productInUse'
        })
    },
    methods: {
        async addProduct(e) {
            e.preventDefault();

            const product = {
                ...this.product,
                quantity: this.quantity,
                productID: this.product.id
            };

            delete product.id;
            await this.$store.dispatch('cart/add', product);
        }
    }
};
</script>

<style src="@scss/components/product/details" lang="scss" scoped></style>
