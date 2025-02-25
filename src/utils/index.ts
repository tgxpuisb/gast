import { debounce } from "lodash-es"

export function randomSplitString(input: string): Array<string> {
  const result: Array<string> = []
  let startIndex = 0

  while (startIndex < input.length) {
    const length = Math.floor(Math.random() * 6) + 5
    const endIndex = Math.min(startIndex + length, input.length)
    result.push(input.substring(startIndex, endIndex))
    startIndex = endIndex
  }

  return result
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export const smoothScrollToBottom = debounce(
  (scrollEl: HTMLElement, duration: number = 300, cb?: () => void) => {
    const startPosition = scrollEl.scrollTop
    const distance =
      scrollEl.scrollHeight - scrollEl.offsetHeight - startPosition
    let start: number | null = null

    function run(cur: number) {
      if (start === null) {
        start = cur
      }
      const elapsed = cur - start
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = easeInOutCubic(progress)

      scrollEl.scroll(0, startPosition + distance * easeProgress)

      if (elapsed < duration) {
        requestAnimationFrame(run)
      } else {
        cb?.()
      }
    }
    requestAnimationFrame(run)
  },
  100
)

export const wait = (time: number) => {
  return new Promise(r => {
    setTimeout(r, time)
  })
}