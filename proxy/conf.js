/*
 * @Author: 情雨随风
 * @Date: 2019-07-24 20:16:21
 * @LastEditors: 情雨随风
 * @LastEditTime: 2019-07-25 13:55:49
 * @Description: proxy代理配置项
 */


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