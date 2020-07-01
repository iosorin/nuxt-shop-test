<template>
    <div class="app">
        <Header />
        <Nuxt />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default {
    components: {
        Header,
        Footer
    }
};
</script>
