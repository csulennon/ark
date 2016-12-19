<template>
  <el-row class="ark-home-container">
    <ark-header></ark-header>
    <ark-content></ark-content>
  </el-row>
</template>

<script>
    import arkHeader from '../Header.vue'
    import arkContent from '../Content.vue'

    export default {
        name: 'DeviceContainer',
        components: { arkHeader, arkContent }
    }
</script>

<style>
  .ark-home-container {
    position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
    min-width: 1024px;
  }
</style>