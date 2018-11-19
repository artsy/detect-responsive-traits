import { Devices, findDevice } from "../"
import fixtures = require("./devices.json")

describe("findDevice", () => {
  Object.entries(fixtures).forEach(([description, userAgents]) => {
    userAgents.forEach((userAgent, i) => {
      it(`recognizes ${description} - userAgents[${i}]`, () => {
        expect(findDevice(userAgent)).toMatchObject({ description })
      })
    })
  })

  it("uses the largest iPhone version for Mobile Safari, which does not include a model identifier", () => {
    expect(findDevice(fixtures.iPhone[0])).toMatchObject({
      description: "iPhone",
      width: 414,
      height: 896,
      pixelRatio: 3,
      touch: true,
    })
  })
})
