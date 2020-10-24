//function anagrams(stringA, stringB) {
//        /*First, we remove any non-alphabet character using regex and convert
//        convert the strings to lowercase. */
//        stringA = stringA.replace(/[^\w]/g, "").toLowerCase()
//        stringB = stringB.replace(/[^\w]/g, "").toLowerCase()
//
//        //Get the character map of both strings
//        const charMapA = getCharMap(stringA)
//        const charMapB = getCharMap(stringB)
//
//        /* Next, we loop through each character in the charMapA, 
//        and check if it exists in charMapB and has the same value as
//        in charMapA. If it does not, return false */
//        for (let char in charMapA) {
//            if (charMapA[char] !== charMapB[char]) {
//                return false
//            }
//        }
//
//        return true
//    }
//
//    function getCharMap(string) {
//        // We define an empty object that will hold the key - value pairs.
//        let charMap = {}
//
//        /*We loop through each character in the string. if the character 
//        already exists in the map, increase the value, otherwise add it 
//        to the map with a value of 1 */
//        for (let char of string) {
//            charMap[char] = charMap[char] + 1 || 1
//        }
//        return charMap
//    }
// ///////
//
//function isAnagram(stringA, stringB) {
//    const sanitizeString = function (str) {
//        return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
//    }
//    return sanitizeString(stringA) == sanitizeString(stringB)
//}
//
//
//anagrams('listen', 'silent')




function checkAnagram(string1, string2) {
    const objstring1 =  covertToObjMap(string1)
const objstring2 =  covertToObjMap(string2)

for (let char in objstring1) {
    if (objstring1[char] !== objstring2[char]) {
                return false
    }
}

return true
}




function covertToObjMap(text) {
    
    let objectMap = {}
    for( let  te of text) {
        objectMap[te] = objectMap[te] + 1 || 1
    }
    return objectMap
}


let string1 = "a"
let string2 = "ab"
console.log(checkAnagram(string1, string2))


    

















