import Image from "next/image";
import { Menu } from "antd";
import classNames from "classnames";

export default function CustomNav(props: {
  className?: string
}) {
  return <div className={classNames("h-[160px] bg-[url(/images/nav_bg.png)] bg-no-repeat bg-center bg-cover", props.className)}>
    <div className="h-[120px] flex px-[64px] items-center justify-between">
      <a href="http://www.gast.org.cn/" >
        <Image src={'/images/logo.png'} width={480} height={75} alt="logo"/>
      </a>
      <div className="min-w-[600px]">
        <Menu
        items={[
           {
            label: '首页',
            key: 'home',
          },
          {
            label: '新闻中心',
            key: 'news'
          },
          {
            label: '科政通',
            key: 'science_policy'
          },
          {
            label: '科创通',
            key: 'science_technology'
          },
          {
            label: '智企通',
            key: 'intelligent_enterprise'
          },
          {
            label: '科普通',
            key: 'popularization_of_science'
          },
          {
            label: 'AI智库',
            key: 'think_tank'
          }
        ]}
        mode="horizontal"
        />
      </div>
    </div>
  </div>
}