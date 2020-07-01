<template>
    <section class="home section">
        <div class="container">
            <div class="row">
                <div class="section-title">
                    <h2>Featured Products</h2>
                </div>
            </div>
            <div class="row">
                <ProductGrid />
            </div>
        </div>
    </section>
</template>

<script>
import ProductGrid from '@/components/product-grid';
export default {
    components: {
        ProductGrid
    }
};
</script>
