import React from 'react';

// 创建一个上下文 
// 上下文的作用就是解决层级较深的间接父子组件之间的数据传递问题，以避免繁琐的使用 props 一层一层传递

// React.createContext() - 可接收参数或者不填，参数时一个默认值
const ThemeCtx = React.createContext()

export default ThemeCtx