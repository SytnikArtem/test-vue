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
        <a href="" @click.prevent="hideMenu" class="menu-show menu-show_menu">
            <svg class="arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
                <g>
                    <g>
                        <path d="m64.5,122.6c32,0 58.1-26 58.1-58.1s-26-58-58.1-58-58,26-58,58 26,58.1 58,58.1zm0-108c27.5,5.32907e-15 49.9,22.4 49.9,49.9s-22.4,49.9-49.9,49.9-49.9-22.4-49.9-49.9 22.4-49.9 49.9-49.9z"/>
                        <path d="m70,93.5c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2 1.6-1.6 1.6-4.2 0-5.8l-23.5-23.5 23.5-23.5c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-26.4,26.4c-0.8,0.8-1.2,1.8-1.2,2.9s0.4,2.1 1.2,2.9l26.4,26.4z"/>
                    </g>
                </g>
            </svg>
        </a>
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
                    // {title: 'Contacts', url: '/contact'}
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
