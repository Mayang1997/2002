import React, { useState } from 'react';
import { Upload } from 'antd';

import img from '@/utils/imgs';

const MyUpload = (props)=>{
    const [fileList, setFileList] = useState([]);
    
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        if(fileList[0]) {
            fileList.forEach(item=>{
                if(item.response && item.response.data) {
                    // let url = 
                    props.onChange(item.response.data.url)
                }
            })
        }
    };
    

    return (
        <Upload
            action={img.imgUrl+'/api/v1/uplaod/imgs'}
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
        >
            {fileList.length < 5 && '+ Upload'}
        </Upload>
    )
}

export default MyUpload