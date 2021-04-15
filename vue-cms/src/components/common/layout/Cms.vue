<template>
    <div class="cms-interface">
        <el-container>
            <el-aside width="200px">
                <Aside></Aside>
            </el-aside>
            <el-container>
                <el-header>
                    <Header />
                </el-header>
                <el-main>
                    <Main />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    components:{
        Aside: ()=>import('./Aside'),
        Header: ()=>import('./Header'),
        Main: ()=>import('./Main')
    }
}
</script>

<style lang="scss" scoped>
.cms-interface,.el-container{
    width: 100%;
    height: 100%;
}

.el-header{
    margin: 0;
    background-color: #fff;
    color: #409EFF;
    text-align: center;
    border-bottom: 1px solid #ccc;
}

.el-aside {
    background-color: rgb(84, 92, 100);
    color: #333;
    line-height: 200px;
    overflow: hidden;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    min-width: 800px;
    text-align: center;
    overflow: hidden;
}

body > .el-container {
    margin-bottom: 40px;
}
.is-vertical{
    overflow: auto;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>