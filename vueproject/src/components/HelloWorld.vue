<template>
	<div class="hello">
		<div class="test">
			<img src="../assets/logo.png" />
			<h1>{{ msg }}</h1>
			<input type="text" v-model='msg' placeholder="hei is me 小戏精" />
			<p v-bind:title="message">鼠标悬停</p>
			<p v-if="seen">现在你看到了我</p>
			<button v-on:click='reverseMessage'>反转消息</button>
			<ul>
				<li v-for='todo in todos' v-bind:key='todo.id'>{{ todo.text }}</li>
			</ul>
			<span>Multiline message is:</span>
			<p style="white-space:pre-line">{{ msg2 }}</p><br />
			<textarea v-model="msg2" placeholder="hei also me"></textarea>
			<!-- 单个复选框 -->
			<input type="checkbox" id="checkbox" v-model="checked" />
			<label for="checkbox">{{ checked }}</label>
			<br />
			<!-- 多个复选框 -->
			<div class="chebox">
				<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
				<label for="jack">Jack</label>
				<input type="checkbox" id="john" value="John" v-model="checkedNames">
				<label for="john">John</label>
				<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
				<label for="mike">Mike</label>
				<br>
				<span>Checked names: {{ checkedNames }}</span>
			</div>
			<!-- 单选框 -->
			<div class="singel">
				<select v-model="selected">
					<option disabled value="">请选择</option>
					<option>A</option>
					<option>B</option>
					<option>C</option>
				</select>
				<span>Selected: {{ selected }}</span>
			</div>
			<!-- v-for -->
			<div class="singlefor">
				<select v-model="selected">
					<option v-for="(option,index) in options" v-bind:value="option.value" v-bind:key="index">
						{{ option.text }}
					</option>
				</select>
				<span>Selected:{{ selected }}</span>
			</div>
		</div>
		<div class="compltedtest">
			<p>original message:{{cmsg}}</p>
			<p>computed msg:{{reversedmsg}}</p>
			<p>{{fullName}}</p>
		</div>
		<div id="watch-example">
			<p>
				ask a yes/no question:
				<input v-model='question'>
			</p>
			<p>{{answer}}</p>
			<p v-bind:class="classObject" v-on:click="change">{{message}}</p>
			<button v-on:click="changecomponent">显示子组件</button>
			<component v-bind:is="show"></component>
			<p :class="[active,error]">hahahahaha</p>
			<p :class="[isActive?active:error]">this is my test</p>
			<p v-if="iftest">hello is me</p>
			<p v-else>is not me</p>
		</div>
		<button @click="change()">切换</button>
		<div v-if="test">
			<label>username:</label>
			<input placeholder="enter your username" key="username-input"/>
		</div>
		<div v-else>
			<label>e-mail</label>
			<input placeholder="enter your e-mail" key="e-mail-input"/>
		</div>
		<div class="dispear">
			<ul>
				<li v-for="(item,index) in items" v-bind:key="index" @click="delet(index)">{{item.name}}</li>
			</ul>
			<ul>
				<li v-for="(value,key,index) of objects" v-bind:key='index'>{{index}}:{{value}}</li>
			</ul>
			<button @click="add()">add</button>
			<button @click="delet()" key="delete">delete</button>
			<praent :name="answer" @give="get"></praent>
			<ul>
				<li v-for="(num,index) in nums" :key="index">{{num}}</li>
			</ul>
			<ul>
				<li v-for="(num,index) in computednum" :key="index">{{num}}</li>
			</ul>
			<p v-for="i in 10" :key="i">{{i}}</p>
		</div>
		
		
		<TodoItem></TodoItem>
		
	</div>
</template>
<script>
import Praent from './praent.vue';
import TodoItem from './TodoItem.vue';
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: '',
				message: '页面加载于' + new Date().toLocaleString(),
				seen: true,
				key: 1,
				todos: [{
						id: 0,
						text: '我爱学习'
					},
					{
						id: 1,
						text: '学习好好'
					}
				],
				msg2: '',
				checked: false,
				checkedNames: [],
				selected: 'A',
				options: [{
						text: 'one',
						value: 'A'
					},
					{
						text: 'two',
						value: 'B'
					},
					{
						text: 'three',
						value: 'C'
					}
				],
				cmsg:'hello',
				lastName:'xiao',
				firstName:'zhang',
				question:'',
				answer:'i cannot give you an anser until you ask a question!',
				classObject:{
					active:true,
					
				},
				show:'first',
				isActive:true,
				active:'active',
				error:'error',
				iftest:Math.random()<0.5,
				test:true,
				items:[
					{
						name:'lili'
					},
					{
						name:'lihua'
					},
					{
						name:'litian'
					}
				],
				objects:{
					name:'lili',
					age:5
				},
				nums:[5,6,8,9,4]
			}
		},
		components:{
			Praent,
			TodoItem,
			first:{
				template:'<div>我是第一个子组件</div>'
			},
			second:{
				template:"<div>我是第二个子组件</div>"
			},
			third:{
				template:"<div>我是第三个子组件</div>"
			},
			
		},
		methods: {
			reverseMessage: function() {
				this.msg = this.msg.split('').reverse().join('')
			},
			change:function(){
				// console.log(this.classObject.active);
				this.classObject.active=!this.classObject.active;
				this.test=!this.test;
			},
			changecomponent:function(){
				var arr=["first","second","third"];
				var index=arr.indexOf(this.show);
				if(index<2){
					this.show=arr[index+1];
				}else{
					this.show=arr[0];
				}
				// this.show="second"
			},
			add:function(){
				// this.items.push({name:"shan"})
				// this.items[1]="ho=";
				// 以下方法有问题
				this.$set(this.items,1,'hi');
			},
			delet:function(index){
				this.items.splice(index,1);
			},
			get:function(data){
				console.log(data)
			}

		},
		computed:{
			reversedmsg:function(){
				return this.cmsg.split('').reverse().join('')
			},
			fullName:function(){
				return this.firstName+''+this.lastName
			},
			computednum:function(){
				return this.nums.filter(function(num,index){
					console.log(num);
					return num%2==0
					// if(num<this.nums[index-1]){
					// 	let [num,this.nums[index-1]]=[this.nums[index-1],num]
					// }
				})
				
			}
		},
		watch:{
			question:function(newQuestion,oldQuestion){
				this.answer="waiting for you to stop typing...."
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chebox {
		margin-top: 50px;
	}
.singlefor {
		margin-top: 50px;
	}
.test{
	display: none;
}
.compltedtest{
	display: none;
}
.active{
	background-color: #f00;
}
.error{
	color: #fff;
}
.dispear{
	display: none;
}
</style>
