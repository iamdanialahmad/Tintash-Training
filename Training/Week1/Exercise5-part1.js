let urls = ['https://dummyjson.com/products/1', 'https://dummyjson.com/carts', 'https://dummyjson.com/users', 'https://dummyjson.com/posts', 'https://dummyjson.com/comments']

var results = []

let fetchUrlCallback = (url_array, callback) =>{

    url_array.forEach((element) => {
        fetch(element).then( response =>{
            if(response.status == 200){
                callback(response.json())
            }
        }).catch(err => console.log("Error"))

    });
    
}

fetchUrlCallback(urls, (response) => {
    response.then(res=>{
        results.push(res)
    })
})

console.time("callback")
console.log("Implementation using callback (Serial execution mode)")
console.log("URL Array")
console.log(urls)
fetchUrlCallback(urls)
console.log("Fetched Responses")
console.log(results)
console.timeEnd("callback")