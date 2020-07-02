<template>
    <section class="section product-details-page">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <ProductDetails />
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <ProductGrid :suggestions="true" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ProductGrid from '@/components/product/grid';
import ProductDetails from '@/components/product/details';
export default {
    components: {
        ProductGrid,
        ProductDetails
    }
};
</script>
