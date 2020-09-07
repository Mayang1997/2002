// define 不仅有导出得功能，还有导入
// 导入 a.js 模块
define(["./a"],function(obj){
    return {
        run:function(){
            // 执行run方法时，执行 a.js模块得 b方法
            obj.b()
        }
    }
})