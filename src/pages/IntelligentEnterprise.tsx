
import CustomNav from "../components/CustomNav";
import { Button, Drawer, Input,FloatButton } from "antd";
import { useEffect, useRef, useState } from "react";
// import Markdown from "react-markdown";
import { LinkOutlined } from '@ant-design/icons';
import { Sender } from '@ant-design/x';
import Markdown from 'react-markdown'
import { randomSplitString, wait } from "src/utils";
import { cloneDeep } from "lodash-es";
import { smoothScrollToBottom } from 'src/utils'


const { Search } = Input

// 模拟政策数据
const policies = [
  { id: "1", title: "强化科技赋能支撑 助推水利高质量发展" },
  { id: "2", title: "主动作为 勇于担当 奋力推进烟草高质量发展" },
  { id: "3", title: "贵阳国家高新区关于进一步加快高新技术企业培育的政策" },
  { id: "4", title: "中华人民共和国科学技术普及法"},
  { id: "5", title: "关于进一步加强科协所属科技社团规范建设的意见"},
    {
      "id": "6",
      "title": "踔厉奋发建功新时代 担当作为取得新成效"
    },
    {
      "id": "7",
      "title": "党建引领学会发展，立足农业产业发展助力乡村振兴"
    },
    {
      "id": "8",
      "title": "推动党建与业务融合 提升科技摄影服务能力"
    },
    {
      "id": "9",
      "title": "“不忘初心、踔厉前行” ——积极发挥科技类社会组织作用"
    },
    {
      "id": "10",
      "title": "知识产权赋能创新发展"
    },
    {
      "id": "11",
      "title": "党建促会建 发挥桥梁纽带作用  平台引人才 提升服务创新能力"
    }
]
const policyDetail = {
  summary: "本政策旨在推动智能制造产业创新发展，提升产业竞争力...",
  requirements: ["注册资本不低于500万元", "具有自主知识产权", "研发投入占比不低于5%"],
  subsidies: ["研发补贴：最高500万元", "设备补贴：最高300万元", "人才补贴：每人每年最高10万元"],
}

const answers = {
  '3': `\n
## 摘要:
贵阳国家高新区管委会发布了《贵阳国家高新区关于进一步加快高新技术企业培育的政策》，旨在加快高新技术企业的培育，强化企业创新主体地位，优化创新资源和要素配置。政策包括推进企业注册登记便捷化、提供专业技术服务、促进科技成果转化、支持企业建立专业技术机构、鼓励科技项目立项、加强知识产权创造、提升企业内部管理能力、加强高新技术企业招引、支持双创孵化载体培育高新技术企业以及鼓励企业申报高新技术企业等措施。政策自发布之日起施行，有效期3年，适用于注册、税收、统计关系在贵阳国家高新区的企业
以下是申请条件和补贴金额的概述：

## 申请条件：

1. 企业必须在贵阳国家高新区内注册，并且其税收和统计关系也在该区。
2. 企业需符合高新技术企业的认定标准，并积极参与高新技术企业的申报工作。
3. 企业需在知识产权创造能力提升方面取得成效，或在双创孵化载体中首次被认定为高新技术企业。
4. 企业需按照政策要求完成高新技术企业的全部申报工作，并取得申报受理回执单。

## 补贴金额：

1. 对于在知识产权创造能力提升方面取得优秀成效的企业，给予1万元奖励；取得良好成效的，给予0.5万元奖励。
2. 对于入驻双创孵化载体并首次认定为高新技术企业的，每认定1家给予载体0.5万元奖励。
3. 对于按流程完成高新技术企业全部申报工作并取得申报受理回执单的企业，给予0.5万元一次性补助。
4. 请注意，具体的申请流程、条件和补贴金额可能会根据贵阳国家高新区管委会的进一步解释和实施细则有所调整，因此建议有意申请的企业或个人直接咨询相关部门以获取最新和最准确的信息。

`
}

export default function IntelligentEnterprise() {

  const [selectedPloicy, setSelectedPloicy] = useState<string>()
  const [search, setSearch] = useState<string>('')

  const [open, setOpen] = useState<boolean>(false)

  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    {
      role: "assistant",
      content: `您好！我是您的政策解读助手。请先选择政策,然后我会为您解析对应政策`,
    },
  ])
  const messageIndexRef = useRef<number>(messages.length)

  useEffect(() => {
    if (selectedPloicy) {
      const policy = policies.find(it => it.id === selectedPloicy) ?? policies[2]
      setMessages([
        {
          role: "assistant",
          content: `您好！我是您的政策解读助手。您正在查看《${policy.title}》，请问有什么想了解的内容吗？`,
        },
      ])
    } else {
      setMessages([
        {
          role: "assistant",
          content: `您好！我是您的政策解读助手。请先选择政策,然后我会为您解析对应政策`,
        },
      ])
    }
  }, [selectedPloicy])

  const scrollElementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messageIndexRef.current = messages.length

    if (!scrollElementRef.current || !scrollElementRef.current.parentElement) {
      return
    }
    smoothScrollToBottom(scrollElementRef.current.parentElement)

  }, [messages])
  const [input, setInput] = useState<string>("")

  const handleSubmit = async () => {
    if (!input.trim()) return

    const userMessage = input
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])

    // 模拟AI响应

    await wait(400)
   
    const policy = policies.find(it => it.id === selectedPloicy) ?? policies[2]

    const responseTexts = randomSplitString(`关于《${policy.title}》中的${userMessage}，我为您做了如下摘要：\n\n${answers['3']}`)

    const index = messageIndexRef.current

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: '',
      },
    ])

    while(responseTexts.length > 0) {
      await wait(150)
      setMessages((prev) => {
        prev[index].content += responseTexts.shift() ?? ''
        return cloneDeep(prev)
      })
    }
    
  }

  return <div className="flex flex-col h-full">
    
    <CustomNav className="w-full" activieKey="intelligent_enterprise" />
    <div className="flex-1 overflow-hidden h-full min-h-0 flex">
      <div className="flex-[0_0_320px] h-full py-6 ">
        <div className="h-full border-r border-slate-300 px-4">
          <Search
            className="mb-4"
            placeholder="搜索相关政策"
            allowClear
            enterButton="Search"
            size="large"
            onClear={() => {
              setSearch('')
            }}
            onSearch={(value) => {
              setSearch(value)
            }}
          />
          <div className="flex gap-y-1 flex-col">
            {policies.filter(it => {
              if (!search) {
                return true
              }
              return it.title.includes(search)
            }).map(it => {
              return <Button
                type={it.id === selectedPloicy ?  'primary' : "text"}
                key={it.id}
                className="font-medium"
                onClick={() => {
                  setSelectedPloicy(it.id)
                }}
              >《{it.title}》</Button>
            })}
          </div>
        </div>
        
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col h-full">
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4" ref={scrollElementRef}>
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-100"
                  }`}
                >
                  <Markdown
                    className={'markdown-area'}
                    children={message.content}
                    components={{
                      // @ts-expect-error https://github.com/remarkjs/react-markdown?tab=readme-ov-file#appendix-b-components
                      pre: 'div',
                      p: 'div',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div  className="p-4 border-t">
          <div className="flex gap-2">
          <Sender
                // ref={senderRef}
                disabled={!selectedPloicy}
                prefix={
                  <Button
                    type="text"
                    icon={<LinkOutlined />}
                    onClick={() => {
                    }}
                  />
                }
                value={input}
                onChange={setInput}
                placeholder="输入您的问题..."
                // onPasteFile={(file) => {
                // }}
                onSubmit={() => {
                  handleSubmit()
                }}
              />
          </div>
        </div>
      </div>
      </div>
      <FloatButton onClick={() => setOpen(true)} description="政策摘要" style={{bottom: 124}}/>
      <Drawer
        open={open} width={500} onClose={() => setOpen(false)}
        title="政策解析"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">政策摘要</h3>
            <p className="text-gray-600">{policyDetail.summary}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">申请条件</h3>
            <ul className="list-disc pl-5 space-y-2">
              {policyDetail.requirements.map((req, index) => (
                <li key={index} className="text-gray-600">
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">补贴金额</h3>
            <ul className="list-disc pl-5 space-y-2">
              {policyDetail.subsidies.map((subsidy, index) => (
                <li key={index} className="text-gray-600">
                  {subsidy}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Drawer>
    </div>
      
  </div>
}