import { Menu } from "antd";
import classNames from "classnames";
import logo from 'assets/images/logo.png'

import {
  Link
} from 'react-router-dom'

export default function CustomNav(props: {
  className?: string
  activieKey: string
}) {

  const items = [
    {
     label: <Link to="/gast">首页</Link>,
     key: 'home',
   },
   {
     label: '新闻中心',
     key: 'news'
   },
   {
     label: <Link to="/gast/science_policy">科政通</Link>,
     key: 'science_policy'
   },
   {
     label: '科创通',
     key: 'science_technology'
   },
   {
     label: <Link to="/gast/intelligent_enterprise">智企通</Link>,
     key: 'intelligent_enterprise'
   },
   {
     label: <Link to="/gast/popularization_of_science">科普通</Link>,
     key: 'popularization_of_science'
   },
   {
     label: <Link to="/gast/think_tank">AI智库</Link>,
     key: 'think_tank'
   }
 ]

  return <div className={classNames("h-[160px] bg-[url(/src/assets/images/nav_bg.png)] bg-no-repeat bg-center bg-cover", props.className)}>
    <div className="h-[120px] flex px-[64px] items-center justify-between">
      <a href="http://www.gast.org.cn/" >
        <img src={logo} width={480} height={75} alt="logo"/>
      </a>
      <div className="min-w-[600px]">
        <Menu
        activeKey={props.activieKey}
        items={items}
        mode="horizontal"
        />
      </div>
    </div>
  </div>
}