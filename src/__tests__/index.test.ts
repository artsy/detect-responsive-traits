import { Devices, findDevice } from "../"
import fixtures = require("./devices.json")

describe("Devices", () => {
  it("has a larger maxWidth than minWidth", () => {
    Devices.forEach(device => {
      expect(device.maxWidth).toBeGreaterThanOrEqual(device.minWidth)
    })
  })
})

describe("findDevice", () => {
  Object.entries(fixtures).forEach(([description, userAgents]) => {
    userAgents.forEach((userAgent, i) => {
      it(`recognizes ${description} - userAgents[${i}]`, () => {
        expect(findDevice(userAgent)).toMatchObject({ description })
      })
    })
  })

  it("uses the largest iPhone version for Mobile Safari, which does not include a model identifier", () => {
    // tslint:disable-next-line:no-string-literal
    expect(findDevice(fixtures["iPhone"][0])).toMatchObject({
      description: "iPhone",
      minWidth: 320,
      maxWidth: 896,
      pixelRatio: 3,
      touch: true,
    })
  })

  it("uses the largest iPod touch version for Mobile Safari, which does not include a model identifier", () => {
    expect(findDevice(fixtures["iPod touch"][0])).toMatchObject({
      description: "iPod touch",
      minWidth: 320,
      maxWidth: 568,
      pixelRatio: 2,
      touch: true,
    })
  })

  it("uses the largest iPad for Mobile Safari, which does not include a model identifier", () => {
    // tslint:disable-next-line:no-string-literal
    expect(findDevice(fixtures["iPad"][0])).toMatchObject({
      description: "iPad",
      minWidth: 320,
      maxWidth: 1366,
      pixelRatio: 2,
      touch: true,
    })
  })
})
