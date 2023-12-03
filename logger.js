const logger = (req,res,next) => {
    console.log(req.method)
    console.log(req.url)
    var time = new Date().getFullYear()
    console.log(time)
    next()
}
module.exports = logger