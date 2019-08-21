<template>
	<div class="hotitem">
		<h3>{{ obj[1] }}</h3>
		<img :src="'/static/'+obj[2]"  />
	</div>
</template>

<script>
	export default{
		name:"HotItem",
		props:["obj"]
	}
</script>