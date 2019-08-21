<!-- 底部父组件  -->
<template>
	
	<div class="foot">
		<Foot-item v-for="(item,index) in foots" @click.native="setBotItem(index)" :obj="item" :key="item"></Foot-item>
	</div>
	
</template>

<script>
	import FootItem from "./FootItem"
	export default{
		name:"Foot",
		components:{
			FootItem
		},
		data:function(){
			return{
				foots:[
					{name:"首页",img:"ic_tab_home_normal.png",img1:"ic_tab_home_active.png",toUrl:"/home",bol:true},
					{name:"书音影",img:"ic_tab_subject_normal.png",img1:"ic_tab_subject_active.png",toUrl:"/book",bol:false},
					{name:"广播",img:"ic_tab_status_normal.png",img1:"ic_tab_status_active.png",toUrl:"/guangbo",bol:false},
					{name:"小组",img:"ic_tab_group_normal.png",img1:"ic_tab_group_active.png",toUrl:"/group",bol:false},
					{name:"我的",img:"ic_tab_profile_female_normal.png",img1:"ic_tab_profile_female_active.png",toUrl:"/my",bol:false}
				]
			}
		},
		methods:{
			setBotItem:function(index){
				for(var i = 0;i<this.foots.length;i++){
					this.foots[i].bol = false;
				}
				this.foots[index].bol = true;
				this.$router.push(this.foots[index].toUrl);
			}
		}
	}
	
</script>

<style scoped>
	.foot{
		width: 100%;
		height: 64px;
		border-top: solid 1px gainsboro;
		position: fixed;
		bottom: 0px;
		display: flex;
		background-color: white;
	}
</style>
