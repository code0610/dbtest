<template>
	<div class="homeHead">
		<input type="text" value=""  placeholder="影视 图书 唱片 小组等"/>
		<img src="/static/ic_group_tab_search.png"  class="img1"/>
		<img src="/static/ic_scan_gray.png"  class="img2"/>
		<img src="/static/ic_chat_white.png"  class="img3"/>
	</div>
</template>

<script>
	
	export default{
		name:"HomeHeader"
	}
	
</script>

<style scoped>
	.homeHead{
		height: 50px;
		background-color: rgb(66,192,85);
		text-align: left;
		position: relative;
	}
	.homeHead input{
		height: 34px;
		width: 72%;
		margin: 8px 10px;
		border-radius: 10px;
		outline: none;
		border: none;
		padding-left: 32px;
	}
	img{
		width: 26px;
	}
	.img1{
		position: absolute;
		top: 12px;
		left: 12px;
	}
	.img2{
		position: absolute;
		top: 15px;
		right: 58px;
		width: 20px;
	}
	.img3{
		position: absolute;
		top: 10px;
		right: 10px;
		width: 30px;
	}
</style>