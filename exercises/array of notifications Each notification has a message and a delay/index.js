










const notifications= [
  { message:"You have a new message", delay:1000 },
  { message:"Your download is ready", delay:3000 },
  { message:"Battery is low", delay:2000 },
  { message:"Friend is online", delay:4000 }
];

notifications.forEach(message =>{
    setTimeout(()=>{
        console.log(message.message)
    },message.delay)
})

// for(let message of notifications){
//     setTimeout(()=>{
//         console.log(message.message);
        
//     },message.delay)
// }