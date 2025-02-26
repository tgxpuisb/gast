import CustomNav from "../components/CustomNav"
import { Button } from "antd"
import ChatIcon from 'assets/chat.svg?react'
import InfoIcon from 'assets/info.svg?react'
import TrashIcon from 'assets/trash.svg?react'
import UserIcon from 'assets/user.svg?react'
import DolphinIcon from 'assets/dolphin.svg?react'
import InfosIcon from 'assets/infos.svg?react'
import DatabaseIcon from 'assets/database.svg?react'
import { useEffect, useRef, useState } from "react"
import { LinkOutlined } from '@ant-design/icons';
import { Sender } from '@ant-design/x';
import Markdown from "react-markdown";
import { randomSplitString, smoothScrollToBottom, wait } from "src/utils"
import { cloneDeep } from "lodash-es"

const mockInfos = [
  {
    id: 'blue',
    title: '为什么天空是蓝色的？',
    answer: ''
  },
  {
    id: 'earth',
    title: '地球为什么会自转？',
    answer: ''
  }
]

const answersMap: Record<string, string> = {
  karst: `
# 喀斯特地貌

## 什么是喀斯特地貌？

喀斯特地貌（Karst landscape）是由可溶性岩石（如石灰岩、白云岩、石膏等）在水流、风化和溶解作用下，经过长期演变形成的一种特殊地貌。该地貌的主要特征是：地下河流、洞窟、溶洞、溶沟、石峰、石柱等独特的景观。

## 喀斯特地貌的形成过程

1. **溶解作用**：水渗入岩石表面，与岩石中的矿物质发生反应，导致岩石溶解。
2. **水流作用**：通过水流不断地冲刷和侵蚀，导致地下空洞的形成。
3. **沉积作用**：溶解的矿物质重新沉积在洞穴中，形成石笋、石钟乳等。

## 喀斯特地貌的特点

- **地下溶洞**：随着地下水流的侵蚀，岩石逐渐形成大规模的洞穴。
- **石柱、石峰**：当水分蒸发或渗透到岩石表面时，剩余的矿物质逐渐形成独特的石柱或石峰。
- **溶沟**：水流沿岩石裂隙逐渐侵蚀形成的沟壑。

## 喀斯特地貌的分布

喀斯特地貌广泛分布在全球多个地区，尤其是石灰岩丰富的地区。典型的喀斯特地区包括：
- 中国的广西（如桂林）、云南（如石林）、贵州等地。
- 克罗地亚的普利特维采湖区。
- 美国的肖尼山脉、佛罗里达州等地。

## 喀斯特地貌的典型景点

- **桂林山水**：中国广西的喀斯特地貌，因其独特的峰林景观而闻名。
- **石林**：位于云南省的一个典型喀斯特地貌景区。
- **普利特维采湖群**：位于克罗地亚，因其美丽的溶洞、湖泊而成为世界著名的旅游胜地。

## 图片示例

![喀斯特地貌](/images/karst.png)

图中的景观展现了典型的喀斯特地貌，突出显示了溶洞和石柱等特点。

---

### 参考文献

- 《地球科学基础》, 李刚编著, 科学出版社.
- Wikipedia: [Karst](https://en.wikipedia.org/wiki/Karst)
  `,
  bridge: `
# 贵州省最大的桥梁：北盘江大桥

## 基本信息
- **名称**: 北盘江大桥
- **位置**: 贵州省六盘水市水城县与云南省宣威市交界处
- **跨越**: 北盘江
- **类型**: 斜拉桥
- **开通时间**: 2016年12月29日

## 详细数据
- **全长**: 1341.4米
- **主跨**: 720米
- **桥面高度**: 565米（世界最高桥面高度）
- **桥面宽度**: 24.5米
- **车道数**: 双向四车道
- **设计速度**: 80公里/小时
- **总投资**: 约10亿元人民币

## 结构特点
- **桥塔高度**: 269米
- **斜拉索数量**: 224根
- **桥面材料**: 钢桁梁
- **基础类型**: 钻孔灌注桩

## 建设意义
北盘江大桥是杭瑞高速公路的重要组成部分，连接了贵州和云南两省，极大地缩短了两地的交通时间，促进了区域经济发展。同时，该桥也是世界桥梁建设史上的一个重要里程碑，展示了中国在桥梁建设领域的技术实力。

## 荣誉与记录
- **世界最高桥面高度**: 565米
- **吉尼斯世界纪录**: 世界最高桥梁

## 图片
![北盘江大桥](/images/beipanjiang.png)

## 参考资料
- [北盘江大桥 - 百度百科](https://baike.baidu.com/item/北盘江大桥)
- [世界最高桥梁 - 吉尼斯世界纪录](https://www.guinnessworldrecords.com/world-records/highest-bridge)

  `,
  gz25: `
# 贵州省2025年科技发展规划总结

贵州省在2025年的科技发展规划中，围绕“四新”主攻“四化”，旨在通过科技创新推动经济社会的全面转型升级。以下是规划的主要内容：

## 1. **总体目标**
- **综合科技创新水平**：力争进入全国前20位:cite[7]:cite[8]:cite[9]。
- **研发投入**：全社会研发经费投入年均增速12%以上，基础研究经费占全社会R&D经费比重达到11%:cite[7]:cite[8]:cite[9]。
- **创新体系**：基本建成开放、协同、高效的科技创新体系，推动经济增长动力由要素驱动向创新驱动转变:cite[7]:cite[8]:cite[9]。

## 2. **重点任务**
### 2.1 **构建科技创新技术体系**
- **农业农村**：构建农业现代化的技术支撑体系，推动乡村振兴:cite[8]:cite[9]。
- **新型工业化**：推动工业战略性新兴产业总产值占工业总产值比重达到22%:cite[7]:cite[8]。
- **服务业创新发展**：提升服务业的技术创新能力:cite[8]:cite[9]。
- **民生改善**：增强社会民生改善领域的高质量科技供给:cite[8]:cite[9]。

### 2.2 **夯实科技创新基础**
- **科技型企业**：培育壮大科技型企业集群，提升企业技术创新能力:cite[8]:cite[9]。
- **高校和科研机构**：加强高校和科研机构的创新能力建设，加快新型研发机构发展:cite[8]:cite[9]。
- **创新平台**：推进各类科技创新基地优化整合，建设黔灵实验室、贵州科学数据中心等重大科技基础设施:cite[8]:cite[9]。

### 2.3 **推进全方位开放创新**
- **区域创新布局**：优化区域创新布局，加强区域创新联动发展:cite[8]:cite[9]。
- **全球科技创新网络**：积极融入全球科技创新网络，加强部省、院省深度合作:cite[8]:cite[9]。

### 2.4 **推动科技创新成果转化**
- **科技成果转移转化机制**：完善科技成果转移转化机制，强化市场化服务:cite[8]:cite[9]。
- **科技与金融融合**：拓展科技与金融融合途径，完善科技与金融结合机制:cite[8]:cite[9]。

### 2.5 **深化科技体制机制改革**
- **科技计划管理**：改革科技计划管理，优化科技计划布局:cite[8]:cite[9]。
- **创新评价和奖励**：改革完善创新评价、科技奖励、创新调查和统计监测等制度:cite[8]:cite[9]。

### 2.6 **营造良好创新环境**
- **科学家精神**：大力弘扬科学家精神，全面提升科学素养:cite[8]:cite[9]。
- **创新氛围**：营造尊重人才、尊重创造、鼓励创新、宽容失败的创新氛围:cite[8]:cite[9]。

## 3. **具体指标**
- **研发人员**：占就业人员的比重达到4.21%:cite[7]:cite[8]。
- **技术合同成交额**：与地区生产总值之比达到2.5%:cite[7]:cite[8]。
- **高新技术产业产值**：实现倍增，达到1万亿元:cite[9]:cite[10]。
- **公民科学素质**：比例达到12%:cite[7]:cite[8]。

## 4. **保障措施**
- **资金支持**：加大财政资金对大数据关键领域、核心技术研发等项目的支持力度:cite[3]:cite[8]。
- **政策支撑**：强化组织推动与政策支撑，确保人工智能产业的可持续发展:cite[1]:cite[2]。
- **人才培育**：加强数字经济人才培育，建设人工智能产业学院:cite[1]:cite[2]。

## 5. **未来展望**
- **经济贡献**：预计2025年与2020年相比，贵州科技创新将为全省GDP贡献2000亿元增量，力争实现4100亿元:cite[9]:cite[10]。
- **科技地标**：建成实施一批具有“科技地标”特点的重大项目和科技创新平台:cite[9]:cite[10]。

通过以上规划，贵州省旨在实现科技大跃升，引领和支撑高质量发展，走出一条有别于东部、不同于西部其他省份的差异化创新路子:cite[9]:cite[10]。
  `,
  blue: `
### 为什么天空是蓝色的？

天空之所以看起来是蓝色的，主要是由于大气中的**瑞利散射**现象。

#### 瑞利散射

太阳光由不同波长的光组成，其中包括红、橙、黄、绿、蓝、靛、紫等颜色。不同波长的光在大气中的散射程度不同。短波长的光（如蓝色和紫色）比长波长的光（如红色和黄色）散射得更强烈。

- 蓝光波长较短，容易被大气中的气体分子散射。
- 紫光的散射更强，但由于人眼对紫光的敏感度较低，且大气中紫光被吸收的更多，所以我们看到的是蓝色的天空。

#### 太阳光的成分

太阳光实际上是白色的，包含了所有可见光的颜色。太阳光穿透地球的大气层时，由于大气分子（如氧气和氮气）的作用，蓝光被散射到各个方向，而其它颜色的光（如红色、黄色等）相对较少散射。

#### 总结

- 蓝色光波长较短，散射强度大。
- 人眼对蓝色更敏感。
- 结果就是白天我们看到的天空主要是蓝色的。

希望这个解释清晰！如果有更多问题，随时告诉我！
  `,
  earth: `
# 地球为什么会自转？

地球自转的原因可以追溯到太阳系形成的早期阶段。以下是一些关键因素：

## 1. 星云理论
根据星云理论，太阳系起源于一个巨大的气体和尘埃云（即星云）。这个星云在由于引力的作用下开始收缩。当这个气体云收缩时，它开始旋转，因为根据角动量守恒定律，收缩会导致旋转速度加快。这就像滑冰运动员在收紧双臂时会加速旋转一样。

## 2. 角动量守恒
由于在星云收缩时角动量必须得到守恒，所以旋转的速度不断加快，形成了一个旋转的盘状结构。这种旋转是地球及其他行星自转的基础。地球的自转就是这种早期旋转的遗产。

## 3. 行星的形成过程
随着物质逐渐聚集，形成了地球这样的行星。由于行星形成的过程涉及到大量的小天体（如陨石、行星胚胎等）与地球的碰撞，虽然这些碰撞会改变自转的速度和角度，但大部分自转的动力是源于早期星云的旋转运动。

## 4. 自转的减缓
地球的自转并非永恒不变，实际上，地球的自转速度在逐渐减慢。潮汐摩擦作用是导致这一现象的主要原因。月球的引力会对地球造成潮汐力，这种力不仅导致海水的潮汐变化，还导致地球自转逐渐减慢。

## 总结
地球自转的原因可以追溯到太阳系形成初期的星云收缩和角动量守恒，而自转速度的变化则受到潮汐摩擦等因素的影响。


  `
}
const renderMessage = (content: string) => {
  return <Markdown className={'markdown-area'}>
    {content}
  </Markdown>
}

export default function ThinkTank() {

  const scrollElementRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState<Array<{ type: "user" | "assistant"; content: string }>>([])

  const write = async (key: string, question: string) => {

    const responseTexts =  randomSplitString(answersMap[key] ?? answersMap.karst)
    
    const index = 1
   
    setMessages(() => [
      {
        type: "user", content: question,
      },
      {
        type: "assistant",
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

  useEffect(() => {

    if (!scrollElementRef.current || !scrollElementRef.current.parentElement) {
      return
    }
    smoothScrollToBottom(scrollElementRef.current.parentElement)

  }, [messages])


  return <div className="flex flex-col h-full">
    <CustomNav className="w-full z-10" activieKey="think_tank" />
    <div className="flex overflow-hidden h-full flex-1">
      <div className="flex-[0_0_280px] p-5 border-r border-x-gray-200 flex flex-col items-center">
        <Button 
        onClick={() => {
          setMessages([])
        }}
        className="mb-4" type="primary" size="large" block icon={<ChatIcon />}>开启新对话</Button>
        <div className="w-full flex-1 overflow-y-auto min-h-0 border-b border-x-gray-200">
          {mockInfos.map(it => {
            return <div className="flex items-center h-12 mb-1 cursor-pointer px-2 hover:text-blue-600 text-black" key={it.title}
            onClick={() => write(it.id, it.title)}
            >
              <InfoIcon />
              <span className="px-2">{it.title}</span>
            </div>
          })}
        </div>
        <div className="w-full">
          <div className="flex items-center h-12 mb-1 cursor-pointer px-2 hover:text-blue-600 text-black hover:bg-slate-100 rounded-lg">
            <TrashIcon />
            <span className="px-2" onClick={() => {
              setMessages([])
            }}>清空对话</span>
          </div>
          <div className="flex items-center h-12 mb-1 cursor-pointer px-2 hover:text-blue-600 text-black hover:bg-slate-100 rounded-lg">
            <UserIcon />
            <span className="px-2">用户设置</span>
          </div>
        </div>
      </div>
      <div className="h-full flex flex-col flex-1">
          {messages.length > 0 ? (<div className="flex-1 overflow-hidden h-full">
            <div className="overflow-y-auto h-full">
                <div className="space-y-4 markdown-area" ref={scrollElementRef}>
                  {messages.map((message, index) => (
                    <div key={index} className={`p-4 ${message.type === "user" ? "bg-blue-50" : "bg-white"}`}>
                      {renderMessage(message.content)}
                    </div>
                  ))}
                </div>
              </div>
          </div>) : <div className="flex-1 h-full flex flex-col justify-center">
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
                <div className="px-3 py-1.5 w-[280px] bg-slate-100 hover:bg-slate-100 rounded-md mb-4 cursor-pointer"
                  onClick={() => write('karst', '什么是喀斯特地貌？')}
                >
                  "什么是喀斯特地貌？"
                </div>
                <div className="px-3 py-1.5 w-[280px] bg-slate-100 hover:bg-slate-100 rounded-md mb-4 cursor-pointer"
                  onClick={() => write('bridge', '贵州省最大的桥梁是哪一座？请给出详细数据')}
                >
                  "贵州省最大的桥梁是哪一座？请给出详细数据"
                </div>
              </div>
              <div className="mr-20 last:mr-0 border border-slate-200 rounded-2xl p-5">
                <div className="flex flex-col items-center text-base mb-4">
                  <DatabaseIcon width={32} height={32}/>
                  <span className="font-semibold">知识库</span>
                </div>
                <div className="px-3 py-1.5 w-[280px] bg-slate-100 hover:bg-slate-100 rounded-md mb-4 cursor-pointer"
                  onClick={() => write('gz25', '请总结一下贵州省25年科技发展规划')}
                >
                  "请总结一下贵州省25年科技发展规划"
                </div>
              </div>
            </div>
          </div>}
          <div className="flex justify-center flex-[0_0_136]">
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
                // onPasteFile={(file) => {
                // }}
                onSubmit={() => {
                }}
              />
            </div>
          </div>
      </div>
    </div>
  </div>
}