// 首页选项
let Home = ()=>import('@/views/home/Home.vue');
let Analysis = ()=>import('@/views/home/Analysis.vue');
let Introduce = ()=>import('@/views/home/Introduce.vue');


// 商品管理
let AddGood = ()=>import('@/views/good/AddGood.vue');
let Editor = ()=>import('@/views/good/Editor.vue');
let Good = ()=>import('@/views/good/Good.vue');
let GoodSort = ()=>import('@/views/good/GoodSort.vue');


// 上传/广告管理
let Upload = ()=>import('@/views/upload/Upload.vue');


// 聊天室
let Chat = ()=>import('@/views/chatroom/Chat.vue');



// 导出路由集合
export default [
    // 一级路由
    {
        id: 1,
        title: '首页管理',
        icon: 'el-icon-location',
        // 二级路由
        children:[
            {id: 11, path: '/home', comm: Home, title:'首页',icon: 'el-icon-user-solid'},
            {id: 12, path: '/introduce', comm: Introduce, title:'概括',icon: ''},
            {id: 13, path: '/analysis', comm: Analysis, title:'统计',icon: ''}
        ]
    },
    {
        id: 2,
        title: '商品管理',
        icon: 'el-icon-shopping-cart-full',
        children:[
            {id: 21, path: '/good', comm: Good, title:'商品列表',icon: ''},  
            {id: 22, path: '/addgood', comm: AddGood, title:'新增商品',icon: ''},  
            {id: 23, path: '/editor', comm: Editor, title:'商品编辑',icon: ''},  
            {id: 24, path: '/goodsort', comm: GoodSort, title:'商品品类',icon: ''}
        ]
    },
    {
        id: 3,
        title: '上传管理',
        icon: 'el-icon-sell',
        children:[
            {id: 31, path: '/upload', comm: Upload, title:'发布',icon: ''}
        ]
    },
    {
        id: 4,
        title: '聊天室',
        icon: 'el-icon-chat-dot-square',
        children:[
            {id: 41, path: '/chat', comm: Chat, title:'交友中心',icon: ''}
        ]
    }
]