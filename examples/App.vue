<template>
  <div id="app">
    <wkl-vue-button type="primary"/>
    <wkl-vue-button type="success"/>
    <wkl-vue-button type="warning"/>
    <wkl-vue-button type="danger"/>
    <wkl-vue-button type="info"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
