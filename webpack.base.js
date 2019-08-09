//Tell webpack to run babel on every file it runs through
module.exports = {
    module: {
        rules: [
            {
                test: /\.js?$/,
                use:{
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.(jpeg|png|gif|woff|woff2|eot|ttf|svg|html)(\?[a-z0-9=.]+)?$/,
                use:[
                    {
                        loader: 'url-loader?limit=8192'
                    }
                ]
            }
        ]
    }
}