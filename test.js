const animals = ['pigs', 'goats', 'sheep'];



const count = animals.push('cows');

console.log(count);

console.log(animals);

animals.push('chickens', 'cats', 'dogs');

console.log(animals);



//--------------------------------------------

const users = ['Sak', 'Marios', 'Ten', 'Zak'];

console.log(users);

const count2 = users.push('Tim');

console.log(users);



addUser('Mitsos');

console.log(users);



removeUser('Ten');

console.log(users);



function addUser(name){

  users.push(name);

  return users

}



function removeUser(name){

    users.splice(users.indexOf(name), 1)

    return users

  }



function add(a,b){

return a + b;

}

console.log(add(10,20))



const subtract = function(a,b){

    return a-b

}

console.log(subtract(100,20))



const user = {

    name: "Sak",

    age: 48,

    idNumb: '123456789'

}

console.log(user.name)

console.log(user.age)