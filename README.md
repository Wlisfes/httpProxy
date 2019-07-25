#  httpProxy
**使用koa、http-proxy-middleware编写的跨域代理服务器**

##  如何使用：

```
git clone git@github.com:Wlisfes/httpProxy.git    

cd httpProxy    

npm install     安装依赖    

npm run dev     热更新运行    

npm start       静态运行    
```


##  配置：  

###  1.代理转发配置    
**根目录下proxy>conf.js**    

```
export default [
    {
        rule: ['/music'],  //url匹配规则
        conf: {
            target: 'http://music.lipinghua.com',   //代理目标服务器
            changeOrigin: true,
            pathRewrite: {     //重写url
                '^/music': '/'
            }
        }
    }
]

//代理前  http://music.lipinghua.com/banner
//代理后  http://localhost:3001/music/banner

```    

###  2.url代理转发配置、代理服务器设置白名单ip、请求来源必须使用
**根目录下router>router_conf.js**  

```
const conf = [
    {
        method: 'GET',
        baseUrl: 'https://api.bilibili.com',
        url: '/x/web-interface/ranking',
        open: true
    },
    {
        method: 'GET',
        baseUrl: 'https://api.bilibili.com',
        url: '/x/web-interface/zone',
        open: true
    }
]

//代理前  https://api.bilibili.com/x/web-interface/ranking    
//代理前  https://api.bilibili.com/x/web-interface/zone    

//代理后  http://localhost:3001/x/web-interface/ranking 
//代理后  http://localhost:3001/x/web-interface/zone
```

###  本项目只是本人兴致使然写的，一切bug改不负责、哈哈哈。。。