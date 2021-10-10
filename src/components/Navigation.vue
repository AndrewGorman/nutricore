<template>
    <div class="navigation-container">
        <router-link
            to="/"
            class="brand-font logo-link"
        >
            NutriCore
        </router-link>
        <div class="mobile-menu-toggle">
            Menu
        </div>
        <div class="nav-links-container">
            <router-link
                to="/"
                class="nav-item"
            >
                <font-awesome-icon
                    size="1x"
                    :icon="['fas', 'house']"
                />
                Home
            </router-link>
            <router-link
                to="/about"
                class="nav-item"
            >
                <font-awesome-icon
                    size="1x"
                    :icon="['fas', 'list-ul']"
                />
                About
            </router-link>
            <router-link
                to="/counseling"
                class="nav-item"
            >
                <font-awesome-icon
                    size="1x"
                    :icon="['fas', 'list-ul']"
                />
                Counseling
            </router-link>
        </div>
    </div>
<!--    <b-collapse-->
<!--        id="mobileNavDrawer"-->
<!--    >-->
<!--        <div-->
<!--            class="mobile-nav-drawer"-->
<!--        >-->
<!--            <router-link-->
<!--                to="/"-->
<!--                class="mobile-nav-item"-->
<!--                @click="collapseNav"-->
<!--            >-->
<!--                <font-awesome-icon-->
<!--                    size="1x"-->
<!--                    :icon="['fas', 'house']"-->
<!--                />-->
<!--                Home-->
<!--            </router-link>-->
<!--            <router-link-->
<!--                to="/products"-->
<!--                class="mobile-nav-item"-->
<!--                @click="collapseNav"-->
<!--            >-->
<!--                <font-awesome-icon-->
<!--                    size="1x"-->
<!--                    :icon="['fas', 'list-ul']"-->
<!--                />-->
<!--                Products-->
<!--            </router-link>-->
<!--            <router-link-->
<!--                to="/news"-->
<!--                class="mobile-nav-item"-->
<!--                @click="collapseNav"-->
<!--            >-->
<!--                <font-awesome-icon-->
<!--                    size="1x"-->
<!--                    :icon="['fas', 'newspaper']"-->
<!--                />-->
<!--                News-->
<!--            </router-link>-->
<!--            <router-link-->
<!--                to="/recipes"-->
<!--                class="mobile-nav-item"-->
<!--                @click="collapseNav"-->
<!--            >-->
<!--                <font-awesome-icon-->
<!--                    size="1x"-->
<!--                    :icon="['fas', 'hat-chef']"-->
<!--                />-->
<!--                Recipes-->
<!--            </router-link>-->
<!--            <router-link-->
<!--                to="/cart"-->
<!--                class="mobile-nav-item"-->
<!--                @click="collapseNav"-->
<!--            >-->
<!--                <font-awesome-icon-->
<!--                    size="1x"-->
<!--                    :icon="['fas', 'shopping-cart']"-->
<!--                />-->
<!--                Cart-->
<!--            </router-link>-->
<!--        </div>-->
<!--    </b-collapse>-->
</template>

<script>


    export default {
        name: 'Navigation',
        components: {
        },
        methods: {
            collapseNav() {
                document.getElementById("toggleNavDrawer").click();
            },
        },
    };
</script>
<style
    lang="sass"
>
    @import "../sass/main.sass"

    .navigation-container
        display: flex
        flex-direction: row
        margin: 0
        max-width: 100vw
        height: $headerHeight
        justify-content: space-between
        align-items: center
        padding: 1rem 2rem
        border-bottom: 1px solid $lightBrown
        background-color: whitesmoke

        .logo-link
            font-size: 2rem
            color: $green
            text-decoration: none
            transition: color 250ms ease-out

            &:visited, :active
                color: $green
                text-decoration: none

            &:hover
                color: $lightBrown

        .nav-links-container
            display: flex
            flex-direction: row
            justify-content: space-between
            align-items: center

            .nav-item
                font-size: 1.2rem
                padding: 0 0.75rem
                text-decoration: none
                color: $green
                display: flex
                flex-direction: row
                justify-content: center
                align-items: center

                &.router-link-exact-active
                    font-weight: 600
                    color: darken($green, 20%)

                    svg
                        margin-right: 0.5rem
                        width: 1rem

                &:hover
                    color: darken($green, 10%)

                    svg
                        margin-right: 0.5rem
                        width: 1rem

                svg
                    transition: width 0.15s
                    width: 0

    .mobile-menu-toggle
        display: none
        position: static
        top: 1.5rem
        right: 1rem
        width: fit-content
        float: right
        color: $green

        .hamburger
            margin-bottom: 0.5rem

    #mobileNavDrawer
        display: none
        position: absolute
        top: $headerHeight
        z-index: 1000
        width: 100vw
        background-color: $green
        color: $white

        .mobile-nav-drawer
            border: none
            height: calc(100vh - #{$headerHeight})
            padding: 2rem
            display: flex
            flex-direction: column
            justify-content: space-evenly
            align-items: center
            width: fit-content
            margin: auto

            .mobile-nav-item
                color: $white
                text-decoration: none
                font-size: 2.5rem
                width: 100%
                justify-content: space-between

                svg
                    max-width: 40px
                    max-height: 40px
                    margin-right: 1rem

    @media (max-width: $phoneWidthBreakpoint)
        .nav-links-container
            display: none !important

        .mobile-menu-toggle
            display: flex !important
            flex-direction: column
            align-items: center
            justify-content: center

        #mobileNavDrawer
            display: block

</style>
