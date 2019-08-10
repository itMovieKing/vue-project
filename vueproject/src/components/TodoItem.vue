<template>
	<div>
		<label>add a todo:</label>
		<input v-model='newtodo' id="newtodoid" placeholder="please"/>
		<button @click="add">add</button>
		<ul>
			<li v-for="(item,index) in todolist" :key="index">{{item.id}}:{{item.todo}}
			<button @click="remove(index)">remove</button>
			</li>
		</ul>
	</div>
	
</template>

<script>
	export default{
		name:'TodoItem',
		data(){
			return{
				newtodo:'',
				newtodoid:4,
				todolist:[
					{
						id:1,
						todo:'play1'
					},
					{
						id:2,
						todo:'play2'
					},
					{
						id:3,
						todo:'play3'
					},
					{
						id:4,
						todo:'play4'
					}
				]
			}
		},
		methods:{
			add:function(){
				console.log('test');
				this.todolist.push({id:++this.newtodoid,todo:this.newtodo})
			},
			remove:function(index){
				console.log(index);
				this.todolist.splice(index,1);
			}
		}
	}
</script>

<style>
</style>
