<template>
  <el-row class="ark-about">
    <ark-header></ark-header>
    <el-row class='ark-about-container'>
        <router-view></router-view>
    </el-row>
  </el-row>
</template>

<script>
    import arkHeader from '../Header.vue'

    export default {
        name: 'DevAboutContainer',
        components: { arkHeader }
    }
</script>

<style>
  .ark-about {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    min-width: 1024px;
  }
  .ark-about-container {
    position: absolute;
    top: 60px;
    bottom: 0px;
    width: 100%;
    padding: 20px;
    background-color: #ffffff;
  }
</style>