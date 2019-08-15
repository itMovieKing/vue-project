<template>
    <nav>
        <div class="main">
            <img src='/static/img/logo.svg'/>
            <div class="nav">
                <ul>
                    <li><router-link to="">首页</router-link></li>
                    <li><router-link to="">产品与服务</router-link></li>
                    <li><router-link to="">关于我们 </router-link></li>
                    <li><router-link to="">帮助 </router-link></li>
                    <li><router-link to="">合作伙伴</router-link></li>
                </ul>
            </div>
            <div>
                <span></span>
                <img src={{imgurl}}/>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name:'Nav',
    data(){
        return {
            imgurl:'/static/img/guojia.svg'
        }
    }
}
</script>

