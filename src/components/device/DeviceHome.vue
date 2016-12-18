<template>
  <el-row class="ark-home">
    <ark-header></ark-header>
    <ark-content></ark-content>
  </el-row>
</template>

<script>
    import arkHeader from '../Header.vue'
    import arkContent from '../Content.vue'

    export default {
        name: 'DeviceHome',
        components: { arkHeader, arkContent }
    }
</script>

<style>
  .ark-home {
    position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
  }
</style>