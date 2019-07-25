/*
 * @Date: 2019-07-25 11:58:49
 * @Author: 情雨随风
 * @LastEditors: 情雨随风
 * @LastEditTime: 2019-07-25 20:54:53
 * @Description: axios配置
 */


import axios from 'axios'

const Axios = axios.create()
const http = new class {
    get(props, url) {
        return Axios.get(url, {
            params: props
        })
    }
    post(props, url) {
        return Axios.post(url, props)
    }
}


//axios代理请求
export default async function({ ctx, rule }) {
    try {
        const method = ctx.method

        if (method === "GET") {
            let res = await http.get(ctx.query, `${rule.baseUrl}${rule.url}`)
            return res.data
        }
        else if(method === "POST") {
            let res = await http.get(ctx.request.body, `${rule.baseUrl}${rule.url}`)
            return res.data
        }
        else {
            return {
                code: 404,
                message: '未定义接口'
            }
        }
    } catch (error) {
        return {
            code: 500,
            message: error.toString()
        }
    }
}