function EnglishNumbers() {
    const that = this

    const negativePrefix = "minus ";

    const simpleNumbers = [
        "zero", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve", "thirteen", "fourteen",
        "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
    ]

    const tensIndexOffset = 2;
    const tens = [
        "twenty", "thirty", "forty", "fifty",
        "sixty", "seventy", "eighty", "ninety"
    ]

    function convertSimpleNumber(number) {
        return simpleNumbers[number];
    }

    function isNegative(number) {
        return number < 0;
    }

    function convertNegativeNumber(number) {
        return negativePrefix + that.convert(-number);
    }

    function isInTens(number) {
        return number > 19;
    }

    function convertExactTen(firstDigit) {
        return tens[firstDigit - tensIndexOffset];
    }

    function genericConvert(number, divisor, suffix, separator, firstConverter, pluralSuffix) {
        var firstDigit = Math.floor(number / divisor);
        var restDigits = number % divisor;
        var firstPart = firstConverter(firstDigit) + suffix;
        var secondPart = that.convert(restDigits);

        if (firstDigit > 1) firstPart = firstPart + pluralSuffix
        if (restDigits > 0) return firstPart + separator + secondPart
        return firstPart;
    }

    function convertFactory(divisor, suffix, separator, firstConverter, pluralSuffix) {
        return function(number) {
            return genericConvert(number, divisor, suffix, separator, firstConverter, pluralSuffix)
        }
    }

    function isInHundreds(number) {
        return number > 99;
    }

    function isInThousands(number) {
        return number > 999;
    }

    function isInMillions(number) {
        return number > 999999;
    }

    this.convert = function (number) {
        if (isNegative(number)) return convertNegativeNumber(number)
        if (isInMillions(number)) return convertMillions(number)
        if (isInThousands(number)) return convertThousands(number)
        if (isInHundreds(number)) return convertHundreds(number)
        if (isInTens(number)) return convertTens(number)
        return convertSimpleNumber(number)
    };

    const pluralSuffix = "s";
    const noPluralSuffix = "";

    const convertTens = convertFactory(10, "", "-", convertExactTen, noPluralSuffix)
    const convertHundreds = convertFactory(100, " hundred", " ", convertSimpleNumber, pluralSuffix)
    const convertThousands = convertFactory(1000, " thousand", " ", that.convert, pluralSuffix)
    const convertMillions = convertFactory(1000000, " million", " ", that.convert, pluralSuffix)
}

if (typeof module != "undefined") {
    module.exports = EnglishNumbers
}