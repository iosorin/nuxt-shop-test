<template>
    <div class="app">
        <transition name="loader">
            <Loader v-if="loader" />
        </transition>
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
    },
    data () {
        return {
            loader: true
        };
    },
    mounted () {
        this.loader = false;
    }
};
</script>
