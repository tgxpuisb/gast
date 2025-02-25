import { atom } from 'jotai'
import type { Messages } from './interface'

export const MessagesAtom = atom<Messages>([])
export const RobotWritingAtom = atom(false)
export const RobotThinkingAtom = atom(false)
