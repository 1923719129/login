<template>
  <div id="app">
    <div class="user">
      <img class="img" src="./img/user.png" alt="" /><input
        type="text"
        placeholder="输入用户名"
        onkeyup="this.value=this.value.replace(/[^\w_]/g,'');"
      />
    </div>
    <!-- <hr> -->
    <div class="password">
      <img class="img" src="./img/password.png" alt="" /><input
        type="password"
        placeholder="输入密码"
      />
    </div>
    <!-- <hr> -->
    <div class="code">
      <img class="img" src="./img/code.png" alt="" /><input
        type="text"
        placeholder="输入验证码"
        onkeyup="this.value=this.value.replace(/[^\w_]/g,'');"
      /><button class="code_btn">点击获取验证码</button>
    </div>
    <!-- <hr>     -->
    <a href="/" class="not_password">忘记账号密码？</a>
    <div class="login_btn">
        <button class="">登录</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="less" scoped>
@import url("../Login_less/Registration_login.less");
</style>
