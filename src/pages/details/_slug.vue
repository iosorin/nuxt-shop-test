<template>
    <section class="section product-details-page">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <ProductDetails :product="product" />
                </div>
            </div>
            <div class="row">
                <div class="col-12" />
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductDetails from '@/components/product/details';

export default {
    components: {
        ProductDetails
    },
    computed: {
        ...mapGetters({
            products: 'products/list'
        }),

        product() {
            // eslint-disable-next-line eqeqeq
            return this.products?.find(item => item.id == this.$route.params.slug) ?? [];
        }
    }
};
</script>
