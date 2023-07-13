import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'antd'

const Layout = ({children,history}) => {

  const goTargetPage = (url)=> {
    history.push(url)
  }

  return (
    <div>
      <h1>全局的基础模版</h1>
      <Link to="/dashboard">跳转到图表界面</Link>
      <Button onClick={()=>goTargetPage(`/user/123`)}>使用点击事件 + hsitoryapi的形式进行界面跳转user界面</Button>
      <br />
      <Button onClick={()=>goTargetPage('/')}>使用点击事件 + hsitoryapi的形式进行界面跳转首页面</Button>
      <hr />
      {children}
    </div>
  )
}

export default Layout
