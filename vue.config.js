if(process.env.NODE_ENV == "production"){
    module.exports = require("./build/webpack.build.js")
}else{
    module.exports = require("./build/webpack.dev.js")
}