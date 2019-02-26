"use strict";
const expect = require('chai').expect
const currentTime = require('../dist/index').TimeUtilsModule.timeToTimeStamp;
describe('function test',() => {
    it('should return 1551142800',() => {
        console.log('测试')
        console.log(currentTime('2019-2-26 09:00:00'))
        const result = currentTime('2019-2-26 09:00:00');
        expect(result).to.equal(1551142800);
    })
})