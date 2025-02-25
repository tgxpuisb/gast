import { Input, message } from 'antd'
import { useAtom, useSetAtom } from 'jotai'
import {
  MessagesAtom,
  RobotThinkingAtom,
  RobotWritingAtom
} from './store'
import type { Messages } from './interface'
import { useMemo, useState } from 'react'
// import {
//   fetchEventSource,
// } from '@microsoft/fetch-event-source'
import { useMemoizedFn } from 'ahooks'
import { cloneDeep } from 'lodash-es'
import cn from 'src/utils/cn'
import mockFetchInput from './mockFetchInput'
import PaperPlane from 'src/assets/icons/paper_plane.svg?react'

const NETWORK_ERROR_TEXT = '网络异常请稍后再试'

const MessageInput = () => {
  const [messages, setMessages] = useAtom(MessagesAtom)
  const [robotWriting, setRobotWriting] = useAtom(RobotWritingAtom)
  const setRobotThinking = useSetAtom(RobotThinkingAtom)
  const [inputValue, setInputValue] = useState<string>('')

  const handleSendMessage = useMemoizedFn(async (currentMessages: Messages) => {
    if (robotWriting) {
      return
    }
    setRobotWriting(true)
    setRobotThinking(true)
    setMessages(prev =>
      prev.concat({
        role: 'assistant',
        content: ''
      })
    )

    const injectIndex: number = currentMessages.length
    let text: string = ''

    mockFetchInput('/api/v1/rec/tor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        payload: currentMessages.filter(it => it.content !== NETWORK_ERROR_TEXT)
      }),
      onmessage: msg => {
        if (typeof injectIndex === 'undefined' || !msg.data) {
          return
        }
        text += msg.data
        // try {
        //   text += JSON.parse(msg.data)
        // } catch {
        //   text += msg.data
        // }

        setMessages(prev => {
          prev[injectIndex].content = text
          return cloneDeep(prev)
        })
      },
      onopen: async () => {
        setRobotThinking(false)
        setMessages(prev => {
          prev[injectIndex].content = NETWORK_ERROR_TEXT
          return cloneDeep(prev)
        })
        throw new Error()
      },
      onclose: () => {
        setMessages(prev => {
          if (prev[injectIndex].content !== '') {
            return prev
          }
          prev[injectIndex].content = NETWORK_ERROR_TEXT
          return cloneDeep(prev)
        })
        setRobotWriting(false)
      },
      onerror: () => {
        setRobotWriting(false)
        setRobotThinking(false)
        setMessages(prev => {
          if (prev[injectIndex].content !== '') {
            return prev
          }
          prev[injectIndex].content = NETWORK_ERROR_TEXT
          return cloneDeep(prev)
        })
        message.error(NETWORK_ERROR_TEXT)
        throw new Error()
      }
    })
  })

  const disabledSend = useMemo(() => {
    return inputValue.replace(/\s/g, '') === '' || robotWriting
  }, [inputValue, robotWriting])

  const handleInput = async (value: string) => {
    if (value.replace(/\s/g, '') === '' || disabledSend) {
      return
    }
    const updateMessages = messages.concat({ role: 'user', content: value })
    setMessages(updateMessages)
    setInputValue('')
    handleSendMessage(updateMessages)
  }

  return (
    <div
      className={cn(
        'group flex items-center rounded-2xl border py-2.5 pr-3 shadow-[0_0_0_3px_#F5EFFF]',
        disabledSend
          ? ''
          : 'hover:border-primary has-[textarea:focus]:border-primary'
      )}
    >
      <Input.TextArea
        variant="borderless"
        placeholder="请输入"
        autoSize={{ minRows: 1, maxRows: 5 }}
        classNames={{
          textarea: 'py-0'
        }}
        value={inputValue}
        onChange={event => {
          setInputValue(event.target.value)
        }}
        onPressEnter={event => {
          if (event.shiftKey) {
            return
          }
          event.preventDefault()
          handleInput(inputValue)
        }}
      />
      <div
        className={cn(
          'flex size-10 flex-[0_0_40px] cursor-pointer items-center justify-center rounded-lg bg-[linear-gradient(90deg,#FF76C8_0%,#602DD0_100%)] opacity-50 transition duration-300',
          disabledSend
            ? ''
            : 'group-hover:opacity-100 group-has-[textarea:focus]:opacity-100'
        )}
        onClick={() => {
          handleInput(inputValue)
        }}
      >
        <PaperPlane width={20} height={20} />
      </div>
    </div>
  )
}

export default MessageInput
