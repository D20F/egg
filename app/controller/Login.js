'use strict';

const Controller = require('egg').Controller;
// var UUID = require('uuid');
const { pool } = require('../pg/index')

var pgSQL = {
    select_mailbox:'SELECT * FROM users where mailbox = $1',
    select_name:'SELECT * FROM users where name = $1'
}


class LoginController extends Controller {


    // 创建账号
    async create() {
        const { ctx } = this;
        var body = {}
        // var ID = UUID.v1();
        // console.log(ID)
                // jwt
        // nodemailer  邮箱
        try {
            const parame = this.ctx.query;
            console.log(parame)
            
            // 查询邮箱是否有次账号
            var client = await pool.connect();
            var res = await client.query(pgSQL.select_name,[parame.name])
            client.release()
            if(res.rows.length == 0){
                console.log("没有此账号")
            }else{
                console.log("有此账号")
            }
            console.log("row", res.rows)

            ctx.body = {
                status:200,
                code:0,
                data: res.rows
            };
            
        } catch (error) {
            ctx.body = {
                status:404
            }
            client.release()
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
