import Vuex from 'vuex'
import Vue from 'vue'
import $http from 'axios'
Vue.use(Vuex)
// var arr=$http.get('/static/index.js').then(res=>{
// 	// console.log(res.data)
// 	return res
// })
// console.log(arr)
var arr
// $http({
// 	method:'get',
// 	url:'/static/index.js'
// }).then(res=>{
// 	arr=res.datao
// })
// $http({
// 	method:'post',
//     url:'https://test.52hbl.com/index.php/index/wxapp.login/simple',
//     data:{
// 		username:'test',
// 		password:'123456'
// 	}
// }).then(res=>{
// 	// console.log(res )
// })
const store=new Vuex.Store({
	state:{
		name:'lily',
		age:50,
		obj:arr,
		username:'请登录',
		password:'',
		data:{},
		da:{
			name:'lihua'
		}
	},
	mutations:{
		showName(state,name){
			state.name=name
		},
		testlogin(state,obj){
			// console.log(username);
			// console.log(typeof(username))
			// $http({
			// 	method:'post',
			// 	url:'https://test.52hbl.com/index.php/index/wxapp.login/simple',
			// 	data:{
			// 		username:username,
			// 		password:password
			// 	}
			// }).then(res=>{
			// 	console.log(res )
			// })
			console.log(obj)
			// state.username=username;
			// state.password=password;
			// state.data=data
		},
		updateData(state,data){
			state.data=data
		}
	},
	actions:{
		login(context,data){
			context.commit('updateData',data)
			// console.log(data);
			// state.da=data;
			// state.da={
			// 	name:'tom'
			// };
			// state.username='heelo'
			// console.log(state.data);
			// console.log(state.da);
		}
	}
})
export default store










