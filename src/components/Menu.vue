<template>
    <div class="menu">
        <nav class="menu-nav">
            <router-link class="menu-link" active-class="active" exact to="/">Home</router-link>
            <router-link class="menu-link" active-class="active" exact to="/about">About</router-link>
            <router-link class="menu-link" active-class="active" exact to="/portfolio">Portfolio</router-link>
            <router-link class="menu-link" active-class="active" exact to="/contacts">Contacts</router-link>
        </nav>
        <a href="" @click.prevent="hideMenu" class="menu-show"></a>
    </div>

</template>

<script>
    export default {
        name: "Menu",
        methods: {
            hideMenu() {
                this.$store.commit('hideMenu');
            }
        }
    }
</script>

<style scoped>

</style>
