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
        next: () => {

            if (i < keys.length) {
                let result = { value: `${keys[i]} ==> ${this[keys[i]]} `, done: false };
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


//3 generator








