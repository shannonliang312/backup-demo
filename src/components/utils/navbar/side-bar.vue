<template>
  <div :class="{ 'sidebar-collapsed-back': !isCollapsed, 'sidebar-collapsed': isCollapsed }">
    <div class="sidebar-menu">
      <!--<div class="logo" @click="toggleMenu">
        <div class="sidebar-icon">
          <span class="fa fa-bars"></span>
        </div>
      </div>-->
      <div class="menu">
        <ul id="menu">
          <li>
            <a href="#">
              <i class="fa fa-tachometer"></i>
              <transition name="fade">
                <div v-if="!isCollapsed">
                  <span style="position: relative;">Dashboard</span>
                </div> 
              </transition>                           
            </a>
          </li>
          <li>
            <div>
              <i class="fa fa-window-restore"></i>
              <transition name="fade">
                <div v-if="!isCollapsed">
                  <span style="position: relative;">存储管理</span>
                  <span style="float: right; position: relative;"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
                </div> 
              </transition>                           
            </div>
            <ul>              
              <router-link to="/storage-configure">网络存储设置</router-link>
              <router-link to="/storage-modification">网络存储修改</router-link>
            </ul>
          </li>
          <li>
            <div>
              <i class="fa fa-cogs"></i>
              <transition name="fade">
                <div v-if="!isCollapsed">
                  <span style="position: relative;">策略管理</span>
                  <span style="float: right; position: relative;"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
                </div>
              </transition>                            
            </div>
            <ul>
              <router-link to="/strategy-configure">制定定期备份策略</router-link>
              <router-link to="/strategy-modification">修改定期备份策略</router-link>
            </ul>
          </li>
          <li>
            <router-link to="/node-manager">
              <i class="fa fa-server"></i>
              <transition name="fade">
                <div v-if="!isCollapsed">
                  <span style="position: relative;">节点管理</span>
                </div> 
              </transition>              
            </router-link>
          </li>
          <li>
            <div>
              <i class="fa fa-recycle"></i>
              <transition name="fade">
                <div v-if="!isCollapsed">
                  <span style="position: relative;">备份/还原</span>
                  <span style="float: right; position: relative;"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
                </div>
              </transition>                            
            </div>
            <ul>
              <router-link to="/backup-manager">系统备份管理</router-link>
              <router-link to="/recovery-manager">系统还原管理</router-link>
            </ul>
          </li>
          <li>
            <router-link to="/report-manager">
              <i class="fa fa-table"></i>
              <transition name="fade">
                <div v-if="!isCollapsed">
                  <span style="position: relative;">报表管理</span>
                </div>
              </transition>                            
            </router-link>
          </li>
          <li>
            <router-link to="/log-manager">
              <i class="fa fa-file-o"></i>
              <transition name="fade">
                <div v-if="!isCollapsed">
                  <span style="position: relative;">日志管理</span>
                </div>
              </transition>                            
            </router-link>
          </li>
          <li>
            <div>
              <i class="fa fa-user-o"></i>
              <transition name="fade">
                <div v-if="!isCollapsed">
                  <span style="position: relative;">用户</span>
                  <span style="float: right; position: relative;"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
                </div>
              </transition>                            
            </div>
            <ul>
              <router-link to="/user-manager">用户管理</router-link>
              <router-link to="/group-manager">用户组管理</router-link>
              <router-link to="/permission-manager">权限管理</router-link>
            </ul>
          </li>          
        </ul>
      </div>
    </div>
  </div>  
</template>

<script>
  export default {
    name: "side-bar",
    props: {
      isCollapsed: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        // isCollapsed: false  
      }
    },
    methods: {
      toggleMenu() {
        this.isCollapsed = !this.isCollapsed;
        this.$emit("toggle", {state: this.isCollapsed});
      }
    }
  }
</script>

<style scoped>

  .sidebar-collapsed-back {
    transition: all 100ms linear;
    transition-delay: 100ms;
  }

  .sidebar-collapsed {
    transition: all 100ms linear;
    transition-delay: 100ms;
  }

  .sidebar-collapsed-back .sidebar-menu{
    width: 240px;
    /*width: 15%;*/
    transition: all 100ms ease-in-out;
    transition-delay: 100ms;
  }

  .sidebar-collapsed .sidebar-menu{
    /*width: 65px;*/
    width: 5%;
    transition: all 100ms ease-in-out;
    transition-delay: 100ms;
  }

  .sidebar-menu {
    position: fixed;
    float: left;
    height: 100%;
    top: 60px;
    left: 0px;
    /*background-color: #202121;*/
    background: #141E30;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: #aaabae;
    box-shadow: 2px 0 5px grey;
    z-index: 999;
  }

  .logo {
    position: absolute;
    top: 20px;
    left: 150px;
  }

  .sidebar-collapsed-back .logo {
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    transition: all 100ms ease-in-out;
    transition-delay: 100ms;
  }

  .sidebar-collapsed .logo {
    box-sizing: border-box;
    transition: all 100ms ease-in-out;
    transition-delay: 100ms;
    left: 29%;
  }

  .sidebar-icon {
    position: relative;
    float: left;
    text-align: center;
    line-height: 1;
    font-size: 18px;
    padding: 6px 8px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #FFF;
    background-clip: padding-box;
    background: #68AE00;
  }

  .sidebar-icon:hover {
    cursor: pointer;
    box-shadow: 0 1px 5px white;
  }

  .menu {
    padding: 1em 0 0 0;
  }

  #menu {
    list-style: none;
    margin: 0px;
    padding: 0px;
    margin-bottom: 20px;
  }

  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }

  #menu li {
    position: relative;
    margin: 0;
    font-size: 12px;
    padding: 0;
  }

  #menu ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  #menu li ul {
    position: absolute;
    visibility: hidden;
    left: 100%;
    top: 0px;
    background-color: #202121;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.1s linear;
    border-top: 1px solid rgba(69, 74, 84, 0.7);
  }

  #menu li a:hover {
    color:#24C6DC;
    transition: color 250ms ease-in-out, background-color 250ms ease-in-out;
  }

  #menu li div:hover {
    color:#24C6DC;
    transition: color 250ms ease-in-out, background-color 250ms ease-in-out;
  }

  #menu li:hover > ul {
    visibility: visible;
    opacity: 1;
  }

  #menu .fa {
    margin-bottom: 10px;
    font-size: 1.5em;
    display: block;
  }

  a {
    text-decoration: none;
    background-color: transparent;
  }

  #menu li a {
    position: relative;
    display: block;
    padding: 13px 20px;
    color: #FFFFFF;
    white-space: nowrap;
    z-index: 2;
    font-size: 1.12em;
    text-align: center;
    font-family: 'Carrois Gothic', sans-serif;
  }

  #menu li > div {
    position: relative;
    display: block;
    padding: 13px 20px;
    color: #FFFFFF;
    white-space: nowrap;
    z-index: 2;
    font-size: 1.12em;
    text-align: center;
    font-family: 'Carrois Gothic', sans-serif;
  }


  .fade-enter-active, .fade-leave-active {
    transition: opacity .1s;
    transition-delay: 100ms; 
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;    
  }
</style>