<template>
  <el-container>
    <sidebar></sidebar>
    <el-container style="margin-left: 201px">
      <el-header style="height: auto">
        <navbar></navbar>
        <tags></tags>
      </el-header>
      <el-main style="background-color: #f0f2f5;box-sizing: border-box;min-height: calc(100vh - 90px);">
        <app-main></app-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from './components/Sidebar/index.vue'
import Navbar from './components/Navbar.vue'
import Tags from './components/Tags/index.vue'
import AppMain from './components/AppMain.vue'
export default{
  name: 'Layout',
  components: {
    Sidebar,
    Navbar,
    Tags,
    AppMain
  },
  data() {
    return {

    }
  }
}
</script>


<style lang="scss" scope>
  .el-header {
    padding: 0;
  }
  
  .el-aside {
    color: #333;
  }
</style>