import React, {useState} from 'react';
import './assets/css/App.scss';

// 后台管理布局
import { Layout,Login } from '@/components/index.js';
// 路由
import { HashRouter } from 'react-router-dom';
// 导入store和相关依赖属性,与react组件形成关联
import store from '@/store';
// Provider:
import { Provider } from 'react-redux'; 


function App() {

  let [token, setToken] = useState(localStorage.getItem('token')) 

  function login(){
    setToken(localStorage.getItem('token'))
  }

  return (
    <HashRouter>
      {/* Provider: 让ract与redux形成关联 */}
      {/* store 注入数据 */}
      <Provider store={store}>
        {
          token ? <Layout /> : <Login onLogin={login} />
        }
        
      </Provider>
      
    </HashRouter>

  );
}

export default App;
