<template>
    <div>this is Person
        <button @click="getdata">hi</button>
        <p>{{name}}</p>
        <!-- <p>{{data}}</p> -->
        <div>
            <h3>个人中心</h3>
            <div>
                <p>{{data.groupname}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Person',
    data(){
        return {
            data:this.$store.state.data
        }
    },
    methods:{
        getdata:function(){
            console.log(this.$store.state.data) ;
            console.log(this.$store.state.da);
            console.log(this.$store.state.da.name);
            console.log(this.$store.state.username)
        },
        test:function(){
            console.log('test');
        }
    },
    computed:{
        name(){
            return this.$store.state.data.groupname
        }
    }
    
}
</script>
<style>
h3{
    border-bottom:1px solid #000;
}
</style>


