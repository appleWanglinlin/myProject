<template>
  <div class="login-container">
    <el-form class="login-form" ref="form" :model="form" :rules="rules">
      <el-form-item prop="user_account" label="用户名">
        <el-input v-model="form.user_account"></el-input>
      </el-form-item>
      <el-form-item prop="user_password" label="密码">
        <el-input v-model="form.user_password"></el-input>
      </el-form-item>
      <el-button style="width: 100%" type="primary" @click="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { login } from '@/api/login'
export default {
  data() {
    return {
      form: {
        user_account: 'test11',
        user_password: 'admin'
      },
      rules: {
        user_account: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        user_password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleLogin() {
      this.$refs.form.validate(valid => {
        if (valid) {
          login(this.form).then(res => {
            console.log('login', res)
          })
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.login-container {
  .login-form {
    width: 300px;
    margin: 0 auto;
  }
}
</style>
