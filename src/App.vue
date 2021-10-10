<template>
    <Navigation />
    <RouterView />
</template>

<script>
    import Navigation from "@/components/Navigation.vue";

    export default {
        name: 'App',
        components: {
            Navigation
        }
    };
</script>

<style lang="sass">
    @import "@/sass/main.sass"

</style>
