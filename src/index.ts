/**
 * - https://artsy.looker.com/sql/z3zhf9crpbxqcw
 * - https://artsy.looker.com/sql/ybq76vhnzk9dgs
 * - https://www.theiphonewiki.com/wiki/Models
 * - https://www.mydevice.io
 */

export interface Device {
  description: string
  userAgent: RegExp
  width: number
  height: number
  pixelRatio: number
  touch: boolean
}

export const Devices: Device[] = [
  // Facebook iOS app includes model info when using its builtin webview.
  {
    description: "iPhone XS Max",
    userAgent: /iPhone11,6/,
    width: 414,
    height: 896,
    pixelRatio: 3,
    touch: true,
  },
  {
    description: "iPhone XR",
    userAgent: /iPhone11,8/,
    width: 414,
    height: 896,
    pixelRatio: 2,
    touch: true,
  },
  {
    description: "iPhone X, XS",
    userAgent: /iPhone(10,[36]|11,2)/,
    width: 375,
    height: 812,
    pixelRatio: 3,
    touch: true,
  },
  {
    description: "Apple iPhone 6 Plus, 6S Plus, 7 Plus, 8 Plus",
    userAgent: /iPhone(7,1|8,2|9,[24]|10,[25])/,
    width: 414,
    height: 736,
    pixelRatio: 3,
    touch: true,
  },
  {
    description: "iPhone 6, 6S, 7, 8",
    userAgent: /iPhone(7,2|8,1|9,3|10,[14])/,
    width: 375,
    height: 667,
    pixelRatio: 2,
    touch: true,
  },
  {
    description: "iPhone 5, 5S, 5C, SE",
    userAgent: /iPhone(5,[1234]|6,[12]|8,4)/,
    width: 320,
    height: 568,
    pixelRatio: 2,
    touch: true,
  },
  {
    description: "iPhone 3, 3GS, 4, 4S",
    userAgent: /iPhone(1,2|2,1|3,[123]|4,1)/,
    width: 320,
    height: 480,
    pixelRatio: 1,
    touch: true,
  },
]

// Mobile Safari does not include model info, so default to largest.
Devices.push(
  Devices.filter(device => device.userAgent.toString().includes("iPhone")).reduce(
    (acc, device) => ({
      ...acc,
      width: device.width > acc.width ? device.width : acc.width,
      height: device.height > acc.height ? device.height : acc.height,
      pixelRatio: device.pixelRatio > acc.pixelRatio ? device.pixelRatio : acc.pixelRatio,
    }),
    { description: "iPhone", userAgent: /iPhone/, touch: true, width: 0, height: 0, pixelRatio: 0 }
  )
)

export function findDevice(userAgent: string): Device | undefined {
  return Devices.find(device => device.userAgent.test(userAgent))
}
