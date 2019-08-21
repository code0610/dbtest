<template>
	
	<div class="home">
		<Home-header></Home-header>
		<div class="swiper-container">
		  <div class="swiper-wrapper">
		    <div class="swiper-slide" v-for="item in banimgs"><img :src="'/static/banner/'+item" /></div>
		  </div>
		</div>
		<Hot></Hot>
	</div>
	
</template>
<script>
	import HomeHeader from "./Header/HomeHeader"
	import Swiper  from "swiper"
	import Hot from "./Home/Hot"
	export default{
		name:"Home",
		components:{
			HomeHeader,
			Hot
		},
		data:function(){
			return{
				banimgs:["01.jpg","02.jpg","03.jpg"]
			}
		},
		mounted:function(){
			new Swiper('.swiper-container', {
				autoplay: true,//可选选项，自动滑动
			});
			
		}
	}
</script>

<style scoped>
	@import "swiper/dist/css/swiper.css";
	.home{
		width: 100%;
		margin-bottom: 64px;
	}
	.swiper-container .swiper-slide img{
		width: 100%;
	}
</style>