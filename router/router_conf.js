/*
 * @Date: 2019-07-25 11:58:00
 * @Author: 情雨随风
 * @LastEditors: 情雨随风
 * @LastEditTime: 2019-07-25 20:31:52
 * @Description: axios代理配置
 */


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



export default conf;


















