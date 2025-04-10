const express = require('express');


const app = express();

app.get('/calculateSum', (req, res) => {

    const num = req.query.num;
    let sum = 0;

    for(let i = 0; i <= num; i++) {
        sum = sum + i;
    }
    
    res.send("Sum is " + sum);
})


app.listen(3000, () => {
    console.log('Server is up and running on port 3000');
})