<template>
  <div class='reg'>
    <header>
        <a href="javascript:window.history.go(-1)">&lt;</a>
        <span>注册</span>
    </header>
    <div class="header"></div>

    <div id="register">
        <form>
            <label>手机号：</label>
            <input type="text" class="txt" v-model="username"/>
            <label>密码：</label>
            <input type="password" class="pw" v-model="password"/>
            <label> 昵称：</label>
            <input type="text" class="txt1" v-model="nikename"/>
            <label> 上传头像：</label>
            <input type="file" enctyoe="multipart/form-data" name="icon" id="file"/>
            <p>{{mess}}</p>
            <router-link to="/reg" tag="li">
            <input type='button' value="注册" class="reg-reg" @click='reg'/>
            </router-link>
            <router-link to="/login" tag="li">
            <input type='button' value="已经有账号了？请登录" class="reg-login"/>
            </router-link>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      username:'',
      password:'',
      nikename:'',
      mess:''
    }
  },
  methods:{
    reg(){
      let inputfile=document.getElementById('file')
      let formData = new FormData()
      formData.append('username',this.username)
      formData.append('password',this.password)
      formData.append('nikename',this.nikename)
      formData.append('icon',inputfile.files[0])
      axios({
        url:'http://localhost:3000/api/reg',
        method:'post',
        data:formData
      }).then(
        res=>{
          if(res.data.err==1){
            this.mess=res.data.msg
          }else{
            // console.log(res.data)
            this.$router.push('/login')
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
  #register form #file{border:none;}
  #register form .reg-reg{background:#333;}
  #register form .reg-login{}
</style>