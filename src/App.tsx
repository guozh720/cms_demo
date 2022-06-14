import React from "react";
import "./App.less";
import { Button } from "antd";
import { Outlet } from "react-router-dom";

const App = ()=>{
    return(
        <>
        <h2>
            App组件
        </h2>
      <Outlet/>
        </>
    );
}
export default App