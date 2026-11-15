export type CountdownParts = {
  days: number
  hours: number
  minutes: number
  seconds: number
  done: boolean
}

export function getCountdownParts(now: Date, target: Date): CountdownParts {
  const ms = Math.max(0, target.getTime() - now.getTime())
  const totalSec = Math.floor(ms / 1000)
  const days = Math.floor(totalSec / 86400)
  const hours = Math.floor((totalSec % 86400) / 3600)
  const minutes = Math.floor((totalSec % 3600) / 60)
  const seconds = totalSec % 60
  return { days, hours, minutes, seconds, done: ms <= 0 }
}

export function pad2(n: number) {
  return String(n).padStart(2, "0")
}
