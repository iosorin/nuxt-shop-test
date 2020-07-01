<template>
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="section__title">
                    <h2>Product Cart</h2>
                </div>
            </div>
            <div class="row">
                <CartTable />
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
