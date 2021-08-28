<template>
  <div class="sidebar-container">
    <div v-show="sidebar.isFold" class="title">
      <!-- <span>泽汇海外仓</span> -->
      <!-- <span style="font-size:14px">After sales management system</span> -->
    </div>
    <el-menu
      :style="{width: sidebar.isFold ? '64px' : '200px'}"
      :collapse="sidebar.isFold"
      text-color="rgb(255, 255, 255)"
      background-color="#545c64"
    >
      <template v-for="(item, index) in menuList">
        <template v-if="item.children && item.children.length">
          <el-submenu :key="index" :index="index + ''" class="level2">
            <template slot="title">
              <i class="el-icon-location" />
              <span slot="title">{{ item.name }}</span>
            </template>
            <template v-for="(sItem, sIndex) in item.children">
              <template v-if="sItem.children && sItem.children.length">
                <el-submenu :key="`${index}-${sIndex}`" :index="`${index}-${sIndex}`" class="level3">
                  <span slot="title">{{ sItem.name }}</span>
                  <template v-for="(tItem, tIndex) in sItem.children">
                    <el-menu-item :key="`${index}-${sIndex}-${tIndex}`" :index="`${index}-${sIndex}-${tIndex}`">{{ tItem.name }}</el-menu-item>
                  </template>
                </el-submenu>
              </template>
              <template v-else>
                <el-menu-item :key="`${index}-${sIndex}`" :index="`${index}-${sIndex}`">{{ sItem.name }}</el-menu-item>
              </template>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :key="index" :index="index + ''" class="level1">
            <i class="el-icon-setting" />
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
      <!-- <el-submenu index="1" class="level2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航1</span>
        </template>
        <el-submenu index="1-1" class="level3">
          <span slot="title">导航1-1</span>
          <el-menu-item index="1-1-1">导航1-1-1</el-menu-item>
          <el-menu-item index="1-1-2">导航1-1-2</el-menu-item>
        </el-submenu>
        <el-submenu index="1-2" class="level3">
          <span slot="title">导航1-2</span>
          <el-menu-item index="1-2-1">导航1-2-1</el-menu-item>
        </el-submenu>
        <el-menu-item index="1-3">导航1-3</el-menu-item>
        <el-menu-item index="1-4">导航1-4</el-menu-item>
      </el-submenu>
      <el-menu-item index="2" class="level1">
        <i class="el-icon-setting"></i>
        <span slot="title">导航二</span>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Sidebar',
  data() {
    return {
      menuList: [
        {
          name: 'A',
          children: [
            {
              name: 'A1',
              children: [
                {
                  name: 'A11'
                }
              ]
            },
            {
              name: 'A2'
            }
          ]
        },
        {
          name: '外部链接'
        },
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
    ...mapGetters([
      'sidebar'
    ])
  },
  created() {
    console.log('sidebar', this.sidebar)
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
.sidebar-container {
  max-height: 100vh;
  height: 100vh;
  overflow-y: auto;
  background-color: #545c64;
  .el-menu {
    border-right: none;
    .level1 {
      padding-left: 15px !important;
    }
    .level2 {
      ::v-deep .el-submenu__title {
        padding-left: 15px !important;
      }
      .el-menu-item {
        padding-left: 45px !important;
      }
    }
    .level3 {
      ::v-deep .el-submenu__title {
        padding-left: 45px !important;
      }
      .el-menu-item {
        padding-left: 60px !important;
      }
    }
  }
  // .title {
  //   margin-top: 10px;
  //   color: #fff;
  //   span {
  //     font-size: 16px;
  //     font-weight: bold;
  //   }
  // }
  // .el-aside {
  //   overflow: hidden;
  //   .el-menu {
  //     box-sizing: border-box;
  //     ::v-deep .el-submenu__title {
  //       padding-left: 15px !important;
  //       text-align: left;
  //       .el-icon-message {
  //         margin-right: 15px;
  //       }
  //     }
  //     .el-menu-item {
  //       padding-left: 50px !important;
  //       text-align: left;
  //     }
  //   }
  // }
}
</style>
