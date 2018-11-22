<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="page">
      弹出层里不能有其它需要滚动的内容（如大段文字需要固定高度，显示滚动条也会被阻止）
      弹出层里不能有其它需要滚动的内容（如大段文字需要固定高度，显示滚动条也会被阻止）
      弹出层里不能有其它需要滚动的内容（如大段文字需要固定高度，显示滚动条也会被阻止）
      弹出层里不能有其它需要滚动的内容（如大段文字需要固定高度，显示滚动条也会被阻止）
      弹出层里不能有其它需要滚动的内容（如大段文字需要固定高度，显示滚动条也会被阻止）
      弹出层里不能有其它需要滚动的内容（如大段文字需要固定高度，显示滚动条也会被阻止）
      弹出层里不能有其它需要滚动的内容（如大段文字需要固定高度，显示滚动条也会被阻止）
      弹出层里不能有其它需要滚动的内容（如大段文字需要固定高度，显示滚动条也会被阻止）
      弹出层里不能有其它需要滚动的内容（如大段文字需要固定高度，显示滚动条也会被阻止）
      弹出层里不能有其它需要滚动的内容（如大段文字需要固定高度，显示滚动条也会被阻止）
    </div>
    <div @click="open">打开弹窗</div>
    <div class="box" v-if="openPop">
      <div class="txt">
        <div>
          弹出层里不能有其它需要滚动的内容（如大段文字需要固定高度，显示滚动条也会被阻止）
          弹出层里不能有其它需要滚动的内容（如大段文字需要固定高度，显示滚动条也会被阻止）
          弹出层里不能有其它需要滚动的内容（如大段文字需要固定高度，显示滚动条也会被阻止）
          弹出层里不能有其它需要滚动的内容（如大段文字需要固定高度，显示滚动条也会被阻止）
          弹出层里不能有其它需要滚动的内容（如大段文字需要固定高度，显示滚动条也会被阻止）
          弹出层里不能有其它需要滚动的内容（如大段文字需要固定高度，显示滚动条也会被阻止）
          弹出层里不能有其它需要滚动的内容（如大段文字需要固定高度，显示滚动条也会被阻止）
          弹出层里不能有其它需要滚动的内容（如大段文字需要固定高度，显示滚动条也会被阻止）
          弹出层里不能有其它需要滚动的内容（如大段文字需要固定高度，显示滚动条也会被阻止）
          弹出层里不能有其它需要滚动的内容（如大段文字需要固定高度，显示滚动条也会被阻止）
          弹出层里不能有其它需要滚动的内容（如大段文字需要固定高度，显示滚动条也会被阻止）
          弹出层里不能有其它需要滚动的内容（如大段文字需要固定高度，显示滚动条也会被阻止）
          </div>
      <div @click="close">关闭弹窗</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Group, Cell} from 'vux'
export default {
  name: 'index',
  components: {
    Group,
    Cell
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      openPop:false
    }
  },
  created(){
 
  },
  methods:{
    open(){
      this.openPop=true;
      this.$sp.afterOpen()
    },
    close(){
      this.openPop=false;
      this.$sp.beforeClose()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page{
  font-size: 50px;
}
.box{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
width: 100%;
height: 100%;
background: rgba(0,0,0,.5);
color: #000;
font-size: 50px;
overflow: scroll;

}
.txt{
  background: #FFF;
  margin:200px 40px 0; 
}
</style>
