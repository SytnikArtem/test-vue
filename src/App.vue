<template>
  <div id="app" class="app"
       :class="['page-' + $route.name,
                {closemenu: !this.$store.state.openMenu},
                {closesocial: !this.$store.state.openSocial}]"
  >
    <Menu/>
    <main class="main" v-bind:style="{ backgroundColor: $route.bgColor }">
      <transition name="fade" mode="out-in">
        <router-view/>
<!--        <vue-custom-scrollbar class="scroll-area">-->

<!--        </vue-custom-scrollbar>-->
      </transition>
    </main>
    <Social/>
  </div>
</template>
<script>
  import Menu from '@/components/Menu.vue'
  import Social from '@/components/Social.vue'
  import vueCustomScrollbar from 'vue-custom-scrollbar'
  export default {
    data() {
      return {
        bgColor: this.$route.bgColor
      }
    },
    components: {
      Menu, Social, vueCustomScrollbar
    },
    mounted() {
      console.log(this.$route.params.color)
    }
  }
</script>

<style lang="scss">
.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
@import 'assets/scss/fonts';
@import 'assets/scss/default';
@import 'assets/scss/main';
@import 'assets/scss/menu';
@import 'assets/scss/social';
@import 'assets/scss/pages';
</style>
