<template>
  <div id="app-main">
    <!--<top-bar></top-bar>-->
    <transition 
        appear
        name="custom-classes-transition"
        enter-active-class="animated fadeIn"      
      >
      <top-bar-2 @toggle="getToggleState"></top-bar-2>
    </transition>
    <transition 
        appear
        name="custom-classes-transition"
        enter-active-class="animated fadeIn"      
      >
      <side-bar :isCollapsed="collapseState"></side-bar>
    </transition>
    <div :style="containerClass">
      <transition 
        appear
        name="custom-classes-transition"
        enter-active-class="animated fadeIn"      
      >
      <router-view></router-view>
    </transition>
      <!--<router-view></router-view>-->      
    </div>
    
  </div>
</template>

<script>
  import TopBar from '@/components/utils/navbar/top-bar.vue'
  import TopBar2 from '@/components/utils/navbar/top-bar-2.vue'
  import SideBar from '@/components/utils/navbar/side-bar.vue'

export default {
  name: 'layout',
  data() {
    return {
      collapseState: true
    }
  },
  computed: {
    containerClass: function() {
      return {
        "height": "100%",
        "padding-top": "70px",
        "padding-right": "1%",
        "padding-left": this.collapseState?"6%": "260px",
        "padding-bottom": "30px",
        "transition": "padding-left 100ms" ,
        "transition-delay": "100ms",
        // "background": "#f5f5f5"
      }
    }
  },
  methods: {
    getToggleState(value) {
      this.collapseState = value.toggleState;
      console.log(value);
    }
  },
  components: {
    TopBar,
    TopBar2,
    SideBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

  .router-container {
    padding-top: 70px;
    padding-left: 16%;
  }
</style>
