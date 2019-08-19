<template>
  <div id="app" class="app"
       :class="['page-' + $route.name,
                {closemenu: !this.$store.state.openMenu},
                {closesocial: !this.$store.state.openSocial}]"
  >
    <div :class="[ 'g-cursor', { 'g-cursor_hover': hover }, {'g-cursor_hide': hideCursor} ]">
      <div :style="`transform: translateX(${xParent}px) translateY(${yParent}px) translateZ(0) translate3d(0, 0, 0);`"
           class="g-cursor__circle"
      ></div>
      <div
          class="g-cursor__point"
          ref="point"
          :style="`transform: translateX(${xChild - 3}px) translateY(${yChild - 3}px) translateZ(0) translate3d(0, 0, 0);`"
      ></div>
    </div>
    <Menu/>
    <main class="main">
      <vue-custom-scrollbar class="scroll-area">
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
      </vue-custom-scrollbar>
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
        xChild: 0,
        yChild: 0,
        xParent: 0,
        yParent: 0,
        hover: false,
        hideCursor: true,
        cursorX: 0,
        cursorY: 0
      }
    },
    components: {
      Menu, Social, vueCustomScrollbar
    },
    mounted() {
      const moveCursor = e => {
        this.hideCursor = false;
        this.xChild = e.clientX ? e.clientX : e.touches[0].clientX;
        this.yChild = e.clientY ? e.clientY : e.touches[0].clientY;
        setTimeout(() => {
          this.xParent =
                  e.clientX - 15 ? e.clientX - 15 : e.touches[0].clientX - 15;
          this.yParent =
                  e.clientY - 15 ? e.clientY - 15 : e.touches[0].clientY - 15;
        }, 100);
      };
      window.addEventListener("mousemove", moveCursor);
      window.addEventListener("touchmove", moveCursor);
      window.addEventListener("touchstart", () => {
        this.hideCursor = false;
      });
      window.addEventListener("touchend", () => {
        this.hideCursor = true;
      });
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
.g-cursor {
  transition: width .6s ease,
  height .6s ease,
  opacity .6s ease;

  &_hide {
    opacity: 0;
    width: 60px;
    height: 60px;
    transition: width .6s ease,
    height .6s ease,
    opacity .6s ease;
  }

  &__circle {
    pointer-events: none;
    user-select: none;
    top: 0;
    left: 0;
    position: fixed;
    width: 30px;
    height: 30px;
    border: 2px solid #ffd700;
    border-radius: 100%;
    z-index: 99;
    backface-visibility: hidden;
    transition: opacity .6s ease;
  }

  &__point {
    top: 0;
    left: 0;
    position: fixed;
    width: 10px;
    height: 10px;
    pointer-events: none;
    user-select: none;
    border-radius: 100%;
    background: #ffd700;
    z-index: 100;
    backface-visibility: hidden;
    will-change: transform;
  }

  &_hover {
    .g-cursor__circle {
      opacity: 0;
      width: 60px;
      height: 60px;
      transition: width .6s ease,
      height .6s ease,
      opacity .6s ease;
    }
  }
}
@import 'assets/scss/fonts';
@import 'assets/scss/default';
@import 'assets/scss/main';
@import 'assets/scss/menu';
@import 'assets/scss/social';
@import 'assets/scss/pages';
</style>
