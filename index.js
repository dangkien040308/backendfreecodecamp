const express = require('express')
const app = express()
const {data} = require('./data')


app.get('/',(req,res) => {
    res.send('<h1>Home Page </h1> <a href="api/json">Data</a>')
})
app.get('/api/json/:productID',(req,res) => {
 // console.log(req.params)
  const {productID} = req.params

  const singleProduct = data.find((product) => product.id === Number(productID))
  if (singleProduct) {
    res.json(singleProduct)
  } else res.status(404).send('Page Not Found')
})
//app.get('/api/json/:productID/reviews/:review',(req,res) => {
//    console.log(req.params)
//    res.send('HelloWorld')
//})
app.get('/api/v1/query',(req,res) => {
    console.log(req.query)
    const {search , limit} = req.query
    let newArr = data

    if (search) {
       var products = newArr.filter( (product) => {
        return product.name.startsWith(search)
       })
    }
    if (limit) {
        products = products.slice(0,Number(limit))
    }
    if (products.length < 1) {
     //   res.status(200).send('No product matched with your search')
     return res.status(200).json({success : true , data : []})
    }
    return res.json(products)
})
app.listen(5000, (req,res) => {
    console.log('Server is running')
})