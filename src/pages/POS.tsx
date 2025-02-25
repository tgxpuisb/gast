import CustomNav from "../components/CustomNav"
import { Col, Row } from "antd"
import { Link } from 'react-router-dom'

const mockList = [
  {
    id: 1,
    title: '贵州桥梁'
  },
  {
    id: 2,
    title: '喀斯特地貌'
  },
  {
    id: 3,
    title: '“天眼”射电望远镜'
  },
  {
    id: 4,
    title: '能源科技'
  },
  {
    id: 5,
    title: '农业科技'
  },
  {
    id: 6,
    title: '智能交通'
  }
]

export default function PopularizationOfScience() {
  return <div className="flex flex-col">
    <CustomNav className="w-full" activieKey="popularization_of_science"/>
    <div className="flex-1 overflow-hidden h-full px-20">
      <Row gutter={[32, 32]}>
        {mockList.map(it => {
          return <Col span={8} key={it.id} className="cursor-pointer group text-center">
            <Link to={`/popularization_of_science/${it.id}`}>
            <img src={`/src/assets/images/pop/${it.id}.png`} alt="" className="w-full aspect-[16/9] block mb-2 group-hover:shadow-md group-hover:scale-105"/>
            <span className="group-hover:text-blue-600">{it.title}</span>
            </Link>
          </Col>
        })}
      </Row>
    </div>
  </div>
}