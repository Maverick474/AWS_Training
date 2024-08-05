const add = (a, b) =>{
    return a + b
}

const sub = (a, b) => {
    return a - b
}

exports.mul = (a, b) => a * b // anonymous function


//since our above functions are locally store inside of this file in order to make them global
//in order to access them in other files located in same directory use module.exorts

/* 
Also there is a way of using module.exports
for example if we use module.exports = add;
                      module.exports = sub;
it will ignore the first one and excute the latest export
*/

// inorder to tackle this we use module.exports = {} were we can pass multiple functions key value pairs

/*
module.exports = {
    addF: add,
    subF: sub
}
*/


// We can also directly pass the functions inside module.exports = {} for example:

module.exports = {add, sub}

