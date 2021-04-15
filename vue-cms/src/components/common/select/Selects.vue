<template>
    <div class="cms-select">
        <el-select placeholder="请选择品类" :value='value' @change='cateChange'>
            <el-option
                v-for="item in cates"
                :key="item._id"
                :label="item.cate"
                :value="item.cate_zh">
            </el-option>
        </el-select>
    </div>
</template>

<script>
export default {
    props:{
        value:{ type: String, require: true}
    },
    data:function(){
        return {
            cates:[]
        }
    },
    mounted(){
        this.$http.fetchCates({}).then(res=>{
            this.cates = res
        })
    },
    methods:{
        cateChange(val){
            this.$emit('input', val)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>