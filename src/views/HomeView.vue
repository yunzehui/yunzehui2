<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <el-container>
      <!-- 侧栏 -->
      <el-aside class="aside" style="background-color: rgb(34, 45, 50)">
        <div class="aside-title">ElementUi管理后台</div>
        <!-- 一级菜单 -->
        <el-menu
          background-color=" rgb(34, 45, 50)"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true"
        >
          <el-menu-item index="/">
            <i class="el-icon-house"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <!-- 二级菜单 -->
          <!-- 文章管理 -->
          <el-submenu index="2" class="item">
            <template slot="title">
              <i class="el-icon-notebook-2"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">文章列表</el-menu-item>
              <el-menu-item index="2-2">多层级路由示例</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
        <div class="foot"><i class="el-icon-back"></i></div>
      </el-aside>
      <el-container>
        <el-header class="head">
          <div class="top">
            <div class="left"><i class="el-icon-menu"></i></div>
            <div class="right">
              <i class="el-icon-rank"></i>
              <el-dropdown>
                <span class="el-dropdown-link">
                  <i class="el-icon-setting"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>导航类型：面包屑/窗口标签</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>

              <i class="el-icon-ice-cream-square"></i>
              <el-dropdown>
                <span class="el-dropdown-link">
                  下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>个人中心</el-dropdown-item>
                  <el-dropdown-item>退出系统</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
          <!-- 面包屑 -->
          <div>
            <el-breadcrumb class="nav" separator="/">
              <el-breadcrumb-item
                :to="{ path: '/' }"
                v-for="(item, index) in this.$route.meta"
                :key="index"
                >{{ item }}</el-breadcrumb-item
              >
            </el-breadcrumb>
          </div>
        </el-header>
        <el-main class="main">
          <!-- 二级路由出口组件 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    // HelloWorld,
  },
};
</script>

<style scoped>
.head {
  padding: 0;
  height: 90px;
}
.aside {
  position: relative;
}
.aside-title {
  height: 50px;
  background: #0079d9;
  color: #fff;
  font-weight: bold;
  text-align: center;
  line-height: 50px;
}
.top {
  height: 50px;
  background: #0079d9;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}
.top .right {
  width: 200px;
  margin-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav {
  height: 38px;
  line-height: 38px;
  background: #fff;
  padding-left: 20px;
}
.main {
  height: 500px;
  overflow: scroll;
  margin: 0;
  padding: 30px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.foot {
  width: 100%;
  height: 50px;
  background: #0079d9;
  position: absolute;
  bottom: 0;
  color: #fff;
  font-size: 32px;
}
.foot i {
  position: absolute;
  right: 15px;
  top: 9px;
}
</style>