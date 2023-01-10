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
        placeholder="输入8-16位密码"
      />
    </div>
    <div class="password">
      <img class="img" src="./img/password.png" alt="" /><input
        type="password"
        placeholder="再次输入密码"
      />
    </div>
    <!-- <hr> -->
    <div class="phone">
      <img class="img" src="./img/phone.png" alt="" /><input
        type="text"
        placeholder="输入11位手机号"
      /><button class="code_btn">点击获取验证码</button>
    </div>

    <!-- <hr>     -->
    <div class="page_btn">
      <div class="code">
        <img class="img" src="./img/code.png" alt="" /><input
          type="text"
          placeholder="输入验证码"
          onkeyup="this.value=this.value.replace(/[^\w_]/g,'');"
        />
      </div>
      <button class="">注册</button>
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
@import url("../Login_less/Registration_page.less");
</style>
