// tslint:disable:no-console

import { readFileSync } from "fs"
import { findDevice } from "../src/index"

const userAgentKey = "session_pages.user_agent"

const file = process.argv[2]
const data = JSON.parse(readFileSync(file, "utf8"))

const remainder = data.filter(row => !findDevice(row[userAgentKey]))

if (remainder.length > 0) {
  console.error(remainder)
}

process.exit(remainder.length)
