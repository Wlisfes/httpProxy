/*
 * @Author: 情雨随风
 * @Date: 2019-07-24 20:14:12
 * @LastEditors: 情雨随风
 * @LastEditTime: 2019-07-24 21:13:33
 * @Description: proxy代理
 */


import Proxy from 'http-proxy-middleware'
import conf from './conf'

export default function () {
    return async (ctx, next) => {
        const match = conf.filter(k => {
            const some = k.rule.some(v => {
                const rule = new RegExp(`^${v}($|\/)`)//  /^\/music($|\/)/
                return rule.test(ctx.url)
            })
            return some
        })
        if(match.length) {
            ctx.respond = false
            return Proxy(match[0].conf)(ctx.req, ctx.res, next)
        }
        else {
            return next()
        }
    }
}