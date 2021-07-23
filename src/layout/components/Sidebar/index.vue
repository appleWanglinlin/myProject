<template>
<div class="sidebar">
  <div class="title">
    <span>售后管理系统</span>
    <!-- <span style="font-size:14px">After sales management system</span> -->
  </div>
  <el-aside width="200px">
    <el-menu 
             background-color="#545c64"
             text-color="rgb(255, 255, 255)"
             active-text-color="#409eff">
      <el-submenu v-for="(item, index) in menuList" :key="index" :index="item.name">
        <template slot="title"><i class="el-icon-message"></i>{{item.name}}</template>
        <template v-if="item.children.length">
          <el-menu-item v-for="(sItem, sIndex) in item.children" :key="sIndex" :index="sItem.name">{{sItem.name}}</el-menu-item>
        </template>
      </el-submenu>
    </el-menu>
  </el-aside>
</div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      menuList: [
        {
          name: '基础设置',
          children: [
            {
              name: '留评链接设置'
            },
            {
              name: '礼品设置'
            },
            {
              name: '买家端设置'
            },
            {
              name: '店铺授权'
            }
          ]
        },
        {
          name: '客户与订单',
          children: [
            {
              name: 'Amazon订单'
            },
            {
              name: '激活买家管理'
            },
            {
              name: '激活异常管理'
            },
            {
              name: '评价监控'
            }
          ]
        },
        {
          name: 'EDM',
          children: [
            {
              name: '我的邮件模板'
            }
          ]
        }
      ]
    }
  },
  computed: {

  },
  created() {

  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background-color: #545c64;
  z-index: 1;
  .title {
    margin-top: 10px;
    color: #fff;
    span {
      font-size: 16px;
      font-weight: bold;
    }
  }
  .el-aside {
    overflow: hidden;
    .el-menu {
      ::v-deep .el-submenu__title {
        text-align: left;
      }
      .el-menu-item {
        padding-left: 50px !important;
        text-align: left;
      }
    }
  }
}

</style>