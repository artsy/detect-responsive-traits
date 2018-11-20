// tslint:disable:no-console

import { readFileSync } from "fs"
import { findDevice } from "../src/index"

const userAgentKey = "session_pages.user_agent"

const file = process.argv[2]
const data = JSON.parse(readFileSync(file, "utf8"))

data.forEach(row => {
  const userAgent = row[userAgentKey]
  const device = findDevice(userAgent)
  if (!device) {
    console.error(row)
  }
})

data.filter(row => {
  const userAgent = row[userAgentKey]
  const device = findDevice(userAgent)
  if (!device) {
    console.error(row)
  }
})
