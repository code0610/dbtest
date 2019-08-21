<template>
	<div class="hot">
		<h3>热点</h3>
		<Hot-item v-for="item in hots" :obj="item" :key="item"></Hot-item>
	</div>
</template>

<script>
	import HotItem from "./HotItem"
	import axios from "axios"
	export default{
		name:"Hot",
		data:function(){
			return {
				hots:[]
			}
		},
		components:{
			HotItem
		},
		mounted:function(){
			var that = this;
			//去后台取数据  
			axios.get("/gethots")
				.then(function(rel){
					that.hots = rel.data;
				}).catch(function(err){
					console.log(err);
				})
		}
	}
</script>

<style scoped>
	.hot{
		width: 100%;
		text-align: left;
	}
	.hot h3{
		border-left: 3px solid rgb(252,135,74);
		padding-left: 20px;
		color: rgb(252,135,74);
		height: 26px;
		margin: 10px 0px;
	}
</style>