let str = ""
let isPla = true;
str = str.toLowerCase();
let limit =  Math.ceil(str.length/2)

for(let i=0 ;i< limit ;i++  ) {
    if(str[i] !== str[str.length-1-i]) {
        isPla = false;
        break
    }
}

console.log(isPla)
