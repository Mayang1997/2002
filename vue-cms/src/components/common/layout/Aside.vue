<template>
    <div class="cms-interface-head">
        <div class="logo">
            <el-avatar shape="circle" :size="100" :src="url"></el-avatar>
        </div>
        <el-menu
            default-active="2"
            :router='true'
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu :index="sub.id+''" v-for='sub in route' :key='sub.id'>
                <template slot="title">
                    <i :class='sub.icon'></i>  
                    <span v-text='sub.title'></span>
                </template>
           
                <el-menu-item 
                    v-for='itme in sub.children'
                    :key='itme.id'
                    :index="itme.id+''"
                    v-text='itme.title'
                    :route='{ "path": itme.path, "component": itme.comm}'
                >
                </el-menu-item>
            </el-submenu>
        </el-menu>

    </div>
</template>

<script>
import route from '@/utils/navs.js';
export default {
    data:function(){
        return {
            route,
            url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2092603999,2989124157&fm=26&gp=0.jpg'
        }
    },
    methods:{
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang="scss" scoped>
.cms-interface-head{
    
    width: 200px;
    .logo{
        height: 120px;
        text-align: center;
    }
}

.el-menu{
  overflow: auto;
}
</style>