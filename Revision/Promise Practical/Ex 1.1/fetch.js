const btn = document.getElementById("btn")
const res = document.getElementById('res')
const API_KEY = "5d7cf6594bfd574078da8d5081c3df26";

async function fetchWithTimeout(timeout){
    const city = document.getElementById('input').value
    const controller = new AbortController()
    const timeoutId = setTimeout(()=>controller.abort(),timeout)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try{
        const response = await fetch(url, {signal: controller.signal})
        const data = await response.json()
        return data
    }catch(err){
        clearTimeout(timeoutId)
        if (err.name === 'AbortError') {
            throw new Error(`Request timed out after ${timeout}ms`);
        }
        throw err;

    }
}

btn.addEventListener('click',()=>{
    fetchWithTimeout(50)
        .then(data=>{
            res.textContent = data.main.temp
        })
        .catch(error=>{
            console.log(error)
        })
})
