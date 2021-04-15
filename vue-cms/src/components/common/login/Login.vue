<template>
    <div class="cms-login">
        <div class="cms-login-box">
            <div class="title">欢迎登录系统</div>
            
            <div>
                <el-input v-model="username" placeholder="请输入账号"></el-input>
            </div>
            <div>
                <el-input v-model="password" placeholder="请输入密码" show-password></el-input>
            </div>
            <div>
                <el-button type="success" round @click='clickHandler'>登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data: function(){
        return {
            username: '',
            password: '',
        }
    },
    methods:{
        clickHandler(){
            if(!this.username || !this.password) {
                return this.$message({message: '账户或者密码不能为空',type: 'warning'});
            }
            this.$http.fetchLogin({username: this.username, password: this.password,}).then(res=>{
                this.$message({
                    message: '登录成功',
                    type: 'success'
                });
                localStorage.setItem('token',res.token)
                let ids = setTimeout(()=>{
                    clearTimeout(ids)
                    this.$router.push('/home')
                },1000)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.cms-login {
  background: rgb(45, 58, 75);
  height: 100%;
  width: 100%;
  color: rgb(238, 238, 238);
  .cms-login-box {
    width: 370px;
    margin: 0 auto;
    padding-top: 150px;
    &>div {
      line-height: 70px;
    }
    &>.title {
      font-size: 40px;
      text-align: center;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>
