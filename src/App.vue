<template>
  <div id="app">
    <router-view/>
    
    <!--  底部导航   -->
    <Foot></Foot>
  </div>
</template>

<script>
import Foot from "@/components/Foot/Foot"
export default {
  name: 'App',
  components:{
  	Foot
  },
  mounted:function(){
  	this.$router.push("/home");
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
 	/*padding-bottom: 64px;*/
}
*{
	margin: 0px;
	padding: 0px;
}
</style>
