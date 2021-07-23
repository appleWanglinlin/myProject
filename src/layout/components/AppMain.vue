<template>
  <div class='app-mian'>
    <transition name="fade-transform" mode="out-in">
      <!-- <keep-alive :include="cachedViews"> -->
        <router-view />
      <!-- </keep-alive> -->
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  components: {

  },
  data() {
    return {

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
.app-mian {
  
}
</style>