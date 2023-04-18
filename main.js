// Getting data from https://jsonplaceholder.typicode.com/users

// Promise chain
function getDataPromise(){
    return res = fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        if (res.ok){
            return res;
        }else{
            throw new Error('Bad response from server');
        }
    })
    .then(res => res.json())//attach it to json
    .then(data => data);// close the promise
}
// Wrapper for handling the promise
function handleResultPromise() {
    getDataPromise().then(res => {
        console.log(res)
    });
    
}

// Await version
async function getDataAwait(){
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    if(!res.ok) throw new Error('Bad response from server');
    let users = await res.json();
    return users;

}

// handel aysnc data
async function handleResultAsync(){
    try{
        let res = await getDataAwait();
        console.log(res);

    }catch(error){
        console.log(error);
    }
}

//will log a promise
console.log(getDataAwait());
handleResultPromise();
handleResultAsync();