<template>
  <div id="app">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">
        <router-link to="/home">home</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/foo">foo</router-link>
      </el-menu-item>
    </el-menu>
    
    
    <!--留坑，非常重要-->
    <router-view></router-view>	
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return {
      activeIndex: "2"
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
