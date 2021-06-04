module.exports={
	lintOnSave: false,
    devServer: {
        overlay: {
            warning: false,
            errors: false
        }
    },
    //处理跨域问题
    dev: {
        proxyTable: {
          '/api': {
            target: 'http://425.0.100.100:8888/',//设置你调用的接口域名和端口号 别忘了加http
            changeOrigin: true,//如果需要跨域
            pathRewrite: {
              '^/api': '/'
                    //这里理解成用面的地址，
                    // 后面组件中我们掉接口时直接用api代替 比如我要调
                    // 用'http://425.0.100.100:8888/user/add'，直接写‘/api/user/add’即可
            }
          }
        }
    }
}