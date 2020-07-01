<template>
    <header class="header">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="header__logo">
                        <span>Nuxt Shop</span>
                    </div>
                </div>
                <div class="col-6">
                    <div class="header__link">
                        <n-link to="/cart">
                            Cart
                        </n-link>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style src="@scss/components/header" lang="scss" scoped></style>
