import React from "react";
import "./App.less";
import { Layout,Menu,Breadcrumb } from "antd";
import {TeamOutlined,EditOutlined,ReadOutlined,SelectOutlined
,AccountBookOutlined} from  '@ant-design/icons';
import MyHeader from "components/MyHeader";
// import { Outlet } from "react-router-dom";

const {SubMenu} =Menu
const {Content,Sider} = Layout

const App = ()=>{
    return(
        <Layout  className="container">
          <MyHeader/>
        
        <Layout className="container_content" >
          <Sider
            theme="dark"
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
            }}
          >
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <SubMenu key="sub1" icon={<TeamOutlined />} title="小编">
                <Menu.Item key="1" icon={<EditOutlined />}>
                  文章编辑
                </Menu.Item>
                <Menu.Item key="2" icon={<ReadOutlined />}>
                  查看文章列表
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<TeamOutlined />} title="管理员">
                <Menu.Item key="3" icon={<EditOutlined />}>
                  文章编辑
                </Menu.Item>
                <Menu.Item key="4" icon={<ReadOutlined />} >
                  查看文章列表
                </Menu.Item>
                <Menu.Item key="5" icon={<SelectOutlined />}>
                  小编名单
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<AccountBookOutlined />} title="超级管理员">
                <Menu.Item key="6" icon={<EditOutlined />}>
                  文章编辑
                </Menu.Item>
                <Menu.Item key="7" icon={<ReadOutlined />}>
                  查看文章列表
                </Menu.Item>
                <Menu.Item key="8" icon={<SelectOutlined />}>
                  小编名单
                </Menu.Item>
                <Menu.Item key="9" icon={<TeamOutlined />}>
                  管理员名单
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content className="content">
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>文章编辑</Breadcrumb.Item>
            </Breadcrumb>
            <section className="content_main">
              {/* 在此处渲染页面内容 */}
             </section>
          </Content>
        </Layout>
        <footer style={{
          textAlign:"center",
          color:"#fff",
          height:"70px",
          lineHeight: "70px",
          background:"#001529",
        }}>
          Respect | Copyright © 2022 Author 你单排吧
          </footer>
      </Layout>
    );
}
export default App
//  <Outlet/>