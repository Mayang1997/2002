<template>
  <div id="app">
    <!-- 视图容器 -->
    <!-- 命名视图 -->
    <router-view v-if='$route.path == "/login"' name='Login'></router-view>
    <Cms v-else></Cms>
    
  </div>
</template>

<script>
const Cms = ()=>import('@/components/common/layout/Cms.vue');
export default {
  name: "App",
  components: {
      Cms,
  },
};
</script>

<style>
html,body{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
#app {
    width: 100%;
    height: 100%;
}
.cms-interface-head .el-menu{
  border: none;
}

</style>