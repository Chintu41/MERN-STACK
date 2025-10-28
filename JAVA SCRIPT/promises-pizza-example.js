//pizza delivery example
const pizzaOrder=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const success=false;
        if(success){
            resolve("pizza is ready")
        }else{
            reject("pizza is overheated")
        }
    },5000)
})

pizzaOrder.then((message)=>{
    console.log("success",message)
}).catch((error)=>{
    console.log("error",error)
})