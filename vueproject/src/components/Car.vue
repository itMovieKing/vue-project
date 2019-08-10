<template>
	<div>
		<div class="car">
					i am car
			<ul class="list">
				<li v-for="(pro,index) in product" v-bind:key="index">
					<span @click="carclick(index)">name:{{ pro.name }}</span>
					<span>num:{{pro.num}}</span>
					<span>price:{{pro.price}}</span>
					</li>
			</ul>
			<div>
				总价<p>{{total}}</p>
			</div>
			<!-- <ul v-model="cars" class="car">
				<li v-for="(car,index) in cars" v-bind:key="index">
					<span>name:{{ cars.name }}</span>
					<span>num:{{cars.num}}</span>
					</li>
			</ul>
			 --><!-- <input type="text" v-model="product" placeholder="please input product"/> -->
			<button @click="getdata">test</button>
			<input v-focus/>
		</div>
		<h1 @click="setName">{{myName}}</h1>

	</div>
</template>

<script>
export default {
	name:"Car",
	data(){
		return {
			product:[
				{
					name:'apple',
					num:5,
					price:3
				},
				{
					name:'lizi',
					num:5,
					price:4
				},
				{
					name:'jvzi',
					num:5,
					price:1
				},
				{
					name:'banner',
					num:5,
					price:8
				},
			],
			total:0,
			carname:[],
			name:'hello lihua'
		}
		
	},
	created:function(){
		console.log('created test');
		this.$http.get("/static/index.js").then((res)=>{
			// console.log(res.data)
			// console.log(res)
		})
		
	},
	methods:{
		carclick:function(index){
			// console.log(this.product[index].name);
			// this.cars.push(this.product[index].name);
			// console.log(this.cars);
			this.product[index].num--;
			this.total=this.product[index].price+this.total;
			if(this.carname.indexOf(this.product[index].name)==-1){
				this.carname.push(this.product[index].name)
			}else{
				// this.carname[this.carname.indexOf(this.product[index].name)]++;
			}
			// console.log(this.carname);
			// this.carname.forEach((index)=>{
			// 	console.log(this.carname[index])
			// })
		},
		getdata:function(){
			this.$http.get("/static/index.js").then((res)=>{
				console.log(res.data)
			})
		},
		getda:function(){
			this.$http.get().then()
		},
		setName(){
			this.$store.commit('showName',this.name)
		}
	},
	computed:{
		myName(){
			// return this.$store.state.name
			return this.$store.state.obj
		}
	}
	
} 
</script>

<style scoped>
	.list span{
		display: inline-block;
		width:auto;
		height: 30px;
		padding: 10px;
		/* border: 1px solid antiquewhite; */
	}
</style>
