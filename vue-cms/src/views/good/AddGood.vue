<template>
    <div class="cms-addgood">
        <!-- 首页 -->
        <el-row type='flex' justify='center'>
            <el-col :span="24">
                <span class="cms-addgood-title">新增商品页</span>
            </el-col>
        </el-row>

        <!-- 第一行 -->
        <el-row type='flex' align='middle'>
            <el-col :span="4">
                <span>商品名称：</span>
            </el-col>
             <el-col :span="20">
                <el-input v-model="info.name" placeholder="请输入商品名称"></el-input>
            </el-col>
        </el-row>

         <!-- 第二行 -->
        <el-row type='flex' >
            <el-col :span="4">
                <span>商品简介：</span>
            </el-col>
             <el-col :span="20">
                <el-input
                    type="textarea"
                    :rows="3"
                    placeholder="请输入商品详情内容"
                    v-model="info.desc">
                </el-input>
            </el-col>
        </el-row>

         <!-- 第三行 -->
        <el-row type='flex' align='middle'>
            <el-col :span="4">
                <span>商品价格：</span>
            </el-col>
             <el-col :span="6">
                <el-input v-model="info.price" placeholder="请输入商品价格"></el-input>
            </el-col>
        </el-row>

        <!-- 第四行 -->
        <el-row type='flex' align='middle'>
            <el-col :span="4">
                <span>商品品类：</span>
            </el-col>
             <el-col :span="6">
                <Selects v-model='info.cate' />
            </el-col>
        </el-row>

        <!-- 第五行 -->
        <el-row type='flex' align='middle'>
            <el-col :span="4">
                <span>商品图片：</span>
            </el-col>
             <el-col :span="9">
                <el-upload
                    class="avatar-uploader"
                    action="http://localhost:8080/api/v1/uplaod/imgs"
                    :show-file-list="false"
                    :on-success="imgUpload"
                    >
                    <img v-if="info.img" :src="Img.imgUrl+info.img" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-col>
        </el-row>

        <!-- 第六行 -->
        <el-row type='flex' align='middle'>
            <el-col :span="4">
                <span>商品热销：</span>
            </el-col>
             <el-col :span="3">
                <el-switch
                    v-model="info.hot"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                </el-switch>
            </el-col>
        </el-row>

        <!-- 第七行 -->
        <el-row type='flex' align='middle' >
            <el-col :span="4">
                <span>商品排名：</span>
            </el-col>
             <el-col :span="4">
                <el-input v-model="info.rank" placeholder="请输入商品排名"></el-input>
            </el-col>
        </el-row>

        <el-row type='flex' justify='center'>
            <el-col :span="24">
                <el-button type="success" round size="medium" @click="submit">提交</el-button>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
import Selects from '@/components/common/select/Selects.vue';
import Img from '@/utils/imgUrl.js'
export default {
    components:{
        Selects
    },
    data:function(){
        return {
            Img,
            info: {
                name: '',
                desc: '',
                price: '',
                cate: '',
                img: '',
                hot: false,
                rank: 0
            },
            imageUrl: ''
        }
    },
    methods:{
        // 新增商品
        submit(){
            if(!this.info.name) return this.$message('表格不能为空');
            if(!this.info.desc) return this.$message('表格不能为空');
            if((/^\d$/.test(this.info.price))) return this.$message('价格为数字');
            if(!this.info.cate) return this.$message('品类不能为空');
            this.$http.fetchCreateGood(this.info).then(()=>{
                this.$message({
                    message: '商品增加成功',
                    type: 'success'
                });
            })
            this.info = {
                name: '',
                desc: '',
                price: '',
                cate: '',
                img: '',
                hot: false,
                rank: 0
            }   
        },
        // 图片上传完成后保存路径
        imgUpload(res) {
            // 保存上传成功的图片路径
            this.info.img = res.data.url
        }
    }
}
</script>

<style lang='scss' scoped>
.el-row{
    margin: 15px 0;
}
.cms-addgood{
    width: 500px;
    margin: 0 auto;
}
.cms-addgood-title{
    font-size: 28px;
    font-weight: bold;
    color: #303133;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
.el-upload {
  background-color: #fff;
}
</style>