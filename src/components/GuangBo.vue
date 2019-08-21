<template>
	
	<div>
		<Header txt="广播">
			<img slot="imgl" src="/static/ic_status_search_user.png"  class="imgleft"/>
			<img slot="imgr" src="/static/ic_chat_green.png" class="imgright" />
		</Header>
		
		
		<i-button type="success">成功按钮</i-button>
	</div>
	
</template>
<script>
	import Header from "./Header/Header"
	export default{
		name:"GuangBo",
		components:{
			Header
		}
	}
</script>