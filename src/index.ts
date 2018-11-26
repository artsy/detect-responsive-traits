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
 * - https://medium.com/@hacknicity/how-ipad-apps-adapt-to-the-new-11-and-12-9-ipads-pro-cabd1c0e5f20
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
   * The minimum display width of the device, which is either the total width of the device’s viewport when held in its
   * portrait orientation, or the smallest size the window can be resized to if the device supports window resizing.
   */
  minWidth: number

  /**
   * The maximum display width of the device, which is the height of the device’s viewport when held in its portrait
   * orientation.
   */
  maxWidth: number

  /**
   * Wether or not the device supports resizing of windows.
   *
   * In case resizing is supported, the device should be considered as being able to display at any size between
   * `minWidth` and `maxWidth`. In case resizing is not supported, `minWidth` and `maxWidth` should be considered as the
   * only two possible width values.
   *
   * Devices that support resizing are iPads that support iOS >= 11 and all Android devices that support OS >= 7.
   */
  resizable: boolean

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
  /**
   * Apple iOS devices when using apps that do include device model identifiers (such as the FB app)
   */
  {
    description: "iPhone XS Max",
    userAgent: /iPhone11,6/,
    minWidth: 414,
    maxWidth: 896,
    pixelRatio: 3,
    resizable: false,
    touch: true,
  },
  {
    description: "iPhone XR",
    userAgent: /iPhone11,8/,
    minWidth: 414,
    maxWidth: 896,
    pixelRatio: 2,
    resizable: false,
    touch: true,
  },
  {
    description: "iPhone X, XS",
    userAgent: /iPhone(10,[36]|11,2)/,
    minWidth: 375,
    maxWidth: 812,
    pixelRatio: 3,
    resizable: false,
    touch: true,
  },
  {
    description: "Apple iPhone 6 Plus, 6S Plus, 7 Plus, 8 Plus",
    userAgent: /iPhone(7,1|8,2|9,[24]|10,[25])/,
    minWidth: 414,
    maxWidth: 736,
    pixelRatio: 3,
    resizable: false,
    touch: true,
  },
  {
    description: "iPhone 6, 6S, 7, 8",
    userAgent: /iPhone(7,2|8,1|9,3|10,[14])/,
    minWidth: 375,
    maxWidth: 667,
    pixelRatio: 2,
    resizable: false,
    touch: true,
  },
  {
    description: "iPhone 5, 5S, 5C, SE",
    userAgent: /iPhone(5,[1234]|6,[12]|8,4)/,
    minWidth: 320,
    maxWidth: 568,
    pixelRatio: 2,
    resizable: false,
    touch: true,
  },
  {
    description: "iPhone 3, 3GS, 4, 4S",
    userAgent: /iPhone(1,2|2,1|3,[123]|4,1)/,
    minWidth: 320,
    maxWidth: 480,
    pixelRatio: 1,
    resizable: false,
    touch: true,
  },
  {
    description: "iPod touch 5th, 6th generations",
    userAgent: /iPod(5,1|7,1)/,
    minWidth: 320,
    maxWidth: 568,
    pixelRatio: 2,
    resizable: false,
    touch: true,
  },
  {
    description: "iPod touch 4th generation",
    userAgent: /iPod4,1/,
    minWidth: 320,
    maxWidth: 480,
    pixelRatio: 2,
    resizable: false,
    touch: true,
  },
  {
    description: "iPod touch 1st, 2nd, 3rd generations",
    userAgent: /iPod(1,1|2,1|3,1)/,
    minWidth: 320,
    maxWidth: 480,
    pixelRatio: 1,
    resizable: false,
    touch: true,
  },
  {
    description: "iPad 1, 2, Mini",
    userAgent: /iPad(1,1|2,1|2,5)/,
    minWidth: 768,
    maxWidth: 1024,
    pixelRatio: 1,
    resizable: false,
    touch: true,
  },
  {
    description: "iPad 3, 4",
    userAgent: /iPad3,[1-6]/,
    minWidth: 768,
    maxWidth: 1024,
    pixelRatio: 2,
    resizable: false,
    touch: true,
  },
  // These iPads support iOS 11 and with it multitasking.
  {
    description: "iPad Air, Mini 2, Mini 3, Mini 4, Air 2, Pro 9.7-inch, 5, 6",
    userAgent: /iPad(4,[1-9]|5,[1-4]|6,[34]|6,1[12]|7,[56])/,
    // Device width 768
    minWidth: 320,
    maxWidth: 1024,
    resizable: true,
    pixelRatio: 2,
    touch: true,
  },
  {
    description: "iPad Pro 12.9-inch 1st, 2nd, 3rd generations",
    userAgent: /iPad(6,[78]|7,[12]|8,[5-8])/,
    // Device width 1024
    minWidth: 320,
    maxWidth: 1366,
    pixelRatio: 2,
    resizable: true,
    touch: true,
  },
  {
    description: "iPad Pro 10.5-inch",
    userAgent: /iPad7,[34]/,
    // Device width 834,
    minWidth: 320,
    maxWidth: 1112,
    pixelRatio: 2,
    resizable: true,
    touch: true,
  },
  {
    description: "iPad Pro 11-inch",
    userAgent: /iPad8,[1-4]/,
    // Device width 834,
    minWidth: 320,
    maxWidth: 1194,
    pixelRatio: 2,
    resizable: true,
    touch: true,
  },
  /**
   * Android devices
   *
   * All these Android devices support OS >=7 and with it multi-window support.
   * TODO: Figure out what the minimum width is that the Chrome browser will display at.
   */
  {
    description: "Samsung Galaxy S8, S8+, S9",
    userAgent: /SM-G9(5[05]|60)[A-Z]/,
    // Device width is 360
    // Minimum resizable viewport (on a Galaxy S9) was reported by @dblandin
    minWidth: 221,
    maxWidth: 740,
    pixelRatio: 4,
    resizable: true,
    touch: true,
  },
  {
    description: "Samsung Galaxy S9+",
    userAgent: /SM-G965[A-Z]/,
    // Device width is 412
    // FIXME: Actual min width viewport unknown
    minWidth: 0,
    maxWidth: 846,
    pixelRatio: 3.5,
    resizable: true,
    touch: true,
  },
  {
    description: "Samsung Note 8, 9",
    userAgent: /SM-N9[56]0[A-Z]/,
    // Device width is 414
    // FIXME: Actual min width viewport unknown
    minWidth: 0,
    maxWidth: 846,
    pixelRatio: 3.5,
    resizable: true,
    touch: true,
  },
  {
    description: "Samsung Galaxy S6, S7, S7 Edge",
    userAgent: /SM-G9(3[05]|20)[A-Z]/,
    // Device width is 360
    // FIXME: Actual min width viewport unknown
    minWidth: 0,
    maxWidth: 640,
    pixelRatio: 4,
    resizable: true,
    touch: true,
  },
  {
    description: "Samsung A5",
    userAgent: /SM-A520[A-Z]/,
    // Device width is 360
    // FIXME: Actual min width viewport unknown
    minWidth: 0,
    maxWidth: 640,
    pixelRatio: 2,
    resizable: true,
    touch: true,
  },
  {
    description: "Samsung Galaxy Tab A 10.1",
    userAgent: /SM-T580/,
    // Device width is 800
    // FIXME: Actual min width viewport unknown
    minWidth: 0,
    maxWidth: 1280,
    pixelRatio: 1.5,
    resizable: true,
    touch: true,
  },
  {
    description: "Google Pixel 2 XL",
    userAgent: /Pixel 2 XL/,
    // Device width is 411.
    // Minimum resizable viewport was reported by @ds300
    minWidth: 383,
    maxWidth: 823,
    pixelRatio: 3.5,
    resizable: true,
    touch: true,
  },
  {
    description: "Google Pixel 2",
    userAgent: /Pixel 2/,
    // Device width is 411
    // FIXME: Actual min width viewport unknown
    minWidth: 0,
    maxWidth: 731,
    pixelRatio: 2.6,
    resizable: true,
    touch: true,
  },
  {
    description: "Sony Xperia X71",
    userAgent: /G8341/,
    // Device width is 360
    // FIXME: Actual min width viewport unknown
    minWidth: 0,
    maxWidth: 640,
    pixelRatio: 3,
    resizable: true,
    touch: true,
  },
  {
    description: "Motorola Z Droid",
    userAgent: /XT1650/,
    // Device width is 360
    // FIXME: Actual min width viewport unknown
    minWidth: 0,
    maxWidth: 640,
    pixelRatio: 4,
    resizable: true,
    touch: true,
  },
  {
    description: "Motorola G4",
    userAgent: /Moto G \(4\)/,
    // Device width is 360
    // FIXME: Actual min width viewport unknown
    minWidth: 0,
    maxWidth: 640,
    pixelRatio: 3,
    resizable: true,
    touch: true,
  },
  {
    description: "Huawei P20 Lite",
    userAgent: /ANE-LX1/,
    // Device width is 360
    // FIXME: Actual min width viewport unknown
    minWidth: 0,
    maxWidth: 760,
    pixelRatio: 3,
    resizable: true,
    touch: true,
  },
  /**
   * Specialized devices
   */
  {
    description: "Lyf Jio Phone",
    userAgent: /LYF\/F120B/,
    minWidth: 240,
    // Device height is 320, but this phone only supports rotation in the video player so for our purposes it’s fixed
    maxWidth: 240,
    pixelRatio: 1,
    resizable: false,
    touch: false,
  },
]

// Mobile Safari does not include model info, so default to most inclusive unions of available versions
Devices.push({
  description: "iPhone",
  userAgent: /iPhone;/,
  resizable: false,
  touch: true,
  ...deviceUnion(Devices.filter(device => device.userAgent.toString().includes("iPhone"))),
})
Devices.push({
  description: "iPod touch",
  userAgent: /iPod touch;/,
  resizable: false,
  touch: true,
  ...deviceUnion(Devices.filter(device => device.userAgent.toString().includes("iPod"))),
})
Devices.push({
  description: "iPad",
  userAgent: /iPad;/,
  resizable: true,
  touch: true,
  ...deviceUnion(Devices.filter(device => device.userAgent.toString().includes("iPad"))),
})

function deviceUnion(devices: Device[]) {
  return devices.reduce(
    (acc, device) => ({
      ...acc,
      minWidth: device.minWidth < acc.minWidth ? device.minWidth : acc.minWidth,
      maxWidth: device.maxWidth > acc.maxWidth ? device.maxWidth : acc.maxWidth,
      pixelRatio: device.pixelRatio > acc.pixelRatio ? device.pixelRatio : acc.pixelRatio,
    }),
    { minWidth: 999999, maxWidth: 0, pixelRatio: 0 } as Pick<Device, "minWidth" | "maxWidth" | "pixelRatio">
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
