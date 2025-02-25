import './RobotThinking.scss'

export default function RobotThinking() {
  return (
    <div className="robot-thinking relative h-5 w-10">
      <div className="absolute left-0 top-0 flex h-5 w-10 items-center justify-center">
        <div className="robot-thinking__dot mx-1 h-1 w-1 rounded-full bg-[#737373]"></div>
        <div className="robot-thinking__dot mx-1 h-1 w-1 rounded-full bg-[#737373]"></div>
        <div className="robot-thinking__dot mx-1 h-1 w-1 rounded-full bg-[#737373]"></div>
      </div>
    </div>
  )
}
