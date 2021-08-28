<template>
  <div class='navbar'>
    <div class="navbar-left">
      <div class="icon" @click="toggleSidebar">
        <i :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="navbar-right">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">Apple</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-right">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  components: {

  },
  data() {
    return {
    }
  },
  computed: {
    isFold() {
      return this.$store.state.app.sidebar.isFold
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    toggleSidebar() {
      this.$store.commit('app/TOGGLE_SIDEBAR')
    }
  }
}
</script>

<style lang='scss' scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #fff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  .navbar-left {
    display: flex;
    align-items: center;
    .icon {
      padding: 0 15px;
      cursor: pointer;
      i {
        font-size: 18px;
      }
    }
  }
  .navbar-right {
    margin-right: 40px;
  }
}
</style>