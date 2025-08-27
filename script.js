async function firstSixIncomplete(completed){
    const promise = await fetch ('https://jsonplaceholder.typicode.com/todos')
    
const result = await promise.json()

const posts = result.filter (element => element.completed === completed)
.slice(0,6)


console.log(posts)

console.log (result)
}
   
      

firstSixIncomplete(false)


