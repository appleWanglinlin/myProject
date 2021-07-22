<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button type="primary">11</el-button>
  </div>
</template>

<script>
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
console.log(__dirname)
console.log(resolve('src'))
// import { getAllCategory } from '@/api/common'
export default {
  created() {
    // getAllCategory().then(res => {
    //   console.log('getAllCategory', res)
    // })
  }
}
</script>