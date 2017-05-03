<template>
  <!--<div id="app">-->
    <!--<transition 
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
  
    </div>-->
    <v-app left-fixed-sidebar>
      <v-toolbar>
        <v-toolbar-side-icon @click.native.stop="nav3 = !nav3" />
        <v-toolbar-title>Inspur</v-toolbar-title>
      </v-toolbar class="secondary">
      <main>
        <v-sidebar left fixed drawer v-model="nav3" height="100%">
          <v-list>
            <v-list-item v-for="i in 3" :key="i">
              <v-list-tile>
                <v-list-tile-title>Item {{ i }}</v-list-tile-title>
              </v-list-tile>
            </v-list-item>
          </v-list>
        </v-sidebar>
        <v-content>
          <v-container fluid>
            <div :style="containerClass">
              <transition 
                appear
                name="custom-classes-transition"
                enter-active-class="animated fadeIn"      
              >
                <router-view></router-view>
              </transition>
            </div>
          </v-container>
        </v-content>
      </main>
      <!--<v-footer>Footer</v-footer>-->
    </v-app>
    
  <!--</div>-->
</template>

<script>
  import TopBar from '@/components/utils/navbar/top-bar.vue'
  import TopBar2 from '@/components/utils/navbar/top-bar-2.vue'
  import SideBar from '@/components/utils/navbar/side-bar.vue'

export default {
  name: 'app',
  data() {
    return {
      collapseState: false,
      nav3: false
    }
  },
  computed: {
    containerClass: function() {
      return {
        "height": "100%",
        "padding-top": "70px",
        "padding-right": "50px",
        "padding-left": "50px",
        "padding-bottom": "30px",
        "transition": "padding-left 100ms" ,
        "transition-delay": "100ms",
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
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}*/

</style>
