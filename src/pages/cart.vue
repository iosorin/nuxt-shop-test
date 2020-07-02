<template>
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <CartTable />
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <ProductGrid :suggestions="true" :size="4" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CartTable from '@/components/cart/table';

export default {
    components: { CartTable }
};

</script>
