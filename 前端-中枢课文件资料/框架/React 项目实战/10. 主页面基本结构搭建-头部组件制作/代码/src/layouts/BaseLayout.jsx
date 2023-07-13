import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
const { Header, Sider, Content } = Layout;
import './BaseLayout.less';
import SideBar from '../components/SideBar';
import CommonHeader from '../components/CommonHeader';
import { history } from 'umi';
import NotFoundPage from '../pages/404Page'

const BaseLayout = ({ children }) => {
  const [collapse, setCollapse] = useState(false);
  const { location } = history;
  const routeList = JSON.parse(sessionStorage.getItem('routeList'));

  //- 定义一个当前界面的判断函数，第一判断当前界面是不是根域下，直接跳转到路由对象的首页面，如果说当前访问的界面没有在路由表内部，直接跳转到404界面
  const isIncludesPage = () => {
    if (location.pathname === '/') {
      //- 路由表根据权限返回，返回路由表的第一项内容
      history.replace(routeList[0].route)
      return false;
    }
    return routeList.some(item => item.route === location.pathname);
  }

  //- 改变侧边栏的宽度展示
  const changeCollapse = () => setCollapse(!collapse);

  return (
    <Layout className="container">
      <SideBar Sider={Sider} Menu={Menu} collapse={collapse} />
      <Layout>
        <CommonHeader
          Header={Header}
          collapse={collapse}
          changeCollapse={changeCollapse}
        />
        <Content>{isIncludesPage() ? children : <NotFoundPage />}</Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
