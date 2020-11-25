'use strict';

const Controller = require('egg').Controller;
var UUID = require('uuid');
const { pool } = require('../pg/index')


class LoginController extends Controller {


    // 创建账号
    async create() {
        const { ctx } = this;
        // var ID = UUID.v1();
        // console.log(ID)
        
        try {
            const parame = this.ctx.query;
            
            


            const text = 'SELECT * FROM users';
            let client = await pool.connect();
            let res = await client.query(text)
            // console.log("row", res.rows)
            client.release()
            ctx.body = {
                status:200,
                data: res.rows
            };
            
        } catch (error) {
            ctx.body = {
                status:404
            }
            console.log("err", error)
        }



    }


    async sign() {
        const { ctx } = this;



        let text = 'INSERT INTO users(name, pwd,id) VALUES($1, $2,$3)';
        let values = ['D', '123456', 'sadsadadsa'];

        pool.connect().then(client => {
            return client
                .query(text, values)
                .then(res => {
                    // 释放连接
                    client.release()
                    console.log('res', res)
                })
                .catch(err => {
                    // 释放连接
                    client.release()
                    console.log('err', err)
                })
        })
        ctx.body = 'hi, egg';

    }

}

module.exports = LoginController;
