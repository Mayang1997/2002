// 如果没有使用default 意味着可以导出多个,可以理解为导出了一个对象,这些被导出元素
// 都是这个对象的属性

export var obj0 = {
    a:function(){
        console.log(this.b);
    },
    b:90
}

export var obj1 = {
    a1:function(){
        console.log(this.b);
    },
    b:666
}
