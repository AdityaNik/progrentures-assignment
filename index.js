const fs = require('fs');

function readFromFile(err, data) {
    if(err) {
      console.log(err)
      return;
    }

    console.log(data);
}

console.log('hii 1');

fs.readFile('abc.txt', 'utf8', readFromFile);

console.log('hii 2');

for(let i = 0; i < 1000; i++) {
    console.log(i);
}



setTimeout(function(){
    fetch('https://google.com').then(function(value){
        console.log(value);
    })
    console.log('hiii')
}, 2000);

console.log('hiii 1111');