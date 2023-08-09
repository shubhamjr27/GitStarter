var checkAnagram = function (strA, strB) {
    var mapOfA = new Map();
    var mapOfB = new Map();
    for (var i = 0; i < strA.length; i++) {
        var ch_1 = strA.charAt(i);
        mapOfA.set(ch_1, mapOfA.has(ch_1) ? mapOfA.get(ch_1) + 1 : 1);
    }
    for (var i = 0; i < strB.length; i++) {
        var ch_2 = strB.charAt(i);
        mapOfB.set(ch_2, mapOfB.has(ch_2) ? mapOfB.get(ch_2) + 1 : 1);
    }
    var anagram = true;
    for (var _i = 0, mapOfA_1 = mapOfA; _i < mapOfA_1.length; _i++) {
        var _a = mapOfA_1[_i], ch = _a[0], countA = _a[1];
        var countB = mapOfB.get(ch);
        if (countA != countB) {
            anagram = false;
            break;
        }
    }
    // for(const[ch, countA] of mapOfA) {
    //     const countB = mapOfB.get(ch);
    //     if(countA != countB) {
    //         anagram = false;
    //         break;
    //     }
    // }
    return anagram;
};
var strA = "abddcd";
var strB = "dbdfac";
var anagram = checkAnagram(strA, strB);
console.log(anagram);
