<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    console.log(11)
    // this.init();  
  },
  methods:{
    init(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
