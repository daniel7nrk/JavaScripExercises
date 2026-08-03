const p = Promise.reject("42");
p.catch(value => console.log("Error: " + value));