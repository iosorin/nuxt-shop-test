<template>
    <header class="header">
        <div class="container">
            <div class="row d-flex align-center">
                <div class="col-6">
                    <nuxt-link to="/" class="header__logo">
                        Nuxt Shop
                    </nuxt-link>
                </div>
                <div class="col-6">
                    <nuxt-link to="/cart" class="header__link">
                        🛒
                    </nuxt-link>
                </div>
            </div>
        </div>
    </header>
</template>

<style src="@scss/components/layout/header" lang="scss" scoped></style>
