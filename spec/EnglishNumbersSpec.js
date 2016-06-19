const EnglishNumbers = require("../src/EnglishNumbers")

describe("EnglishNumbers", function () {
    var englishNumbers;

    context("given english number instance", function () {
        beforeEach(function () {
            englishNumbers = new EnglishNumbers()
        });

        context("when converting a number from 0 to 9", function () {
            itConverts(0).to("zero")
            itConverts(1).to("one")
            itConverts(2).to("two")
            itConverts(3).to("three")
            itConverts(4).to("four")
            itConverts(5).to("five")
            itConverts(6).to("six")
            itConverts(7).to("seven")
            itConverts(8).to("eight")
            itConverts(9).to("nine")
        })

        context("when converting a negative number", function () {
            itConverts(-1).to("minus one")
            itConverts(-8).to("minus eight")
        })

        context("when converting a number from 10 to 19", function () {
            itConverts(10).to("ten")
            itConverts(11).to("eleven")
            itConverts(12).to("twelve")
            itConverts(13).to("thirteen")
            itConverts(14).to("fourteen")
            itConverts(15).to("fifteen")
            itConverts(16).to("sixteen")
            itConverts(17).to("seventeen")
            itConverts(18).to("eighteen")
            itConverts(19).to("nineteen")

            itConverts(-17).to("minus seventeen")
        })

        context("when converting an exact ten from 20 to 90", function () {
            itConverts(20).to("twenty")
            itConverts(30).to("thirty")
            itConverts(40).to("forty")
            itConverts(50).to("fifty")
            itConverts(60).to("sixty")
            itConverts(70).to("seventy")
            itConverts(80).to("eighty")
            itConverts(90).to("ninety")
        })

        context("when converting a number from 20 to 99", function () {
            itConverts(21).to("twenty-one")
            itConverts(31).to("thirty-one")
            itConverts(42).to("forty-two")

            itConverts(-97).to("minus ninety-seven")
        })

        context("when converting an exact hundred from 100 to 900", function () {
            itConverts(100).to("one hundred")
            itConverts(200).to("two hundreds")
            itConverts(700).to("seven hundreds")
        })

        context("when converting a number from 100 to 999", function () {
            itConverts(101).to("one hundred one")
            itConverts(201).to("two hundreds one")
            itConverts(312).to("three hundreds twelve")
            itConverts(324).to("three hundreds twenty-four")
            itConverts(974).to("nine hundreds seventy-four")
        })

        context("when converting a number from 1000 to 999999", function () {
            itConverts(1000).to("one thousand")
            itConverts(987654).to(
                "nine hundreds eighty-seven thousands " +
                    "six hundreds fifty-four"
            )
        })

        context("when converting a number from 1000000 to 999999999", function () {
            itConverts(1000000).to("one million")
            itConverts(912345678).to(
                "nine hundreds twelve millions " +
                    "three hundreds forty-five thousands " +
                    "six hundreds seventy-eight"
            )
        })
    })

    function itConverts(number) {
        return {
            to: function (string) {
                it("converts " + number + " to '" + string + "'", function () {
                    expect(englishNumbers.convert(number)).toEqual(string)
                })
            }
        }
    }
})