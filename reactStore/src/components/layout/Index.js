import React from 'react';

// layout 布局
import Aside from './Aside';
import Main from './Main';
import './style.scss'

export default class Layout extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='root-web'>
                {<Aside />}
                {<Main />}
            </div>
        )
    }
}