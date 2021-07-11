const person = {
    name: "Alina",
    age: 24,
    address: {
        city: "Kyiv", street: "Deribasovskaya", house: 5
    }
}

const obj = {};
obj["name"] = person.name;
obk["age"] = person["age"];

const objectKeys = Object.keys(person);

for(let i = 0; i < objectKeys.length; i++) {
    obj[objectKeys[i]] = person[objectKeys[i]];
}


const obj = {name: 'Alina', age: 23, adress: {country: 'UA', city: 'Kyiv'}};
const objCopy = JSON.parse(JSON.stringify(obj));
console.table(objCopy);