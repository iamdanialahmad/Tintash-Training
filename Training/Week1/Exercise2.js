
Array.prototype.populate = async function(){
    new Promise((resolve, reject)=>{
        this.forEach((element, index) => {
            fetch(element).then(response => {
                if (response.ok) {
                    console.log(response)
                    resolve(response.json())
                }
                else{
                    reject("Cannot fetch")
                }
                
            }).then(res =>{
                this[index] = res
            })
            .catch(err => {
                console.log(err);
            });
        });
    })
}
let urls_array = ['https://dummyjson.com/products/1', 'https://dummyjson.com/carts', 'https://dummyjson.com/users', 'https://dummyjson.com/posts', 'https://dummyjson.com/comments']

urls_array.populate();
























// Array.prototype.populate = function(){
//     this.forEach((element,index)=> {
//         new Promise((resolve,reject)=>{
//             fetch(element).then(response=>{
//                 if(response.ok){
//                     console.log(response)
//                     resolve(response.json())
//                 }
//                 else{
//                     reject(response.status)
//                 }
//             }).then(res=> this[index] = res)
//             .catch(err=>{
//                 console.log(err)
//             })
//         })
//     });
// }
// let arr_url = ['https://dummyjson.com/products/1', 'https://dummyjson.com/carts', 'https://dummyjson.com/users', 'https://dummyjson.com/posts', 'https://dummyjson.com/comments']

// arr_url.populate()
// console.log(arr_url)
