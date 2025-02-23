"use client"

import CustomNav from "@/components/CustomNav"
import { Button } from "antd"
import ChatIcon from '../../../public/chat.svg'
import InfoIcon from '../../../public/info.svg'
import TrashIcon from '../../../public/trash.svg'
import UserIcon from '../../../public/user.svg'
import DolphinIcon from '../../../public/dolphin.svg'
import InfosIcon from '../../../public/infos.svg'
import DatabaseIcon from '../../../public/database.svg'
import { useState } from "react"
import { LinkOutlined } from '@ant-design/icons';
import { Sender } from '@ant-design/x';


const mockInfos = [
  {
    title: '为什么天空是蓝色的？',
    answer: ''
  },
  {
    title: '地球为什么会自转？',
    answer: ''
  }
]


export default function ThinkTank() {

  const [answer, setAnswer] = useState<string>()

  return <div className="flex flex-col h-full">
    <CustomNav className="w-full z-10" activieKey="think_tank" />
    <div className="flex overflow-hidden h-full flex-1">
      <div className="flex-[0_0_280px] p-5 border-r border-x-gray-200 flex flex-col items-center">
        <Button className="mb-4" type="primary" size="large" block icon={<ChatIcon />}>开启新对话</Button>
        <div className="w-full flex-1 overflow-y-auto min-h-0 border-b border-x-gray-200">
          {mockInfos.map(it => {
            return <div className="flex items-center h-12 mb-1 cursor-pointer px-2 hover:text-blue-600 text-black" key={it.title}>
              <InfoIcon />
              <span className="px-2">{it.title}</span>
            </div>
          })}
        </div>
        <div className="w-full">
          <div className="flex items-center h-12 mb-1 cursor-pointer px-2 hover:text-blue-600 text-black hover:bg-slate-100 rounded-lg">
            <TrashIcon />
            <span className="px-2">清空对话</span>
          </div>
          <div className="flex items-center h-12 mb-1 cursor-pointer px-2 hover:text-blue-600 text-black hover:bg-slate-100 rounded-lg">
            <UserIcon />
            <span className="px-2">用户设置</span>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto flex flex-col">
          {answer ? <div>
            回答
          </div> : <div className="flex-1 h-full flex flex-col justify-center">
            <div className="text-2xl flex items-center justify-center mb-16">
              <DolphinIcon className="mr-2"/>
              我是省科协AI智能助手，有什么可以帮您的么
            </div>
            <div className="flex justify-center">
              <div className="mr-20 border border-slate-200 rounded-2xl p-5">
                <div className="flex flex-col items-center text-base mb-4">
                  <InfosIcon />
                  <span className="font-semibold">示例</span>
                </div>
                <div className="px-3 py-1.5 w-[280px] bg-slate-100 hover:bg-slate-100 rounded-md mb-4 cursor-pointer">
                  "什么是喀斯特地貌？"
                </div>
                <div className="px-3 py-1.5 w-[280px] bg-slate-100 hover:bg-slate-100 rounded-md mb-4 cursor-pointer">
                  "贵州省最大的桥梁是哪一座？请给出详细数据"
                </div>
              </div>
              <div className="mr-20 last:mr-0 border border-slate-200 rounded-2xl p-5">
                <div className="flex flex-col items-center text-base mb-4">
                  <DatabaseIcon width={32} height={32}/>
                  <span className="font-semibold">知识库</span>
                </div>
                <div className="px-3 py-1.5 w-[280px] bg-slate-100 hover:bg-slate-100 rounded-md mb-4 cursor-pointer">
                  "贵州省科协近期举办的活动有哪些？请列举出来"
                </div>
                <div className="px-3 py-1.5 w-[280px] bg-slate-100 hover:bg-slate-100 rounded-md mb-4 cursor-pointer">
                  "请总结一下贵州省25年科技发展规划"
                </div>
              </div>
            </div>
          </div>}
          <div className="flex justify-center">
            <div className="py-10 w-[800px]">
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
                placeholder="请输入"
                onPasteFile={(file) => {
                }}
                onSubmit={() => {
                }}
              />
            </div>
          </div>
      </div>
    </div>
  </div>
}