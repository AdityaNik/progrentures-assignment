const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json())


const middleware1 = (req, res, next) => {
    if(req.body.number < 10){
        res.status(402).send("Number is smaller than 10");
    }else{
        next();
    }
}

app.use(middleware1)


app.post('/calculateSum', (req, res) =>{
    const number = req.body.number

    let sum = 0;
    for(let i = 1; i <= number; i++){
        sum += i;
    }

    res.status(200).json({
        "number": sum,
    })
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(3000, () => {
    console.log("server is running on port 3000")
})
