<template>
	<div>
		<div>{{name}}</div>
		<button @click="give">子组件</button>
	</div>
	
</template>

<script>
export default{
	name:'Praent',
	data(){
		return {
			msg:"hello"
		}
	},
	props:{
		name:name
	},
	methods:{
		give:function(){
			this.$emit('give','5')
		}
	}
}
</script>

<style>
</style>
