<template>
	<div>
		<div class="compute">
			<button @click='add'>+</button>
			<input v-model="num"/>
			<button @click="cut">-</button>
		</div>
		<div>
			<button @click="great">great</button>
			<!-- <button @click="say('hi')"></button> -->
			<input v-model='msg' @keyup.enter="key"/>
			<button @click.ctrl='change'>hi</button>
			<button @click.ctrl.exact='change'>hello</button>
		</div>
		<div>
			<input type="checkbox" v-model="checked"/>
			<label>{{checked}}</label>
			<select v-model="selected" @click="sel">
				<option >123</option>
			</select>
			<input v-model.lazy.trim='msg'/>
			<p>this is:{{msg}}</p>
		</div>
		<div>{{myName}}</div>
	</div>
</template>

<script>
export default{
	name:'EventListen',
	data(){
		return {
			num:0,
			name:'vueEvent',
			msg:'',
			checked:true,
			selected:''
		}
		
	},
	methods:{
		add:function(){
			this.num++
			
		},
		cut:function(){
			if(this.num<=0){
				this.num=0;
			}else{
				this.num--
			}
		},
		great:function(){
			alert('hello'+this.name+'!')
		},
		key:function(){
			alert(this.msg)
		},
		change:function(){
			alert('ctrl')
		},
		sel:function(){
			console.log(this.selected)
		}
	},
	computed:{
		myName(){
			return this.$store.state.name
		}
	}
}
</script>

<style scoped>
</style>
