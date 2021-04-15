<template>
    <div class="cms-goodsort">
        <div class="cms-goodsort-title">商品管理</div>
        <div class="cms-goodsort-cate">
            <el-tabs :tab-position="tabPosition" style="height: 200px;">
                <el-tab-pane 
                    v-for='itme in data' 
                    :key='itme.id'
                    :label="itme.label"
                >
                    <el-row type='flex' align='middle'>
                        <el-col :span="4">
                            <span>商品名称：</span>
                        </el-col>
                        <el-col :span="12">
                            <el-input v-model="cate" placeholder="请输入商品名称"></el-input>
                        </el-col>
                    </el-row>
                    <el-row type='flex' align='middle'>
                        <el-col :span="4">
                            <span>英文名称：</span>
                        </el-col>
                        <el-col :span="12">
                            <el-input v-model="cate_zh" placeholder="请输入商品名称"></el-input>
                        </el-col>
                    </el-row>
                    <el-row type='flex' justify='center'>
                        <el-col :span="24">
                            <el-button 
                                type="success" 
                                round 
                                size="medium" 
                                v-text='itme.buttext'
                                @click='submit(itme.type)'
                                >
                            </el-button>
                        </el-col>
                    </el-row>
                </el-tab-pane>

                <el-tab-pane label="品类查询">

                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            tabPosition: 'left',
            data:[
                {id: 1, label: '新增品类', buttext:'提交', type: 'add'},
                {id: 2, label: '品类修改', buttext:'修改', type: 'update'},
                {id: 3, label: '品类删除', buttext:'删除', type: 'remove'}
            ],
            cate: '',
            cate_zh: '',
            list:[]
        }
    },
    methods:{
        submit(type){
            if(!this.cate || !this.cate_zh) return this.$message({message: '品类不能为空',type: 'warning'});
            if(type === 'add'){
                // 新增品类
                this.$http.fetchAddCate({cate: this.cate, cate_zh: this.cate_zh}).then(()=>{
                    this.$message({message: '添加品类成功',type: 'success'});
                    this.cate = '';
                    this.cate_zh = '';
                })
            }
        }
       
    }
}
</script>

<style lang='scss' scoped>
.cms-goodsort{
    width: 100%;
    height: 100%;
}
.cms-goodsort-cate{
    width: 100%;
    height: 100%;
}
.cms-goodsort-title{
    font-size: 26px;
    font-weight: bold;
    color: #303133;
}
.el-tabs {
        width: 800px; 
        min-height: 400px;
        margin: 50px auto 0;
    }   
.el-tabs__content{
    display: flex;
    .el-row{
        margin: 30px 0 0;
        justify-content: center;
    }
}
</style>