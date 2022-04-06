const express = require('express');
const path = require('path')
const app = express() 
const fs = require("fs");


app.use(express.json()) 
app.get('/', (req, res) => {
	res.sendFile( path.join(`${__dirname}/../frontend/index.html`) )
})
app.use('/pub', express.static(`${__dirname}/../frontend/public`))

const orders = path.join(`${__dirname}/../frontend/public/userinfos/`)

let jsonData = []


/* 
try {
	let data = fs.readFileSync(`${orders}pizzaorder.json`)
	jsonData = JSON.parse(data)
} catch (error) {
	jsonData = []
}
 */


app.post("/", (req, res) => {
    const pizzaData = req.body;
	console.log(pizzaData)

	console.log(jsonData);
	jsonData.push(pizzaData)

	fs.writeFile(`${orders}pizzaorder${pizzaData.time}.json`, JSON.stringify(jsonData), (error) => {
        if (error) {
            console.log(error);
        }
    })
})

app.listen(9000, () => {
	console.log('http://127.0.0.1:9000/');
})
