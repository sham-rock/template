<template>
  <div id="app">
      <router-view/>
    <loading v-model="loadingFlag"></loading>
  </div>
</template>

<script>
import { Loading } from 'vux'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Loading
  },
  computed:{
    ...mapGetters(['loadingFlag'])
  }
}
</script>

<style>
/* 初始化样式 */
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
img{
  width: 100%;
  border: 0;
}
input{
  outline: none;
  border: none;
}
a{
  color: #000;
  text-decoration: none;
}
#app {
  font-family: 'PingFangSC-Regular','Avenir', Helvetica, Arial, sans-serif,'Microsoft YaHei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
