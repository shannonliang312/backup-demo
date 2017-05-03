<template>
  <div class="topbar-box">
    <div class="inspur">
      <img src="../../../assets/img/inspur_wh.png" alt="">
    </div>
    <div class="menu-toggle" @click="toggleMenu">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
    <from class="searchForm">
      <input type="text" class="searchbox" placeholder="Search">
      <span class="searchButton">
        <i class="fa fa-search" aria-hidden="true"></i>
      </span>
    </from>
    <div class="dropdown">
      <div class="dropdown-title">
        <i class="fa fa-user" aria-hidden="true"></i>
        <span style="margin-left: 3px;">管理员</span>
      </div>
      <ul class="dropdown-menu">
        <li><router-link to="/admin-panel"><i class="fa fa-info-circle" aria-hidden="true"></i>账户信息</router-link></li>
        <li><i class="fa fa-sign-out" aria-hidden="true"></i>退出</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "top-bar-2",
    data() {
      return {
        isCollapsed: false
      }
    },
    methods: {
      toggleMenu() {
        this.isCollapsed = !this.isCollapsed;
        this.$emit("toggle", {toggleState: this.isCollapsed});
      }
    }
  }
</script>

<style scoped>
  .topbar-box {
    height: 60px;
    background-color: #22313a;
    /*background: #24C6DC;  
    background: -webkit-linear-gradient(to right, #514A9D, #24C6DC);  
    background: linear-gradient(to right, #514A9D, #24C6DC); */

    width: 100%;
    position: fixed;
    z-index: 9990;
    top:0;
    /*box-shadow: 0 1px 15px grey;*/
    border-bottom:  1px solid #242625;
  }

  .inspur {
    width: 220px;
    padding: 15px 0 0 20px;
    float: left;
    border-right: 1px solid grey;
  }

  .menu-toggle {
    height: 41px;
    font-size: 22px;
    display: block;
    width: 62px;
    text-align: center;
    float: left;
    color: white;
    padding-top: 19px;
    border-right: 1px solid rgba(0, 0, 0, 0.14);
    z-index: 1;
  }

  .menu-toggle:hover {
    cursor: pointer;
    background-color: #24C6DC;
  }

  .searchForm {
    width: 220px;
    margin: 0 20px;
    float: left;
    padding-top: 14px;
    position: relative;
  }

  .searchbox {
    border-radius: 999px;
    border: none;
    height: 32px;
    width: 160px;
    padding-left: 20px;
    padding-right: 36px;
    background: rgba(255, 255, 255, 0.95);
    color: #37363e;
  }

  .searchButton {
    border: none;
    color: rgba(0, 0, 0, 0.5);
    background: none;
    position: absolute;
    top: 21px;
    font-size: 16px;
    right: 15px;
  }

  .dropdown {
    position: relative;
    float: right;
    padding-top: 19px;
    padding-bottom: 15px;
    margin-right: 50px;
  }

  .dropdown:hover {
    border-bottom: 5px solid #274046;
  }

  .dropdown:hover > .dropdown-title {
    color: #274046;
    cursor: pointer;
  }

  .dropdown:hover > .dropdown-menu {
    display: block;
  }

  .dropdown-title {
    color: white;
  }

  .dropdown-menu {
    position: absolute;
    top: 60px;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    width: 100px;
    padding: 0 0;
    /*margin: 2px 0 0;*/
    font-size: 14px;
    text-align: left;
    list-style: none;
    background-color: #eef1f6;
    border: 1px solid #ccc;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: 4px;
    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
    box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
  }

  .dropdown-menu li {
    padding: 10px;
  }

  .dropdown-menu li:hover {
    background: #D3DCE6;
    cursor: pointer;
  }

  .dropdown-menu li i {
    margin-right: 5px;
  }
</style>