const myPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let err = true;
        console.log('async task')
        if(err){
            reject()
        }else{
            resolve()
        }
    }, 1000);
})

console.log(myPromise)