<template>
  <div class='login'>
    <header>
        <a href="javascript:window.history.go(-1)">&lt;</a>
        <span>登录</span>
    </header>
    <div class="header"></div>

    <div id="register">
        <form>
            <label>手机号：</label>
            <input type="text" class="txt" v-model="username"/>
            <label>密码：</label>
            <input type="password" class="pw" v-model="password"/>
            <label><input type="checkbox" class="check" v-model="save"/>记住密码</label>
            <p>{{mess}}</p>
            <router-link to="/login" tag="li">
              <input type='button' value="登录" class="login-login" @click='login'/>
            </router-link>
            <router-link to="/reg" tag="li">
            <input type='button' value="注册" class="login-reg"/>
            </router-link>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  //用户名和密码实现双绑
  //当点击登录时拿着用户名和密码还有save发送axios请求，
  data(){
    return {
      username:'',
      password:'',
      save:'',
      mess:''
    }
  },
  methods:{
    login(){
      axios({
        url:'http://localhost:3000/api/login',
        data:{
          username:this.username,
          password:this.password,
          save:this.save
        },
        method:'post',
        withCredentials:true
      }).then(
        res=>{
          if(res.data.err==1){
            // console.log(res.data)
            this.mess=res.data.msg
          }else{
            this.mess=res.data.msg
            this.$router.push('/user')
          }
        }
      )
    }
  }
}
</script>



<style scoped>
    .header{height:.88rem;}
    header{height:.88rem;background:#eeeff3;position: fixed;left:0;right:0;margin:auto;display: flex;justify-content:space-around; align-items:center;}
    header a{font-size:0.66rem;flex:1;margin-left:.5rem;}
    header span{font-size:0.32rem;flex:1}
    /*主体*/
    #register form{padding:.4rem .40rem;}
    #register form input{border:0;background:none;width:6rem;border-radius:.1rem;height:.77rem;border:.01rem solid #b2b2b2;font:.24rem/.64rem "";color:#aaa;margin-top:.23rem;}
    #register form label{display: block;font:.26rem/.6rem "";}
    #register form .check{width:.5rem;height:.5rem}
    #register form .login-login{background:#333;}
    #register form span{font:.26rem/.8rem "";} 

</style>