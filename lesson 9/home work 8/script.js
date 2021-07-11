// Написать функцию которая будет делать полную (с учетом вложенностей) копию объекта.

const obj = {name: 'Alina', age: 23, adress: {country: 'UA', city: 'Kyiv'}};


//1st work example
const objCopy = JSON.parse(JSON.stringify(obj));
console.table(objCopy);

//2nd тестил этот вариант в консоли, у меня получилось,
// что это два клона включая вложенный объект
// const objCopy = {};

// const objectKeys = Object.keys(obj);

// for(let i = 0; i < objectKeys.length; i++) {
//     objCopy[objectKeys[i]] = obj[objectKeys[i]];
// }


// 3rd тестил этот вариант в консоли, у меня получилось,
// что это два клона включая вложенный объект

// const objCopy = {};

// const objectKeys = Object.keys(obj);

// objectKeys.forEach(function(key){objCopy[key] = obj[key]})

//4th тестил этот вариант в консоли, у меня получилось,
// что это два клона включая вложенный объект

// const objCopy = {};

// for ( let key in obj) {
//     objCopy[key] = obj[key]
// }

//5ts правильный вариант решения
function deepCloneObject(obj) {
    let newObj = {};
    for (let key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) { 
            newObj[key] = deepCloneObject(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

const deepClonePerson = deepCloneObject(obj);
console.table(deepClonePerson);