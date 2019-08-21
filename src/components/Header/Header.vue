<!--  书  我   广播  小组  的公共头部   -->
<template>
	<div class="header">
		<h3>{{ txt }}</h3>
		<slot name="imgl"></slot>
		<slot name="imgr"></slot>
		<!--<img src="/static/ic_group_search.png"  class="imgleft"/>
		<img src="/static/ic_chat_green.png" class="imgright" />-->
	</div>
</template>

<script>
	
	export default{
		name:"Header",
		props:["txt"]
	}
	
</script>

<style scoped>
	.header{
		height: 50px;
		background-color: rgb(247,247,247);
		border-bottom: solid 1px gray;
		line-height: 50px;
		position: relative;
	}
	.imgleft{
		width: 32px;
		position: absolute;
		top: 9px;
		right: 70px;
	}
	.imgright{
		width: 32px;
		position: absolute;
		top: 9px;
		right: 20px;
	}
</style>
