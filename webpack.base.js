//Tell webpack to run babel on every file it runs through
module.exports = {
    module: {
        rules: [
            {
                test: /\.js?$/,
                // loader: 'babel-loader',
                use:{
                    loader: "babel-loader"
                },
                exclude: /node_modules/
                // options: {
                //     presets: [
                //         'react',
                //         'es2015',
                //         'stage-2', //to run some async code
                //         ['env',
                //             { targets: { browsers: ['last 2 versions'] } }
                //         ] //run all the diff
                //         // transform rules needed for latest
                //         // 2 versions of browser
                //     ]
                // }
            },
            {
                // test: /\.(jpeg|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                test: /\.(jpeg|png|gif|woff|woff2|eot|ttf|svg|html)(\?[a-z0-9=.]+)?$/,
                // loader: 'html-loader'
                use:[
                    {
                        loader: 'url-loader?limit=8192'
                    }
                ]
            }
        ]
    }
    // plugins: [
    //     new HtmlWebPackPlugin()
    //   ]
}