"use client"

import CustomNav from "@/components/CustomNav";
import { Button, Input, Select, Spin } from "antd";
import '@ant-design/v5-patch-for-react-19';
import { createRoot } from 'react-dom/client';
import { unstableSetRender } from 'antd';
import { useState } from "react";
import Markdown from "react-markdown";

unstableSetRender((node, container) => {
  container._reactRoot ||= createRoot(container);
  const root = container._reactRoot;
  root.render(node);
  return async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    root.unmount();
  };
});

const { TextArea } = Input

// 政策主题选项
const policyTopics = [
  "要素保障",
  "权益保护",
  "产业扶持",
  "融资专项",
  "企业减负",
  "公平竞争",
  "财税支持",
  "创业创新",
  "转型升级",
  "人才建设",
  "培训工程",
  "投资引导",
  "技术改造",
  "公共服务",
  "信用担保",
]

// 技术产品类型
const techProducts = [
  "大数据",
  "云计算",
  "集成电路",
  "信息通讯",
  "水电煤气",
  "农林牧渔业产品",
  "转基因",
  "工业制品",
  "智能制造",
  "软件",
  "生物医药",
  "区块链",
  "人工智能",
]

const SearchResult = [{
  label: '道坦坦股份有限公司',
  value: 'dtt'
}, {
  label: '道坦坦科技有限公司',
  value: 'dtt-tech'
}]

const renderMessage = (content: string) => {
  console.log(content)
  return <Markdown>
    {content}
  </Markdown>
}

const wait = (time: number) => {
  return new Promise(r => {
    setTimeout(r, time)
  })
}

export default function SciencePolicy() {


  const [searchValue, setSearchValue] = useState<string>('')
  const [options, setOptions] = useState<Array<{
    label: string
    value: string
  }>>([])

  const [policies, setPolicies] = useState<string[]>([])
  const [techs, setTechs] = useState<string[]>([])

  const [description, setDescription] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [messages, setMessages] = useState<Array<{ type: "user" | "assistant"; content: string }>>([])

console.log(messages)

  const handleSubmit = async () => {
    setIsLoading(true)
    setDescription('')
    const userMessage = `我的公司主要关注${policies}政策领域，专注于${techs}技术产品。${description}`
    setMessages((prev) => [...prev, { type: "user", content: userMessage }])

    await wait(3000)
    const index = 1
    setIsLoading(false)
  
    const responses = `根据您的需求，我为您找到了以下匹配的政策：

1. 《[关于推进**${techs[0]}**产业创新发展的指导意见](/intelligent_enterprise?id=1)》
  - 重点支持领域：**${policies[0]}**
  - 补贴金额：最高可达500万元
  - 申请条件：注册满2年的科技企业
    
2. 《[贵阳国家高新区关于进一步加快高新技术企业培育的政策](/intelligent_enterprise?id=2)》
  - 针对**${techs[0]}**领域的企业
  - 提供税收优惠和研发补贴
  - 可获得专项资金支持
    
建议您可以优先考虑申请这些政策支持。如果需要更详细的政策信息，我可以为您进一步解答。`
    // console.log(responses)
    
    setMessages((prev) => [...prev, { type: 'assistant', content: responses }])
  }

  return <div>
    
    <CustomNav className="w-full" activieKey="science_policy" />
    <Spin spinning={isLoading} tip="正在为您匹配合适的政策...">
    <div className="w-[80%] min-w-[1080px] mx-auto">
      <div className="space-y-4 mb-4">
        <h2 className="text-xl font-semibold text-blue-800">公司匹配</h2>
        <Select
          showSearch
          size="large"
          style={{width: 400}}
          placeholder={"请输入您的公司名称, 如:道坦坦"}
          onChange={(value) => {
            setSearchValue(value)
          }}
          onSearch={() => {
            setTimeout(() => {
              setOptions(SearchResult)
            }, 1000)
          }}
          filterOption={false}
          options={options}
          notFoundContent={options.length === 0 ? <Spin size="small" /> : null}
        />
      </div>
      {searchValue && messages.length === 0 && 
        <>
          <div className="space-y-4 mb-4">
            <h2 className="text-xl font-semibold text-blue-800">请选择您感兴趣的政策主题</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {policyTopics.map((po) => (
                <Button
                  key={po}
                  type={policies.includes(po) ? "primary"  : "default"}
                  className="h-auto py-2 px-3 whitespace-normal text-center"
                  size="large"
                  onClick={() => {
                    if (policies.includes(po)) {
                      setPolicies(policies.filter(it => it !== po))
                    } else {
                      setPolicies(policies.concat(po))
                    }
                  }}
                >
                  {po}
                </Button>
              ))}
            </div>
          </div>
          <div className="space-y-4 mb-4">
            <h2 className="text-xl font-semibold text-blue-800">请选择您感兴趣的技术产品类型</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {techProducts.map((tech) => (
                <Button
                  key={tech}
                  type={techs.includes(tech) ? "primary"  : "default"}
                  className="h-auto py-2 px-3 whitespace-normal text-center"
                  size="large"
                  onClick={() => {
                    if (techs.includes(tech)) {
                      setTechs(techs.filter(it => it !== tech))
                    } else {
                      setTechs(techs.concat(tech))
                    }
                  }}
                >
                  {tech}
                </Button>
              ))}
            </div>
          </div>
        </>
      }
      {messages.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-blue-800">政策推荐</h2>
          <div className="space-y-4 markdown-area">
            {messages.map((message, index) => (
              <div key={index} className={`p-4 ${message.type === "user" ? "bg-blue-50" : "bg-white"}`}>
                {renderMessage(message.content)}
              </div>
            ))}
          </div>
        </div>
      )}
      {searchValue && <div className="space-y-4">
        <h2 className="text-xl font-semibold text-blue-800">请描述您的咨询问题</h2>
        <div className="space-y-4">
          <TextArea
            placeholder="请详细描述您公司目前的情况和需要的技术支持..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-[300px]"
            autoSize={{ minRows: 3, maxRows: 3 }}
          />
          <Button
            size="large"
            onClick={handleSubmit}
            disabled={!description.trim() || isLoading}
            className="w-full"
          >
            提交需求
          </Button>
        </div>
      </div>}
      
    </div>
    </Spin>
  </div>
}