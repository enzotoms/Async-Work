/*Task 02:
 Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API.  
 Use await to wait for the API response and then log the data. */
async function awaitCall() {
    const apiResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    // Logs the JSON object returned by the API call
    const data = await apiResponse.json()
    console.log(data); 
}
// Call the above function
awaitCall();

// async function awaitCall() {
//     const apiResponse = await fetch('https://jsonplaceholder.typicode.com/users');
//     // Logs the JSON object returned by the API call
//     const data = await apiResponse.json()
//     console.log(data); 
// }
// // Call the above function
// awaitCall();

// async function awaitCall() {
//     const apiResponse = await fetch('https://jsonplaceholder.typicode.com/users');
//   // Logs the JSON object returned by the API call
// console.log(await  apiResponse.json());
// }

// // Call the above function
// awaitCall();


/* Task 03:
Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. 
If the API call fails, catch the error and log a user-friendly error message*/
async function awaitCallModified() {
    try{
        const apiResponse = await fetch('https://jsonplaceholder.typicode');
        const data = await apiResponse.json()
        console.log(data)
    }catch(error){
        console.log(error);
        console.log("There was a problem with your request. Please try again.")
    }
}

// Call the above function
awaitCallModified();


/*Task 04:
Awaiting Concurrent Requests: Create an async function concurrentRequests that makes two API calls concurrently using Promise.all(). 
Log the combined results after both requests have resolved*/
async function getPost(){
    try{
        const getPost = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await getPost.json()
        console.log(data)
    }catch(error){
        console.log(error);
        console.log("There was a problem with your request. Please try again.")
    }
}
// getPost()

async function getTodos(){
    try{
        const getTodos = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await getTodos.json()
        console.log(data)
    }catch(error){
        console.log(error);
        console.log("There was a problem with your request. Please try again.")
    }
}
// getTodos();

// using Promise.all to chain async functions together
const concurrentRequests = async () => {
    return await Promise.all( [getPost(), getTodos()] )
};
  
  concurrentRequests();
