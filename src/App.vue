<template>
  <div id="app">
    <h1>Hello Fruccola</h1>
    <router-link to="/menu">Menu</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/open">Open</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
