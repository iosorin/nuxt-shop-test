<template>
    <header class="header">
        <div class="container">
            <div class="row d-flex align-center">
                <div class="col-6">
                    <nuxt-link to="/" class="header__logo link">
                        Nuxt Shop
                    </nuxt-link>
                </div>
                <div class="col-6 text-right">
                    <nuxt-link to="/cart" class="header__link link">
                        CART
                    </nuxt-link>
                </div>
            </div>
        </div>
    </header>
</template>

<style src="@scss/components/layout/header" lang="scss" scoped></style>
