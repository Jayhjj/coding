module.exports = {
    module:{
        rules:[
            {
             test: /\.js$/, 
             use:{
                 loader:'babel-loader',
                 option:{
                     presets:[
                        [
                            "@babel/preset-env",
                            {
                                targets:{
                                    browser:['chrome 78']
                                }
                            }
                        ]
                     ],
                     plugins:[] //class -> plugins1 -> funtion   
                 }
                } 
            },
            {
                test: /\.vue$/, 
                use:{
                    oader: require.resolve('./vueloader.js')
                }
            }
        ]
    }
}