// 1) Дописать функцию, чтобы getFullName возвращала "Nikola Tesla" (т.н firstName и secondName через пробел)

const user = {
    firstName: "Nikola",
    secondName: "Tesla",
    getFullName: function() { console.log(this.firstName + ' ' + this.secondName);}
}

user.getFullName()

// 2) вызвать функцию через call, с заданием в виде контекста другой обьект {firstName: "Steve", secondName: "Jobs"}

const secondUser = {
    firstName: "Steve",
    secondName: "Jobs",
}

user.getFullName()