import { Drawer } from 'antd'
import AIMentorFinderCore from './Core'
import MessageInput from './MessageInput'
import { memo } from 'react'
interface AIMentorFinderProps {
  open: boolean
  setOpen: (flag: boolean) => void
}
import ArrowBold from 'src/assets/icons/arrow_bold.svg?react'

export default memo(function AIMentorFinder(props: AIMentorFinderProps) {
  return (
    <Drawer
      open={props.open}
      mask={false}
      closeIcon={null}
      title="智能机器人"
      width={600}
      maskClosable={false}
      extra={
        <div
          className="relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-[8px_0_0_8px] bg-white p-1 shadow-[2px_2px_8px_#00000014] hover:bg-gray-100"
          onClick={() => props.setOpen(false)}
        >
          <ArrowBold
            width={16}
            height={16}
            className="-rotate-90 text-gray-3"
          />
        </div>
      }
      classNames={{
        header:
          'text-center text-base text-gray-black font-semibold relative [&_>.ant-drawer-extra]:absolute [&_>.ant-drawer-extra]:right-0 [&_>.ant-drawer-extra]:top-[14px]',
        wrapper: 'rounded-[20px_0_0_20px]',
        content: 'rounded-[20px_0_0_20px]',
        body: 'px-4 pt-2.5 h-full overflow-y-auto pb-[80px]'
      }}
    >
      <AIMentorFinderCore />
      <div className="absolute bottom-0 flex w-full items-center bg-white py-2.5">
        <div className="w-[568px]">
          <MessageInput />
        </div>
      </div>
    </Drawer>
  )
})
