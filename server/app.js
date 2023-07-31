// DO NOT MODIFY ANYTHING HERE, THE PLACE WHERE YOU NEED TO WRITE CODE IS MARKED CLEARLY BELOW

// require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(function (req, res, next) {
    const allowedOrigins = ['http://localhost:3000'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-credentials", true);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
    next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.enable('trust proxy');


app.post('/api/fetchStockData', async(req, res) => {
    // YOUR CODE GOES HERE, PLEASE DO NOT EDIT ANYTHING OUTSIDE THIS FUNCTION

    stock = req.body.stock
    date = req.body.user

    // let p =  fetch(`https://api.polygon.io/v1/open-close/${stock}/2023-01-09?adjusted=true&apiKey=ZH_cBvICta5hZjv1PMnjm_5lJH6TwUpZ`)
    let p =  fetch(`https://api.polygon.io/v1/open-close/${stock}/${date}?adjusted=true&apiKey=ZH_cBvICta5hZjv1PMnjm_5lJH6TwUpZ`)

    let rest = await p.then((value1) =>{
 
            return value1.json()
    }).then((value2)=>{
            // res.json(value2)
            resi = value2;
            // resi = JSON.stringify(value2)
            console.log("resi",resi)
            return resi
        })

    console.log(rest["status"])
    res.json(rest)
    
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));