
import CustomNav from "../components/CustomNav";
import { Button, Input } from "antd";
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
  { id: "1", title: "关于发挥科技创新关键和中坚作用围绕“四新”主攻“四化”的实施方案" },
  { id: "2", title: "科技部办公厅 贵州省人民政府办公厅关于印发《“科技入黔”推动高质量发展行动方案》的通知" },
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

const answers: Record<string, string> = {
  '1': `
# 关于发挥科技创新关键和中坚作用围绕“四新”主攻“四化”的实施方案

## 主要内容
在“十四五”开局之际，为贯彻总书记的指示精神，贵州省提出了围绕“四新”主攻“四化”的实施方案，重点通过科技创新推动高质量发展。

### 1. 深刻领会总书记的重要指示精神
- 认识“四新”是总书记对贵州提出的新使命、新任务、新期待。
- 强调要围绕“四新”主攻“四化”，实施创新驱动，推动发展方式转型。

### 2. 总体要求和奋斗目标
- 通过科技创新贡献省内生产总值增长2000亿元，力争4100亿元。
- 高新技术产业产值达到1万亿元，创新能力提升，进入全国前15位。

### 3. 重点任务
- **培育项目先锋军**：支持重大科技项目，如大数据、智能建造、智能酿造等。
- **壮大企业主力军**：加强企业在技术创新体系中的地位，支持高新技术企业，促进企业研发。
- **建好平台集团军**：推动创新平台建设和重大科技基础设施的建设。
- **激活人才生力军**：通过精准引才和激励机制，汇聚科技创新人才。

## 扶持对象
- **企业**：重点扶持高新技术企业、中小型科技创新企业、规模以上企业等。
- **科研机构**：提供科技创新支持，包括现代山地特色高效农业科技、创新平台建设等。
- **人才**：聚焦高科技领域的科技人才、科研团队和技术骨干。

## 补贴金额
- **研发费用支持**：提供税收优惠、资金扶持等方式支持企业研发活动。
- **金融支持**：例如金融机构对研发活动的信贷支持目标达到3亿元以上。
- **项目支持**：重点项目可获得直接资金支持与创新平台建设补贴。

## 申请条件
- **企业**：需具备较强的研发能力和技术创新项目，尤其是在高新技术领域。
- **科研机构**：需在各领域进行科技创新，符合项目和平台建设要求。
- **人才**：需具备高层次技术创新能力，并能为贵州省发展作出贡献。

## 保障措施
- 加强领导，确保政策落实。
- 改进作风，扎实推进科技项目实施。
- 设立考核机制，督查项目进展，推动任务落实。
  `,
  '2': `
# 科技入黔推动高质量发展行动方案

## 政策摘要

**政策名称**：科技部办公厅 贵州省人民政府办公厅关于印发《“科技入黔”推动高质量发展行动方案》的通知

**背景与目标**：该政策旨在推动科技创新在贵州省的深度应用，以支持贵州的高质量发展，尤其是在产业转型、数字经济和生态文明建设方面的突破。目标是到2025年基本形成创新驱动的经济增长模式，2035年实现科技创新水平全国中上游。

## 主要内容与任务

### 1. 推动全域创新与建设区域创新高地
   - **目标**：建设创新型城市、县（市）及高新技术产业开发区。
   - **措施**：支持贵阳大数据产业技术创新试验区的发展，鼓励与东部省份科技园区的合作，提升省内辐射带动能力，发展高新技术企业孵化器。

### 2. 建设国家科技创新基地
   - **目标**：打造科技创新平台，提升贵州在资源开发、数字技术、节能降碳等领域的技术创新能力。
   - **措施**：支持贵州在矿产资源、空天科技等领域建设重大创新平台，推动科技成果转化和共享。

### 3. 提升企业技术创新能力
   - **目标**：促进企业特别是航空航天等领域的技术创新，推动传统产业升级。
   - **措施**：鼓励科技型企业承担国家科技项目，推动新一代信息技术的研发应用。

### 4. 加强农业领域科技创新
   - **目标**：支持乡村振兴战略，促进现代农业发展。
   - **措施**：支持农业技术攻关，推动山地特色高效农业的发展。

### 5. 推进绿色低碳技术创新
   - **目标**：推动绿色经济和生态文明建设。
   - **措施**：支持绿色矿产资源开发、碳捕获技术等领域的技术创新。

### 6. 加强科技人才队伍建设
   - **目标**：培养科技领军人才，提升贵州科技创新能力。
   - **措施**：支持科技创新平台建设，吸引外国高端人才。

### 7. 科技体制机制改革
   - **目标**：优化科技创新生态环境。
   - **措施**：推动“放管服”改革，探索股权期权激励等创新模式。

### 8. 深化与东部地区科技合作
   - **目标**：加强与东部地区的科技合作，提升科技创新能力。
   - **措施**：促进东部科研单位与贵州省的合作，推动数字经济领域的技术转移。

## 扶持对象

- 贵州省内的创新型城市、县（市）和高新技术产业开发区。
- 科技型企业，尤其是涉及航空航天、新能源、数字经济等领域的企业。
- 高校、科研院所以及参与科技创新的组织。
- 农业领域特别是与乡村振兴相关的创新项目。

## 申请条件

- 具备科技创新需求的地方政府、企业、高校、科研机构。
- 需符合贵州省重点产业和战略性新兴产业的支持方向。
- 项目应符合国家科技计划及相关政策要求。

## 补贴金额

具体补贴金额和资金支持的标准未明确列出，但政策提到会通过多种渠道和合作机制提供支持，包括资金、项目支持、科技平台建设等。

## 政策总结

《“科技入黔”推动高质量发展行动方案》旨在通过科技创新促进贵州省的产业转型、科技进步和生态文明建设。政策不仅关注科技研发，还注重加强人才培养和深化地区合作，推动贵州在科技创新领域实现质的飞跃。
  `,
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

  const [writing, setWriting] = useState<boolean>(false)

  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get('id')
  
  useEffect(() => {
    if (id && policies.find(it => it.id === id)) {
      setSelectedPloicy(id)
    }
  }, [id])
  console.log("🚀 ~ IntelligentEnterprise ~ params:", urlParams)

  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    {
      role: "assistant",
      content: `您好！我是您的政策解读助手。请先选择政策,然后我会为您解析对应政策`,
    },
  ])
  const messageIndexRef = useRef<number>(messages.length)

  const analysisPolicy = async (id?: string) => {
    if (writing) {
      return
    }
    setWriting(true)
    const policy = policies.find(it => it.id === id) ?? policies[2]

    const responseTexts = randomSplitString(`关于《${policy.title}》，我为您做了如下摘要：\n\n${answers[id ?? '3']}`)

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
    setWriting(false)
  }

  useEffect(() => {
    if (selectedPloicy) {
      setMessages([
        {
          role: "assistant",
          content: `您好！我是您的政策解读助手。请先选择政策,然后我会为您解析对应政策`,
        },
      ])
      const policy = policies.find(it => it.id === selectedPloicy) ?? policies[2]
      setTimeout(() => {
        analysisPolicy(policy.id).then(() => {
          setMessages(prev => prev.concat({
            role: "assistant",
            content: `您好！我是您的政策解读助手。您正在查看《${policy.title}》，请问有什么想了解的内容吗？`,
          }))
        })
      }, 100)      
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

    if (writing) {
      return
    }
    setWriting(true)

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
    
    setWriting(false)
  }

  return <div className="flex flex-col h-full">
    
    <CustomNav className="w-full" activieKey="intelligent_enterprise" />
    <div className="flex-1 overflow-hidden h-full min-h-0 flex">
      <div className="flex-[0_0_320px] h-full py-6 ">
        <div className="h-full border-r border-slate-300 px-4">
          <Search
            disabled={writing}
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
                disabled={writing}
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
                disabled={!selectedPloicy || writing}
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
    </div>
      
  </div>
}