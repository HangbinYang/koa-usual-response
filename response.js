'use strict'

module.exports = () => {
  return async (ctx, next) => {

    ctx.success = data => {
      ctx.status = 200;
      ctx.body = {
        status: 200,
        data: data || 'ok'
      }
    }

    ctx.bad = error => {
      ctx.status = 200;
      ctx.body = {
        status: 0,
        message: error || 'bad request'
      }
      console.error({
        status: 0,
        message: error || 'bad request',
        context: JSON.stringify(ctx)
      })
    }

    ctx.error = error => {
      ctx.status = 500;
      ctx.body = {
        status: 0,
        message: error || 'bad request'
      }
      console.error({
        status: 500,
        message: error || 'bad request',
        context: JSON.stringify(ctx)
      })
    }

    await next()
  }
}