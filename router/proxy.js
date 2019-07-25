/*
 * @Author: 情雨随风
 * @Date: 2019-07-24 20:11:22
 * @LastEditors: 情雨随风
 * @LastEditTime: 2019-07-25 21:00:33
 * @Description: 代理
 */


import http from './http'
import conf from './router_conf'



//url截取
function sliceRule(rule) {
    const ruleExist = rule.indexOf('?')
    if(ruleExist !== -1) {
        return rule.slice(0, ruleExist)
    }
    else {
        return rule
    }
}


//url过滤
async function isRule(ctx) {
    const url = sliceRule(ctx.url)
    const rule = conf.filter(k => (url === k.url && k.open))
    if(rule.length) {
        return rule[0]
    }
}


//代理axios请求
export default function () {
    return async (ctx, next) => {
        const rule = await isRule(ctx)
        if (rule) {
            ctx.body = await http({ ctx, rule })
        } else {
            next()
        }
    }
}
