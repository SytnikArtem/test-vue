<template>
  <div id="app" class="app"
       :class="['page-' + $route.name,
                {closemenu: this.$store.state.openMenu},
                {closesocial: this.$store.state.openSocial}]"
  >
    <Menu/>
    <main class="main">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </main>
    <Social/>
  </div>
</template>
<script>
  import Menu from '@/components/Menu.vue'
  import Social from '@/components/Social.vue'
  export default {
    components: {
      Menu, Social
    }
  }
</script>

<style lang="scss">
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
@import 'assets/scss/default';
@import 'assets/scss/main';
@import 'assets/scss/menu';
@import 'assets/scss/social';
@import 'assets/scss/pages';
</style>
