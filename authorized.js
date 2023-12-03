const authorized = (req,res,next) => {
    const {user} = req.query
    if (user) {
        req.user = {name : user}
        console.log(req.user)
        next()
    } else {
        res.status(401).send('Not Found')
    }

}
module.exports = authorized