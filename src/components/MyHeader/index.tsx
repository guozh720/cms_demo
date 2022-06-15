import { Dropdown, Menu } from "antd";
import React from "react";
import { DownOutlined } from '@ant-design/icons'
import "./index.less"

const MyHeader = () => {
  const menu = (
    <Menu>
      <Menu.Item>修改资料</Menu.Item>
      <Menu.Divider />
      <Menu.Item>退出登录</Menu.Item>
    </Menu>
  );

  return (
    <header>
      <img style={{ marginTop: "10px" }} src="https://www.keaidian.com/uploads/allimg/190424/24110307_8.jpg" height={50} alt="" />
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="!#" onClick={(e) => e.preventDefault()}>
          <img className="avatar" width={40} style={{ borderRadius: '50%', marginRight: '20px' }} src="http://codesohigh.com/images/logo.png" alt="" />
          <span>匿名用户</span> <DownOutlined />
        </a>

      </Dropdown>
    </header>
  )
}


export default MyHeader;