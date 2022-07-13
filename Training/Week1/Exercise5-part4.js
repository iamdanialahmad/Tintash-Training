let urls = ['https://dummyjson.com/products/1', 'https://dummyjson.com/carts', 'https://dummyjson.com/users', 'https://dummyjson.com/posts', 'https://dummyjson.com/comments']
var results = []

let fetchUrlAsyncAwait = async  url_array =>{
    url_array.forEach(async element => {
    try{
        const response = await fetch(element)
        results.push(await response.json())    

    }catch(error) 
    {
        console.log(error)
    }
    });
}


console.time("Async/Await")
console.log("Implementation using async, await ")
console.log("URL Array")
console.log(urls)
fetchUrlAsyncAwait(urls)
console.log("Fetched Responses")
console.log(results)
console.timeEnd("Async/Await")