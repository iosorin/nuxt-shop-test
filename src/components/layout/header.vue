<template>
    <header class="header">
        <div class="container">
            <div class="row d-flex align-center">
                <div class="col-6">
                    <nuxt-link to="/" class="header__logo link">
                        NUXT SHOP
                    </nuxt-link>
                </div>
                <div class="col-6 text-right">
                    <nuxt-link to="/cart" class="header__link link">
                        CART <span v-if="cartCount > 0">( {{ cartCount }} )</span>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            cartCount: 'cart/count'
        })
    }
};
</script>

<style src="@scss/components/layout/header" lang="scss" scoped></style>
