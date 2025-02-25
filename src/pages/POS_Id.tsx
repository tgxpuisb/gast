"use client"

import CustomNav from "../components/CustomNav"
import { useParams } from 'react-router-dom'
import { LinkOutlined } from '@ant-design/icons';
import { Sender } from '@ant-design/x';
import Markdown from "react-markdown";
import { Button, Drawer, Tooltip } from "antd";
import { useState } from "react";
import robot from 'src/assets/images/robot.png'

const IDMap:Record<string, {title: string, content: string}> = {
  '1': {
    title: '贵州桥梁',
    content: `# 贵州桥梁：山间的奇迹

![贵州桥梁](/images/pop/1.png)  
*图：贵州某著名桥梁，横跨山谷，气势恢宏。*

## 引言
贵州，位于中国西南部，是一个多山的省份。由于其独特的地形，贵州被誉为“桥梁博物馆”。这里的桥梁不仅数量众多，而且种类丰富，设计独特，堪称工程奇迹。

## 贵州桥梁的特点

### 1. **多样化的桥梁类型**
贵州的桥梁类型多样，包括悬索桥、拱桥、斜拉桥等。每种桥梁都有其独特的设计和建造方法，以适应不同的地理环境。

### 2. **高超的工程技术**
由于贵州地形复杂，桥梁建设需要克服许多技术难题。工程师们采用了先进的技术和材料，确保桥梁的稳固和安全。

### 3. **美丽的自然景观**
贵州桥梁不仅是一项工程成就，也是一道美丽的风景线。许多桥梁横跨山谷，与周围的自然景观融为一体，成为游客们喜爱的拍照地点。

## 著名桥梁介绍

### 1. **北盘江大桥**
北盘江大桥是世界上最高的桥梁之一，桥面距离谷底高度超过500米。这座桥不仅是一项工程奇迹，也是一处壮观的旅游景点。

![北盘江大桥](/images/pop/beipanjiang.png)  
*图：北盘江大桥，横跨深谷，气势磅礴。*

### 2. **坝陵河大桥**
坝陵河大桥是中国第一座悬索桥，全长超过1000米。这座桥的设计和建造技术在当时处于世界领先水平。

![坝陵河大桥](/images/pop/balinghe.png)  
*图：坝陵河大桥，悬索设计，雄伟壮观。*

## 桥梁建设的意义

### 1. **促进经济发展**
贵州桥梁的建设极大地改善了当地的交通条件，促进了经济发展。桥梁连接了山区与外界，使得资源流通更加便捷。

### 2. **提升生活质量**
桥梁的建设不仅方便了人们的出行，也提升了当地居民的生活质量。许多偏远地区因为桥梁的建设而得以与外界联系，获得了更多的发展机会。

### 3. **展示科技实力**
贵州桥梁的建设展示了中国在桥梁工程领域的科技实力。这些桥梁不仅是工程技术的结晶，也是国家综合实力的体现。

## 结语
贵州桥梁是山间的奇迹，它们不仅连接了地理上的距离，也连接了人们的心。这些桥梁不仅是工程技术的杰作，也是人类智慧与自然和谐共存的象征。

---

*本文图片来源于网络，仅供参考。*`,
}
}

export default function POSDetail() {
  const params = useParams<{id: string}>()
  const id = params?.id!

  const infos = IDMap[id]
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="flex flex-col h-full">
      <CustomNav className="w-full z-10" activieKey="popularization_of_science" />
      <div className="overflow-hidden h-full flex-1 min-h-0">
        {infos && <div className="h-full overflow-y-auto">
          <div className="min-w-[1080px] w-[80%] mx-auto markdown-area">
            <Markdown>
              {infos.content}
            </Markdown>
          </div></div>}
      </div>
      <Tooltip title={"可以向我询问更多科普知识"} showArrow>
        <img className="absolute bottom-10 right-10" src={robot} width={200} height={200} onClick={() => {
          setOpen(true)
        }}/>
      </Tooltip>
      <Drawer open={open} width={500} onClose={() => setOpen(false)}>
        <div className="h-full flex flex-col">
          <div className="flex-1 min-h-0 ">

          </div>
            <div className="flex items-center justify-center">
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
              placeholder="详细说说北盘江大桥的数据"
              // onPasteFile={(file) => {
              // }}
              onSubmit={() => {
              }}
            />
          </div>
        </div>
        </div>
      </Drawer>
      
    </div>
  )
}