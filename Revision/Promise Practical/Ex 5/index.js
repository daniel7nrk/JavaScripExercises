    let count = 0
    const btn = document.getElementById('btn')
    const output = document.getElementById('output')

    function task(){
        // if(Number(output.textContent) === 100){
        //         count++
        //         output.textContent = count 
        //         console.log('true')  
        // }else{
        // btn.addEventListener('click', () => {
            setTimeout(()=>{
                count++
                output.textContent = count
            },2000)

            console.clear()
            console.log(Number(output.textContent));
            

        // })
        // }    
    }
    // console.log(btn.disabled);