let urls = ['https://dummyjson.com/products/1', 'https://dummyjson.com/carts', 'https://dummyjson.com/users', 'https://dummyjson.com/posts', 'https://dummyjson.com/comments']
var results = []

let fetchUrlParallelPromise = (url_array) =>{
    let arr = []
    url_array.forEach(async element=>{
        var promise = await new Promise((resolve, reject)=>{
            fetch(element).then(response => {
                if(response.status == 200){
                    resolve(response.json())
                }
            }).catch((error)=> console.log(error))
        }).then( res => results.push(res))
        .catch(error=> console.log(error))

        arr.push(promise)
        
    })
    Promise.all(arr)
    
}

console.time("Promise Parallel")
console.log("Implementation using promises (Parallel execution mode)")
console.log("URL Array")
console.log(urls)
fetchUrlParallelPromise(urls)
console.log("Fetched Responses")
console.log(results)
console.timeEnd("Promise Parallel")
