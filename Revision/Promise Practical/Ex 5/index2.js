    let count = 0;
    const btn = document.getElementById('btn');
    const output = document.getElementById('output')

 
    function task() {
        console.log(btn.disabled); 

        // if (btn.disabled) return;
        console.log(btn.disabled); 

 
        btn.disabled = true;
        btn.textContent = 'Processing...';


        console.log(btn.disabled); 

 
        setTimeout(() => {
            count++;
            output.textContent =  count;            
            btn.textContent =   `click me ;)`;            
            btn.disabled = false;
            console.log(btn.disabled); 
        }, 2000);
    }
 
    // btn.addEventListener('click', task);