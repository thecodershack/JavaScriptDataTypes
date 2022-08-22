const pro =  new Promise(function(resolve, reject)  {
    let value=false;
    if(value)
    {
        resolve("Resolved");
    }
    else 
    {
        reject("Rejected");
    }
})

pro.then((response) => {
    console.log(" Promise fullfiled "+ response);
}).catch((msg) => {
console.log(" Promise Rejected "+ msg);
})