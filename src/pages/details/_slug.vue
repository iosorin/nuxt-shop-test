<template>
    <section class="section product-details-page">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <ProductDetails />
                </div>
            </div>
            <div class="row">
                <div class="col-12" />
            </div>
        </div>
    </section>
</template>

<script>
import ProductDetails from '@/components/product/details';
export default {
    components: {
        ProductDetails
    }
};
</script>
