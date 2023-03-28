const { assert, expect } = require("chai")
const { ethers } = require("hardhat")



describe("SimpleStorage", async function () {
  let simpleStorgeFactory, simpleStorage
  beforeEach(async function () {
    simpleStorgeFactory = await ethers.getContractFactory("SimpleStorage")
    simpleStorage = await simpleStorgeFactory.deploy()
  })

  it("First test with 0 favourite number", async function () {
    const favNumber = await simpleStorage.retrieve()

    const expectedNumber = "0"
    assert.equal(favNumber.toString(), expectedNumber)
  })
  it("Should update the number when call store function", async function () {
    const expectedValue = "9"
    const transactionResponce = await simpleStorage.store(expectedValue)
    await transactionResponce.wait(1)
    const UpdatedNumber = await simpleStorage.retrieve()
    assert.equal(UpdatedNumber.toString(), expectedValue)
  })
})