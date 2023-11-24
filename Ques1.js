//1. For the given json iterate over all for loops(for, for in, for of, for each)

var person= [{
    "id" : "1A1", 
    "name":"Raja",
    "mail": "raja90@gmail.com"
},
{
    "id" : "1A2", 
    "name":"Sudha",
    "mail": "sudhaguru89@gmail.com"
}];

//for loop

console.log("Using for loop");
for(var i = 0; i < person.length; i++) {
    var obj = person[i];

    console.log("id: "+obj.id);
    console.log("name: "+obj.name);
    console.log("mail: "+obj.mail);
}
//for in loop

console.log("Using for..in loop");
for(var a in person){
    console.log(a,person[a]);
}

//for of

console.log("Using for..of loop");
for(let c of Object.entries(person)){
    console.log(c);
}

//foreach

console.log("Using foreach loop");
  person.forEach(obj => {
    Object.entries(obj).forEach(([key, value]) => {
        console.log(`${key} ${value}`);
    });
});