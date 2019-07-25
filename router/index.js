/*
 * @Author: 情雨随风
 * @Date: 2019-07-25 20:59:56
 * @LastEditors: 情雨随风
 * @LastEditTime: 2019-07-25 21:02:14
 * @Description: 路由
 */

import proxy from './proxy'
import Router from 'koa-router'
const router = Router()


router.get('/', async(ctx) => {
    ctx.body = `<h1>Holle World</h1>`
})



export default { proxy, router };
