'use strict';

const Controller = require('egg').Controller;
const { pool } = require('../pg/index')

var pgSQL = {
    select_mailbox: 'SELECT * FROM users where mailbox = $1',
}


class SelectController extends Controller {


    // 查询账号是否存在
    async mailbox() {
        const { ctx } = this;
        try {
            const parame = this.ctx.query;

            var client = await pool.connect();
            var res = await client.query(pgSQL.select_mailbox, [parame.mailbox])
            client.release()
            if (res.rows.length == 0) {
                // console.log("没有此账号")
                return ctx.body = {
                    status: 200,
                    code: 0,
                };
            } else {
                // console.log("有此账号")
                return ctx.body = {
                    status: 200,
                    code: 1,
                };
            }
        } catch (error) {
            ctx.body = {
                status: 404
            }
            client.release()
            console.log("err", error)
        }


    }




}

module.exports = SelectController;
