import { Avatar } from 'antd'
import { useAtomValue } from 'jotai'
import { MessagesAtom, RobotThinkingAtom } from './store'
import Markdown from 'react-markdown'
import { memo, useEffect, useRef } from 'react'
import { smoothScrollToBottom } from 'src/utils'
import RobotThinking from './RobotThinking'
import OhHelloLogo2 from 'src/assets/icons/oh_hello_logo_2.svg?react'

// const TimeInfo = (props: React.PropsWithChildren) => {
//   return (
//     <div className="mb-2.5 text-center text-xs font-normal text-gray-3">
//       {props.children}
//     </div>
//   )
// }

const UserMessage = (props: { content: string }) => {
  const { content } = props
  

  return (
    <div className="flex justify-end gap-x-3">
      <div
        className="mb-3 whitespace-pre-wrap break-words rounded-xl rounded-tr-sm bg-[#9A4FE6] px-3 py-2 text-sm text-white"
        style={{
          wordBreak: 'break-word'
        }}
      >
        {content}
      </div>
      <div className="size-[34px] rounded-full border border-primary-50">
        <Avatar size={34} className="select-none" src={''}>
          {'User'}
        </Avatar>
      </div>
    </div>
  )
}

const RobotMessage = memo((props: { content: string; thinking?: boolean }) => {
  const { content, thinking } = props

  return (
    <div className="flex gap-x-3">
      <div className="size-[34px] rounded-full border border-primary">
        <div className="flex size-8 items-center justify-center rounded-full bg-white shadow-[0_4px_8px_0_#704FE640]">
          <OhHelloLogo2 width={20} height={20} />
        </div>
      </div>
      {/* <div className="flex-1"> */}
      <div
        className="mb-3 break-words rounded-xl rounded-tl-sm bg-[#F2F3F5] px-3 py-2 text-sm text-gray-1"
        style={{
          wordBreak: 'break-word'
        }}
      >
        {thinking ? (
          <RobotThinking />
        ) : (
          <Markdown
            className={'markdown-area'}
            children={content}
            components={{
              // @ts-expect-error https://github.com/remarkjs/react-markdown?tab=readme-ov-file#appendix-b-components
              pre: 'div',
              p: 'div',
            }}
          />
        )}
      </div>
    </div>
    // </div>
  )
})

export default function AIMentorFinderCore() {
  const messages = useAtomValue(MessagesAtom)
  const scrollElementRef = useRef<HTMLDivElement>(null)
  const robotThinking = useAtomValue(RobotThinkingAtom)

  useEffect(() => {
    if (!scrollElementRef.current || !scrollElementRef.current.parentElement) {
      return
    }
    smoothScrollToBottom(scrollElementRef.current.parentElement)
  }, [messages])

  return (
    <div ref={scrollElementRef}>
      <RobotMessage content="你好,我是科普小助手,有什么问题都可以问我" />
      {messages.map(({ role, content }, index) => {
        if (role === 'assistant') {
          return (
            <RobotMessage
              content={content}
              key={`${content}_${index}`}
              thinking={index === messages.length - 1 && robotThinking}
            />
          )
        }
        return <UserMessage content={content} key={`${content}_${index}`} />
      })}
    </div>
  )
}
