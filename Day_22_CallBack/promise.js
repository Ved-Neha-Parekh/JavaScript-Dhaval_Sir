let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Hello");
        reject("rejected");
    },1000)
})

promise.then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err)
})