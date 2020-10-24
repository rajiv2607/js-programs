var s = "abcabcbb"
//var data = string.charAt(i)
//var length = string.length
//var count =0
//for(var i=data.length-1;i<length;i++)
//    {
//        if(string.includes(data)) {
//            data+=string.charAt(i+1)
//            continue
//        }
//        break
//    }
//console.log(data)
// let max=0, j, str="";
//    for(j=0; j<s.length; j++){
//        if(str.includes(s[j])){
//            max = Math.max(str.length, max);
//            str = str.substring(str.indexOf(s[j]) + 1) + s[j];
//            console.log(str)
//        }else{
//            str += s[j];
//        }
//    }
//   console.log(Math.max(max, str.length));

 let map = {}
    let start = 0
    let maxLen = 0
    let arr = s.split('')
    
    for (i=0; i < s.length; i++) {
        let current = map[arr[i]]
        if (current!=null && start <= current) {
            start = current + 1
        } else {
            maxLen = Math.max(maxLen, i - start + 1)
        }
        
        map[arr[i]] = i
    }
    
    console.log(maxLen)