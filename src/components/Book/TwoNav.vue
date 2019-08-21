<template>
	
	<div class="twoNav">
		<ul>
			<router-link tag="li" @click.native="setTwoNav(index)" :class="{active:o.bol}" v-for="(o,index) in lis" :to="'/book'+o.toUrl" :key="o">{{ o.name }}</router-link>
		</ul>
	</div>
	
</template>

<script>
	
	export default{
		name:"TwoNav",
		data:function(){
			return{
				lis:[
					{name:"电影",toUrl:"/dy",bol:true},
					{name:"读书",toUrl:"/ds",bol:false},
					{name:"电视",toUrl:"/tv",bol:false},
					{name:"同城",toUrl:"/tc",bol:false},
					{name:"音乐",toUrl:"/mc",bol:false}
				]
			}
		},
		methods:{
			setTwoNav:function(index){
				for(var i = 0;i<this.lis.length;i++){
					this.lis[i].bol = false;
				}
				this.lis[index].bol = true;
			}
		}
	}
	
</script>

<style scoped>
	.twoNav{
		width: 100%;
		border-bottom: solid 1px gainsboro;
		overflow: hidden;
	}
	.twoNav li{
		float: left;
		list-style: none;
		width: 20%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		padding-bottom: 1px;
	}
	.twoNav .active{
		color: rgb(106,198,128);
		border-bottom: solid 2px rgb(106,198,128);
	}
</style>