"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

const getLyrics = require("../lib/getLyrics");
var main = require("../lib/main");


describe("99 bottles of beer on the wall", function(){
    sinon.spy(console, 'log');

    it("test1：测试返回所有歌词：", function(){

        var result = main(99);
        var expect_string = getLyrics();

        expect(expect_string.join("")).to.equal(result.join(""));
    });

    it("test2-测试函数中有返回值：", function(){

        main();
        var result = _.flatten(console.log.args).join("\n");
        var expect_string = '';

        expect(expect_string).to.equal(result);
    });
});