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
                    <ProductGrid />
                </div>
            </div>
        </div>
        <Loader />
    </section>
</template>

<script>
import ProductGrid from '@/components/product/grid';
import Loader from '@/components/ui/loader';
export default {
    components: {
        ProductGrid,
        Loader
    }
};
</script>
