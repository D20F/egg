'use strict';

const Controller = require('egg').Controller;




class TestController extends Controller {


    //
    async login() {
        const { ctx } = this;
        try {
            return ctx.body = {
                code: 200,
                token: "dsaada"
            }
        } catch (error) {
            ctx.body = {
                status: 404
            }
            console.log("err", error)
        }
    }

    async info() {
        const { ctx } = this;
        try {
            return ctx.body = {
                code: 200,
                permissions: {
                    role: 'root',
                    module: []
                },
                name: 'DDDDD',
                avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607688458916&di=6217f197ebc9d4e830940e20107f84f6&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F05%2F20180905082547_ltwxq.thumb.400_0.jpeg'
            }
        } catch (error) {
            ctx.body = {
                status: 404
            }
            console.log("err", error)
        }
    }

    async htmls() {
        const { ctx } = this;
        return ctx.body =
            `
        <script language="javascript">
        </script>
        <form action="./test/info" method="GET"> 
            <input type="text" name="text" id="pic" accept="*" />
            <button type="submit">提交</button>
        </form>

        `

    }
}






module.exports = TestController;
