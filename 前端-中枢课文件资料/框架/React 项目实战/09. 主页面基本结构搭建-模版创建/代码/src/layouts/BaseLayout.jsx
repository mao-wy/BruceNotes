import React from 'react';
import { Layout,Menu } from 'antd';
const { Header, Sider, Content } = Layout;
import './BaseLayout.less'
import SideBar from '../components/SideBar';

const BaseLayout = ({ children }) => {
  return (
    <Layout className="container">
      <SideBar Sider={Sider} Menu={Menu}/>
      <Layout>
        <Header>Header</Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
