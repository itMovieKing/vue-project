<template>
  <div id="app">
    <img src="./assets/logo.png">
		<ul>
			<li>
				<router-link to="/">首页</router-link>
				<router-link to="/hello">hello</router-link>
				<router-link to="/car">car</router-link>
        <router-link to="/login">{{name}}</router-link>
			</li>
		</ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed:{
    name:function(){
      return this.$store.state.username
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-exact-active{
	background-color: #FF0000;
}
</style>
