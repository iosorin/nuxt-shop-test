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
    </section>
</template>

<script>
export default {
    mounted () {
        this.$store.dispatch('test');
    }
};
</script>
