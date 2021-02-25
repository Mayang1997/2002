import CountStore from './modules/CountStore.js';
import UserStore from './communication/UserStore.js';


// observable - 用来定义可共享的数据
// action(动作) - 用于修改状态的方法，是任意一段可以改变状态的代码。用户事件、后端数据推送、预定事件

class Store{
    constructor(){
        // 实例化对象
        this.CountStore = new CountStore()
        this.UserStore = new UserStore()
    }
}

// 在 mobx 中，需要这样导出状态管理
export default new Store()