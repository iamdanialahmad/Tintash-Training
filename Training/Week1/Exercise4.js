//Exercise 4


const cacheName = 'FetchedData'


// Fetching data from the url and caching it
let memoizedFetch = url => {
  // Opening the cache
  caches.open(cacheName).then( cache => {
  // Retrieving from a cache
    cache.match(url).then(response => {

      // If data is present in the cache
      if(response){
        console.log("Fetching Data from Cache")
        console.log(response)
      }
      // if data is not present in the cache
      else{
        // Fetching data from the API
        fetch(url).then( res =>{
          console.log("Fetching Data From API")
          console.log(res)
          console.log("Caching Data")
          // Storing in the cache
          return cache.put(url, res)
        })
      }
    })
 });
}


let urls = ['https://jsonplaceholder.typicode.com/photos', 'https://jsonplaceholder.typicode.com/albums', 'https://jsonplaceholder.typicode.com/comments', 'https://jsonplaceholder.typicode.com/posts', 'https://jsonplaceholder.typicode.com/users']

urls.forEach(element => {
  memoizedFetch(element)
})

//Below code used for testing

// caches.delete(cacheName).then(() => {
//   console.log('Cache successfully deleted!');
// })