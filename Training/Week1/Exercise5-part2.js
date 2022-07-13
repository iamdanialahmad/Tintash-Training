let urls = ['https://dummyjson.com/products/1', 'https://dummyjson.com/carts', 'https://dummyjson.com/users', 'https://dummyjson.com/posts', 'https://dummyjson.com/comments']
var results = []

let fetchUrlSerialPromise = (url_array) =>{
    url_array.forEach(element=>{
        new Promise((resolve, reject) => {
            fetch(element).then(response => {
                if(response.status == 200){
                    //console.log(response)
                    resolve(response.json())
                }
            }).catch((error)=> console.log(error))
        })
        .then( res => results.push(res))
        .catch(error=> console.log(error))
    })
    
}

console.time("Promise Serial")
console.log("Implementation using promises (Serial execution mode)")
console.log("URL Array")
console.log(urls)
fetchUrlSerialPromise(urls)
console.log("Fetched Responses")
console.log(results)
console.timeEnd("Promise Serial")
