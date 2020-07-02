<template>
    <section class="section product-grid-page">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section__title">
                        <h2>Featured Products</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <ProductGrid :products="products" :cols="3" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            products: 'products/list'
        })
    }
};
</script>
