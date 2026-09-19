
let obj = {
    name : 'sameer',
    age : 21,
    city : 'roorkee'

};

let obj1 = {}
obj1.naam = 'shamir'
obj1.age = 21;

let emp = new Object()
emp.naam = 'sammer'

// console.log(obj,obj1,emp);
//  console.log(emp.naam);
//  console.log(obj["name"]);
//  console.log(obj[`name`]);


// delete obj.age
// delete obj1['age']


// for (const key in obj) {
//     console.log(`${key} = ${obj[key]}`)
// }


let samir = {
    socalmedia:{
        instaid : 'shamirgour',
        snapchat: 'shamirgour'
    },

    name:"sameer",
    age:21,
    profection:'Devloper',

    address:{
        hoousNO:516,
        StrateName:'badiMasjid',
        city:'Roorkee',
        state:'uk'

    }

}

let test = {
    a:5,
    b:10,
    display(){
console.log(this.a)
    },
    display1:function(){
        console.log(this.a)
    },
    display2: ()=>console.log(this.a)
    
     
}

// test.display()
// test.display1()
// test.display2()







// for (const key in samir) {

//     if (typeof samir[key] === "object") {

//         for (const innerKey in samir[key]) {
//             console.log(`${innerKey} = ${samir[key][innerKey]}`);
//         }

//     } else {

//         console.log(`${key} = ${samir[key]}`);

//     }
// }


// let sum = {
//     b: 5,
//     c: 10,

//     set calculater(a) {
//         this.add = a + this.b + this.c;
//     },

//     get print() {
//         console.log(this.add);
//     }
// };

// sum.calculater = 5;
// sum.print;


// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));


// object copy
//let temp = obj //shallow copy

//deep copy 
let temp = {}
Object.assign(temp,obj) // deep copy
temp.age=25
// console.log(obj);
// console.log(temp);


// let temp1 = Object.create({
//     a:5,
//     b:5
// })
// console.log(temp1);
// console.log(Object.getPrototypeOf(temp1));

// freeze 
// Object.freeze(obj)
// i cant chaange any this update delite  and add  
// obj.age= 44
// console.log(Object.isFrozen(obj));

// console.log(obj);

// Object.seal can allow to update but cant add,update

// Object.seal(obj)
// obj.age=35
// delete obj.age  // cant do 
// console.log(Object.isSealed(obj));
// console.log(obj);


// Object.getOwnPropertyDescriptor(obj,'age',{
//     Writable : false
// })

// // writable      → VALUE change?
// // enumerable    → LIST mein show?
// // configurable  → DELETE / SETTINGS change?
// console.log(Object.getOwnPropertyDescriptor(obj,'age'));


// Object.is(), === both are work  same 
// console.log(obj.age,obj1.age);

// console.log(Object.is(obj.age,obj1.age));




// Object.defineProperty(obj, "mail", {
//     value: "samir@gemail.com",
//     writable: false,
//     enumerable: false,
//     configurable: false
// });

