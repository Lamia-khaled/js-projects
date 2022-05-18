let obj =
{
    name: "mona",
    age: 20,
    address: "aswan"

}

let handler =
{
    get: function (target, prop) {
        if (!(prop in target)) {
            throw `the prop ${prop} doesnt exist`;
        }
        return target[prop];

    },
    set: function (target, prop, value) {
        if (!(prop in target)) {
            throw `the prop ${prop} doesnt exist`;
        }
        else {
            if (prop === 'name') {
                if (typeof value === 'string' && value.length == 7) {
                    target[prop] = value;
                }
                else {
                    throw Error;
                }

            }

            if (prop === 'age') {
                if (typeof value === 'number' && value >= 25 && value <= 60) {
                    target[prop] = value;
                }
                else {
                    throw Error;
                }

            }

            if (prop === 'address') {
                if (typeof value === 'string') {
                    target[prop] = value;
                }
            }


        }

    }
}

let objProxy = new Proxy(obj, handler);
//objProxy.name = "sssssssa";
//console.log(objProxy.name);
//console.log(objProxy.age);
//objProxy.age = 50;
//console.log(objProxy.age);
//  console.log(objProxy.address);
// console.log(objProxy.address = 'alex');



//4 (iterator)

let myobj =
{
    name: "hala",
    age: 22,
    address: "aswan"
}

function iterator() {
    let i = 0;
    let keys = Object.keys(this)
    let it =
    {
        next : function(){
           //let that = this;
           // console.log(this)
            if (i < keys.length) {
                let result = { value: `${keys[i]} ==> ${myobj[keys[i]]} `, done: false };
                i++
                return result
            }
            else {
                return {
                    value: undefined, done: true
                }
            }
        }

    }
    return it;
}

myobj[Symbol.iterator] = iterator;
for (let val of myobj) {
    console.log(val);
}

//loop the object by generator
// function *gen()
// {
//     let keys = Object.keys(this);
//     let i = 0;
//     if(i < keys.length)
//     {
//         let result = { value: `${keys[i]} ==> ${myobj[keys[i]]} `, done: false };
//         i++
//         yield result;
//     }
//     else
//     {
//         yield{
            
//                     value: undefined, done: true 
//         }

//     }

// }

// myobj = gen();
// for(let val of myobj)
// {
//     console.log(val);
// }



//3 generator

// function  Fibonacci(num)
// {
//     var num1 = 0;
//     var num2 = 1;
//     var sum;
//     for(let i = 0; i < num; i++)
//     {
//         sum= num1 + num2;
//         num1 = num2;
//         num2 = sum;
//     } 
//     return num2;
// }

// console.log(Fibonacci(5));


//inheritance
class shape
{
    constructor(_size,_color)
    {
        this.size = _size;
        this.color = _color;
    }

    tostring()
    {
        console.log(this.size,this.color)
    }

}

let sh = new shape(13,"red");
sh.tostring();

class circle extends shape
{
    constructor(_size,_color)
    {
        super(_size,_color);
       
    }
}

let c = new circle(11,"white");
c.tostring();

class rectangle extends shape
{
    constructor(_size,_color)
    {
        super(_size,_color)
    }
}

let r = new rectangle(10,"blue");
r.tostring();