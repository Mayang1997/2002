<template>
  <div class="cms-good">
    <div>商品列表</div>
    <div class="cms-good-tab">
      <!-- select选择框 -->
      <div class="cms-good-cate">
        <el-row type="flex" align="middle">
          <el-col :span="3">品类选择：</el-col>
          <el-col :span="4">
            <Selects v-model="cate" />
          </el-col>
        </el-row>
      </div>


      <!-- 表格 -->
      <el-table
        :data="data"
        style="width: 100%">

        <el-table-column
          label="日期"
          prop='create_time'
          width="180">
        </el-table-column>

        <el-table-column
          label="商品"
          width="180">
          <template slot-scope="scope">
                <img class="cms-good-img" :src="Img.imgUrl+scope.row.img">
                <!-- <div v-text="scope.row.name">商品名称</div> -->
          </template>
        </el-table-column>

        <el-table-column
          label="商品简介"
          prop='name'
          width="180">
        </el-table-column>

        <el-table-column
          label="商品价格"
          prop='price'
          width="180">
        </el-table-column>

        <el-table-column
          label="商品品类"
          prop='cate'
          width="180">
        </el-table-column>

        <el-table-column
          label="商品热度"
          prop='rank'
          width="180">
        </el-table-column>

        <!-- <el-table-column
          label="优先"
          prop='(hot ? "是" : "否")'
          width="180">
        </el-table-column> -->
        <el-table-column
          label="编辑"
          width="180">
          <template slot-scope="scope">
                <!-- <el-button 
                  type="primary"
                  @click="alterHandler(scope.row._id)" 
                  size="mini">
                  修改
                </el-button> -->
                <el-popover
                  placement="right"
                  width="600"
                  trigger="click">
                    <Popover :id='scope.row._id' />
                  <el-button slot="reference" size="mini">修改</el-button>
                </el-popover>

                <el-button 
                  type="danger" 
                  @click="removeHandler(scope.row._id)" 
                  size="mini">
                  删除
                </el-button>
          </template>
        </el-table-column>
      </el-table>


      <!-- 分页 -->
      <el-pagination
        small
        layout="prev, pager, next"
        :page-size='2'
        @current-change='pageChange'
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Img from '@/utils/imgUrl.js'
import Selects from "@/components/common/select/Selects.vue";
import Popover from "@/components/common/popover/popover.vue";
export default {
  components: { Selects,Popover },
  data: function () {
    return { 
      Img,
      cate: "",
      page: 1,
      size: 2,
      data: [],
      total: 10
    };
  },
  watch:{
    // 监听 下拉框的值
    cate(){
      this.page = 1;
      this.init()
    }
  },
  mounted(){
    this.init()
  },
  methods: {
    // 初始化商品列表
    init() {
      this.$http.fetchGoodAll({page: this.page,size: this.size,cate: this.cate}).then(res=>{
        this.data = res.list
        this.total = res.total
      })
    },
    // 捕获页码的变化
    pageChange(page){
      this.page = page
      this.init()
    },
    // 修改数据
    alterHandler(id){
      console.log(id)

    },
    // 删除商品
    removeHandler(id){
      console.log(id)
    }
  },
};
</script>

<style lang='scss' scoped>
.cms-good-cate {
  height: 46px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  line-height: 46px;
}
.el-pagination {
  text-align: right;
  height: 27px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  padding-top: 8px;
}
.cms-good-tab {
  margin-top: 30px;
}
.cms-good-img{
  display: block;
  width: 80px;
  height: 80px;
}
</style>