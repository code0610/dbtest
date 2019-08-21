<template>
	
	<div>
		<Header txt="我的">
			<img slot="imgr" src="/static/ic_settings.png" class="imgright" />
		</Header>
	</div>
	
</template>
<script>
	import Header from "./Header/Header"
	export default{
		name:"My",
		components:{
			Header
		}
	}
</script>