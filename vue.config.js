// 反向代理，解决跨域问题
module.exports = {
    devServer: {
        proxy: {
            "/adminapi": {
                target: "http://localhost:3000/",
                changeOrigin: true,
            }
        }
    }
}
// 报错 TypeError: defineConfig is not a function
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//     transpileDependencies: true,
//     // 代理
//     devServer: {
//         proxy: {
//             "/users": {
//                 target: "http://localhost:3000/",
//                 changeOrigin: true,
//             }
//         }

//     }
// })