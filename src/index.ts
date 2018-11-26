/**
 * Notes:
 * - Mobile Safari does not include device identifier. We can try to limit somewhat by looking at OS supported versions.
 * - The Facebook app does include device identifiers when using its builtin webview, so prefer that.
 *
 * Links to gather data from:
 * - https://artsy.looker.com/sql/z3zhf9crpbxqcw
 * - https://artsy.looker.com/sql/ybq76vhnzk9dgs
 * - https://www.theiphonewiki.com/wiki/Models
 * - https://en.wikipedia.org/wiki/List_of_iOS_devices
 * - http://vizdevices.yesviz.com/devices.php
 * - http://www.tera-wurfl.com/explore/index.php
 * - https://www.mydevice.io
 * - http://responsivechecker.net/responsive
 */

/**
 * The responsive traits of a device (which can span multiple models) and how to recognize it from a user-agent.
 */
export interface Device {
  /**
   * A human readable description of the device(s)
   */
  description: string

  /**
   * A regular-expression that matches the client’s user-agent.
   */
  userAgent: RegExp

  /**
   * The width of the device, when held in its portrait orientation.
   */
  width: number

  /**
   * The height of the device, when held in its landscape orientation.
   */
  height: number

  /**
   * The number of pixels along an axis that make up 1 point.
   */
  pixelRatio: number

  /**
   * Wether or not the device is a touch-screen based device.
   */
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
  {
    description: "iPod touch 5th, 6th generations",
    userAgent: /iPod(5,1|7,1)/,
    width: 320,
    height: 568,
    pixelRatio: 2,
    touch: true,
  },
  {
    description: "iPod touch 4th generation",
    userAgent: /iPod4,1/,
    width: 320,
    height: 480,
    pixelRatio: 2,
    touch: true,
  },
  {
    description: "iPod touch 1st, 2nd, 3rd generations",
    userAgent: /iPod(1,1|2,1|3,1)/,
    width: 320,
    height: 480,
    pixelRatio: 1,
    touch: true,
  },
  {
    description: "iPad 1, 2, Mini",
    userAgent: /iPad(1,1|2,1|2,5)/,
    width: 768,
    height: 1024,
    pixelRatio: 1,
    touch: true,
  },
  {
    description: "iPad 3, 4, Air, Mini 2, Mini 3, Mini 4, Air 2, Pro 9.7-inch, 5, 6",
    userAgent: /iPad(3,[1-6]|4,[1-9]|5,[1-4]|6,[34]|6,1[12]|7,[56])/,
    width: 768,
    height: 1024,
    pixelRatio: 2,
    touch: true,
  },
  {
    description: "iPad Pro 12.9-inch 1st, 2nd, 3rd generations",
    userAgent: /iPad(6,[78]|7,[12]|8,[5-8])/,
    width: 1024,
    height: 1366,
    pixelRatio: 2,
    touch: true,
  },
  {
    description: "iPad Pro 10.5-inch",
    userAgent: /iPad7,[34]/,
    width: 834,
    height: 1112,
    pixelRatio: 2,
    touch: true,
  },
  {
    description: "iPad Pro 11-inch",
    userAgent: /iPad8,[1-4]/,
    width: 834,
    height: 1194,
    pixelRatio: 2,
    touch: true,
  },
  {
    description: "Samsung Galaxy S8, S8+, S9",
    userAgent: /SM-G9(5[05]|60)[A-Z]/,
    width: 360,
    height: 740,
    pixelRatio: 4,
    touch: true,
  },
  {
    description: "Samsung Galaxy S9+",
    userAgent: /SM-G965[A-Z]/,
    width: 412,
    height: 846,
    pixelRatio: 3.5,
    touch: true,
  },
  {
    description: "Samsung Note 8, 9",
    userAgent: /SM-N9[56]0[A-Z]/,
    width: 414,
    height: 846,
    pixelRatio: 3.5,
    touch: true,
  },
  {
    description: "Samsung Galaxy S6, S7, S7 Edge",
    userAgent: /SM-G9(3[05]|20)[A-Z]/,
    width: 360,
    height: 640,
    pixelRatio: 4,
    touch: true,
  },
  {
    description: "Samsung A5",
    userAgent: /SM-A520[A-Z]/,
    width: 360,
    height: 640,
    pixelRatio: 2,
    touch: true,
  },
  {
    description: "Samsung Galaxy Tab A 10.1",
    userAgent: /SM-T580/,
    width: 800,
    height: 1280,
    pixelRatio: 1.5,
    touch: true,
  },
  {
    description: "Google Pixel 2 XL",
    userAgent: /Pixel 2 XL/,
    width: 411,
    height: 823,
    pixelRatio: 3.5,
    touch: true,
  },
  {
    description: "Google Pixel 2",
    userAgent: /Pixel 2/,
    width: 411,
    height: 731,
    pixelRatio: 2.6,
    touch: true,
  },
  {
    description: "Lyf Jio Phone",
    userAgent: /LYF\/F120B/,
    width: 240,
    height: 320,
    pixelRatio: 1,
    touch: false,
  },
  {
    description: "Sony Xperia X71",
    userAgent: /G8341/,
    width: 360,
    height: 640,
    pixelRatio: 3,
    touch: true,
  },
  {
    description: "Motorola Z Droid",
    userAgent: /XT1650/,
    width: 360,
    height: 640,
    pixelRatio: 4,
    touch: true,
  },
  {
    description: "Motorola G4",
    userAgent: /Moto G \(4\)/,
    width: 360,
    height: 640,
    pixelRatio: 3,
    touch: true,
  },
  {
    description: "Huawei P20 Lite",
    userAgent: /ANE-LX1/,
    width: 360,
    height: 760,
    pixelRatio: 3,
    touch: true,
  },
]

// Mobile Safari does not include model info, so default to largest versions
Devices.push({
  description: "iPhone",
  userAgent: /iPhone;/,
  touch: true,
  ...deviceUnion(Devices.filter(device => device.userAgent.toString().includes("iPhone"))),
})
Devices.push({
  description: "iPod touch",
  userAgent: /iPod touch;/,
  touch: true,
  ...deviceUnion(Devices.filter(device => device.userAgent.toString().includes("iPod"))),
})
Devices.push({
  description: "iPad",
  userAgent: /iPad;/,
  touch: true,
  ...deviceUnion(Devices.filter(device => device.userAgent.toString().includes("iPad"))),
})

function deviceUnion(devices: Device[]) {
  return devices.reduce(
    (acc, device) => ({
      ...acc,
      width: device.width > acc.width ? device.width : acc.width,
      height: device.height > acc.height ? device.height : acc.height,
      pixelRatio: device.pixelRatio > acc.pixelRatio ? device.pixelRatio : acc.pixelRatio,
    }),
    { width: 0, height: 0, pixelRatio: 0 }
  )
}

/**
 * Returns the first device entry from `devices` that matches the given user-agent.
 *
 * @param userAgent The client’s user-agent, usually taken from a HTTP request header.
 */
export function findDevice(userAgent: string): Device | undefined {
  return Devices.find(device => device.userAgent.test(userAgent))
}
