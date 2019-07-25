/*
 * @Author: 情雨随风
 * @Date: 2019-07-24 20:03:03
 * @LastEditors: 情雨随风
 * @LastEditTime: 2019-07-25 21:03:56
 * @Description: server入口
 */


import Koa from 'koa'
import cors from 'koa-cors'
import logger from 'koa-logger'
import http from './router'
import proxy from './proxy'

const app = new Koa()

app.use(logger())
app.use(cors({
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'Date'],
    maxAge: 100,
    credentials: true,
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Custom-Header', 'anonymous'],
}))
app.use(proxy())
app.use(http.proxy())
app.use(http.router.routes())

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})