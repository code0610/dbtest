<template>
	<div class="book">
		<Header txt="书影音">
			<img slot="imgl" src="/static/ic_group_search.png"  class="imgleft"/>
			<img slot="imgr" src="/static/ic_chat_green.png" class="imgright" />
		</Header>
		<Two-nav></Two-nav>
		<div class="tabRouter">
			<router-view></router-view>
		</div>
	</div>
	
</template>
<script>
	import Header from "./Header/Header"
	import TwoNav from "./Book/TwoNav"
	export default{
		name:"Book",
		components:{
			Header,
			TwoNav
		},
		mounted:function(){
			this.$router.push("/book/dy");
		}
	}
</script>