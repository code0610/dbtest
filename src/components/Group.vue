<template>
	<div>
		<Header txt="小组">
			<img slot="imgl" src="/static/ic_group_search.png"  class="imgleft"/>
			<img slot="imgr" src="/static/ic_chat_green.png" class="imgright" />
		</Header>
	</div>
	
</template>
<script>
	import Header from "./Header/Header"
	export default{
		name:"Group",
		components:{
			Header
		}
	}
</script>