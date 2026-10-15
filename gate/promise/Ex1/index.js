// async function loadUserData() {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/users"
//   );

//   const data = await response.json();

//   console.log(data);
// }


async function loadUserData() {
  try{
    const url = "https://jsonplaceholder.typicode.com/users"
    const controller = new AbortController()

    const runTime = setTimeout(()=>{
        controller.abort()
    },300)

    const response = await fetch(url, {signal: controller.signal});
    const data = await response.json()

    return data
  }catch(err){
    if (err.name === "AbortError" ){
        throw new Error("Out of time!")
    }
  }
}


loadUserData()
            .then(data => console.log(data))
            .catch(err => console.log(err))