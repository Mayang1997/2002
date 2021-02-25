// 导入依赖属性
import { observable, action } from 'mobx';

// observable - 用来定义可共享的数据
// action(动作) - 用于修改状态的方法，是任意一段可以改变状态的代码。用户事件、后端数据推送、预定事件

export default class CountStore{

    @observable list = [];
}