<template>
  <div class='tags'>
    <el-tag
      v-for="tag in tags"
      :key="tag.name"
      closable
      effect="plain"
      >
      {{tag.name}}
    </el-tag>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  data() {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
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
.tags {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 15px;
  text-align: left;
  .el-tag {
    margin-right: 5px;
  }
  
}
</style>