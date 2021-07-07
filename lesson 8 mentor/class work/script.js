// 1 метод slice
const str = "Hello world";

function slice(str, start, end) {
    let result = "";
    if (str.length  < end) {
        end = str.length;
    }
    for (let i = start; i < end; i++) {
        result += str[i];
    }
    return result;
}

console.log(slice(str, 3, 7));

//2 forEach
const arr = [2,3,4,5];

function forEachCustom(arr, func) {
    for (let i = 0; i < arr.length; i++){
        
    }
}