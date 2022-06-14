import React from "react";
import {LoadingOutlined } from '@ant-design/icons';
import './index.less'

const Loading = ()=>{

    return(
        <div className="loading">
        <LoadingOutlined style={{color:'#40a9ff',fontSize:'80px'}}/>
        </div>
    )
}



export default Loading;