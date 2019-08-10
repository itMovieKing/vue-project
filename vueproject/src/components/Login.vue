<template>
    <div>
        <div>
            <label>username:</label><input type="text" v-model="username"/>
        </div>
        <div>
            <label>password:</label><input type="password" v-model="password"/>
        </div>
        <button @click="login">login</button>
    </div>
</template>
<script>
export default {
    name:'Login',
    data(){
        return {
            username:'',
            password:'',
            data:{}
        }
    },
    methods:{
        login:function(){
            var a=this
            if(this.username=='test'&&this.password=='123456'){
               this.$http({
				method:'post',
				url:'https://test.52hbl.com/index.php/index/wxapp.login/simple',
				data:{
					username:a.username,
					password:a.password
				}
			}).then(res=>{
                console.log(res.data.data);
                a.data=res.data.data;
                console.log(a.data)
                // this.$store.commit('login',a.da);
                this.$store.dispatch('login',a.data)
                
            })
            location.hash='/person'
            }else{
                alert('username or password is error');
            }
            
        }
    }
}
</script>

