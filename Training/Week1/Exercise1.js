
//Using Rest Operator 
let sum = (...arguments) => {
    console.log(arguments)
    let sum = 0
    arguments.forEach(element => {
        sum += element
    });
    return sum
}

let input = [1,2,3,4,5,6]
console.log(sum(...input))
console.log(sum(4,5,6))
console.log(sum(1,2,3,4,5,6))