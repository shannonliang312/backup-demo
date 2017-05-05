<template>
  <div id="login">
    <transition 
      appear
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
       >
      <div id="inspur"></div>
    </transition>
    <el-row class="content">
      <el-col id="login-form" :span="5" :offset="16">
        <el-row style="margin-bottom: 20px">
          <el-col :span="18" :offset="6">
            <div id="kux"></div>
          </el-col>
        </el-row>
        <el-form :model="formData" :rules="rules" ref="formData">
          <el-form-item prop="usr">
            <el-input placeholder="用户名" v-model="formData.usr">
              <template slot="prepend"><i class="fa fa-user" aria-hidden="true"></i></template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input placeholder="密码" v-model="formData.password" type="password" @keyup.native.enter="onSubmit('formData')">
              <template slot="prepend"><i class="fa fa-lock" aria-hidden="true"></i></template>
            </el-input>
          </el-form-item>
          <h5 v-if="authFlag" style="text-align: center;color:brown;">用户名或密码错误，请重新输入</h5>
          <el-form-item>
            <el-col :span="24">
              <el-button type="primary" style="width: 100%;" @click="onSubmit('formData')">登陆</el-button>
            </el-col>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapActions, mapMutations, mapGetters } from 'vuex'
  //import { execLogin } from '../../service/login/loginService'
  import './login.css'
  // import axios from 'axios'
 
  export default {
    name: "login",
    data() {
      return {
        authFlag: false,
        formData: {
          usr: "",
          password: ""
        },
        rules: {
          usr: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
          password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
        }
      }
    },
    computed: {
      // ...mapGetters(['getLoginState'])
    },
    created() {

    },
    methods: {
      ...mapActions(['actLogin']),
      // ...mapMutations(['setRole']),
      onSubmit(formName) { 
         this.actLogin();
         this.$router.push({ path: "/" });
        //  if(this.formData.usr == "admin") {
        //    this.setRole({role: "admin"});
        //  } else {
        //    this.setRole({role: "normal"});
        //  }
         
        //  this.$router.replace({ path: "/home" });
        // // execLogin({usr: this.formData.usr, psw: this.formData.password}).then(function(res){
        // //   console.log(res);
        // // })
        // // console.log(execLogin);
      },      
    }
  }
</script>