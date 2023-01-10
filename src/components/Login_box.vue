<template>
  <div id="login">
    <div class="head">
      <!-- 登录账号选项 -->
      <div class="login_text" :class="i == 0 ? 'text' : ''" @click="change(0)">
        {{ login }}
      </div>
      <span class="l">|</span>
      <!-- 注册账号选项 -->
      <div class="page_text" :class="i == 1 ? 'text' : ''" @click="change(1)">
        {{ page }}
      </div>
    </div>
    <!-- 路由挖的大坑 -->
    <router-view class="router"></router-view>
  </div>
</template>
<script>
//引入登录、注册两个子组件，使用router进行切换
import Login from "./Registration_login.vue";
import Page from "./Registration_page.vue";
export default {
  data() {
    return {
      //两个页面数据，不用放到数据库
      login: "登录账号",
      page: "注册账号",
      //默认显示页面的值
      i: 0,
    };
  },
  created() {},
  computed: {},
  methods: {
    //router切换登录注册
    change(val) {
      this.i = val;
      if (val == 0) {
        this.$router.push("/");
      } else if (val == 1) {
        this.$router.push("/Page");
      }
    },
  },
  components: {
    // 组件注册
    Login,
    Page,
  },
};
</script>
<style lang="less" scoped>
// 引入less文件
@import url("../Login_less/Login_box.less");
</style>
