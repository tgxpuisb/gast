"use client"

import CustomNav from "@/components/CustomNav";
import { Button, Drawer, Input, Select, Spin, FloatButton } from "antd";
import '@ant-design/v5-patch-for-react-19';
import { createRoot } from 'react-dom/client';
import { unstableSetRender } from 'antd';
import Link from "next/link";
import { useState } from "react";
import { chunk, cloneDeep, random } from 'lodash'
import Markdown from "react-markdown";
import { LinkOutlined } from '@ant-design/icons';
import { Sender } from '@ant-design/x';

unstableSetRender((node, container) => {
  container._reactRoot ||= createRoot(container);
  const root = container._reactRoot;
  root.render(node);
  return async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    root.unmount();
  };
});

const { Search } = Input

// 模拟政策数据
const policies = [
  { id: "1", title: "关于推进智能制造产业创新发展的指导意见" },
  { id: "2", title: "转型升级专项扶持计划" },
  { id: "3", title: "贵阳国家高新区关于进一步加快高新技术企业培育的政策" }
  // ... 更多政策
]
const policyDetail = {
  summary: "本政策旨在推动智能制造产业创新发展，提升产业竞争力...",
  requirements: ["注册资本不低于500万元", "具有自主知识产权", "研发投入占比不低于5%"],
  subsidies: ["研发补贴：最高500万元", "设备补贴：最高300万元", "人才补贴：每人每年最高10万元"],
}

export default function IntelligentEnterprise() {

  const [open, setOpen] = useState<boolean>(false)

  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    {
      role: "assistant",
      content: `您好！我是您的政策解读助手。您正在查看《${policies[2].title}》，请问有什么想了解的内容吗？`,
    },
  ])
  const [input, setInput] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = input
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])

    // 模拟AI响应
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `关于《${policies[2].title}》中的${userMessage}，我为您找到以下相关内容：\n\n这个政策主要强调...`,
        },
      ])
    }, 1000)
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
            onSearch={() => {}}
          />
          <div className="flex gap-y-1 flex-col">
            {policies.map(it => {
              return <Button type={it.id === '3' ?  'primary' : "text"} key={it.id} className="font-medium">《{it.title}》</Button>
            })}
          </div>
        </div>
        
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col h-full">
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-100"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex gap-2">
          <Sender
                // ref={senderRef}
                prefix={
                  <Button
                    type="text"
                    icon={<LinkOutlined />}
                    onClick={() => {
                    }}
                  />
                }
                // value={text}
                // onChange={setText}
                placeholder="输入您的问题..."
                onPasteFile={(file) => {
                }}
                onSubmit={() => {
                }}
              />
          </div>
        </form>
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