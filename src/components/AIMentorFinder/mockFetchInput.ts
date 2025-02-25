import { last } from "lodash-es"
import type { Messages } from './interface'
import { randomSplitString, wait } from "src/utils"

interface Options extends Record<string, any> {
  onmessage: (msg: {data: string}) => void
  onopen: () => void
  onclose: () => void
  onerror: () => void
  body: string
}



// 望远镜 天眼
export default async function mockFetchInput(url: string, options: Options) {

  const mockAnswers = randomSplitString(`
# 贵州天眼科普

## 概述
贵州天眼，全称为500米口径球面射电望远镜（Five-hundred-meter Aperture Spherical radio Telescope，简称FAST），是世界上最大的单口径射电望远镜。它位于中国贵州省黔南布依族苗族自治州平塘县克度镇大窝凼的喀斯特洼地中。
![贵州天眼](/images/5.png)

## 主要特点
- **口径**：500米，超过了之前世界上最大的阿雷西博望远镜（口径305米）。
- **灵敏度**：FAST的灵敏度是阿雷西博望远镜的2.5倍，能够探测到更微弱的信号。
- **反射面**：由4450块三角形反射面板组成，能够主动调整形状以聚焦不同方向的信号。

## 科学目标
- **脉冲星**：寻找和研究脉冲星，特别是毫秒脉冲星。
- **中性氢**：观测宇宙中的中性氢分布，研究宇宙大尺度结构。
- **星际分子**：探测星际分子，研究星际介质的物理和化学性质。
- **地外文明**：参与SETI（搜寻地外文明）项目，寻找可能的智慧生命信号。

## 建设与运行
- **建设时间**：2011年3月开工，2016年9月25日竣工。
- **运行**：FAST于2016年9月25日正式启用，开始进行科学观测。

## 意义
- **科学突破**：FAST的建成和运行将推动天文学、天体物理学等领域的研究，有望带来重大科学突破。
- **国际合作**：FAST向全球科学家开放，促进了国际科学合作。
- **技术进步**：FAST的建设推动了我国在大型科学装置设计、制造和运行方面的技术进步。

## 参观信息
- **地点**：贵州省黔南布依族苗族自治州平塘县克度镇大窝凼。
- **开放时间**：FAST景区对公众开放，但需提前预约。
- **注意事项**：参观时需遵守相关规定，避免对望远镜运行造成干扰。

## 参考资料
- [FAST官方网站](http://fast.bao.ac.cn/)
- [中国科学院国家天文台](http://www.nao.cas.cn/)
`)

  try {
    const requestBody: {
      payload: Messages
    } = JSON.parse(options.body)
    if (url && last(requestBody.payload)?.content) {
      options.onopen()
      while (mockAnswers.length > 0) {
        await wait(150)
        options.onmessage({data: mockAnswers.shift() ?? ''})
      }
    }
    options.onclose()
  } catch {
    options.onerror()
  }
}