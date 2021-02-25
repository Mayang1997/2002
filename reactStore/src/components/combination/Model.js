import React from 'react';

// 封装复用组件 - 使用组合模式

export default function Model(props){
    
    return (
        <div className='modelBox'>
            {props.tit}
            <div className='model-con'>
                {props.con}
            </div>
            <div className='model-fot'>
                {props.fot}
                {props.cancel}
            </div>
        </div>
    )
}