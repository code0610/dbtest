<!--  底部中的内容部分  -->
<template>
	<div class="footitem">
		<img v-show="!obj.bol" :src="'/static/'+obj.img"  />
		<img v-show="obj.bol" :src="'/static/'+obj.img1"  />
		<br />
		<span :class="{active:obj.bol}">{{ obj.name }}</span>
	</div>
</template>

<script>
	
	export default{
		name:"FootItem",
		props:["obj"]
	}
	
</script>

<style scoped>
	
	.footitem{
		width: 20%;
	}
	.footitem img{
		width: 60%;
	}
	.footitem .active{
		color: rgb(66,189,86);
	}
</style>
