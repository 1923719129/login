<template>
  <div id="app">
    <Loginbox></Loginbox>
  </div>
</template>
<script>
import Loginbox from "./components/Login_box.vue";
export default {
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
  components: {
    //注册组件
    Loginbox
  },
};
</script>
<style lang="less" scoped>
@import url("./App.less");
</style>
