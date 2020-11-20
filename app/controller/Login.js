'use strict';

const Controller = require('egg').Controller;



const { pool } = require('../pg/index')



class LoginController extends Controller {
    async create() {
        const { ctx } = this;





        // const text = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *'
        // const values = ['brianc', 'brian.m.carlson@gmail.com']
        // const text = 'SELECT * FROM user_copy';
        // const text = 'SELECT * FROM user';
        const text = 'SELECT * FROM public.user';

        pool.connect().then(client => {
            return client
                .query(text)
                .then(res => {
                    // 释放连接
                    client.release()
                    console.log('res', res.rows)
                })
                .catch(err => {
                    // 释放连接
                    client.release()
                    console.log('err', err)
                })
        })


        ctx.body = 'hi, egg';

    }
    async sign() {
        const { ctx } = this;


        ctx.body = 'hi, egg';

    }
}

module.exports = LoginController;
