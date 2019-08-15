<template>
    <div class="menu">
        <nav class="menu-nav">
            <router-link
                v-for="link in links"
                :key="link.url"
                :to="link.url"
                :exact="link.exact"
                class="menu-link"
                active-class="active"
            >{{link.title}}</router-link>
        </nav>
        <a href="" @click.prevent="hideMenu" class="menu-show"></a>
    </div>

</template>

<script>
    export default {
        name: "Menu",
        data() {
            return {
                links: [
                    {title: 'Home', url: '/', exact: true},
                    {title: 'About', url: '/about'},
                    {title: 'Portfolio', url: '/portfolio'},
                    {title: 'Contacts', url: '/contact'}
                ]
            }
        },
        methods: {
            hideMenu() {
                return this.$store.dispatch('hideMenu', !this.$store.state.openMenu);
            }
        }
    }
</script>

<style scoped>

</style>
